import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
import * as kv from "./kv_store.tsx";
import { checkRateLimit } from "./rate-limiter.ts";

const defaultAllowedOrigins = [
  "http://localhost:5173",
  "http://127.0.0.1:5173",
  "http://127.0.0.1:5174",
];
const envAllowedOrigins = (Deno.env.get("ALLOWED_ORIGINS") || "")
  .split(",")
  .map((origin) => origin.trim().replace(/\/+$/, ""))
  .filter((origin) => origin.length > 0);
const allowedOrigins = new Set([...defaultAllowedOrigins, ...envAllowedOrigins]);

const isOriginAllowed = (origin?: string) => {
  if (!origin) {
    return true;
  }
  return allowedOrigins.has(origin);
};

const ensureAdminAuthorized = (c: any) => {
  const adminToken = Deno.env.get("ADMIN_SECRET_TOKEN");

  if (!adminToken) {
    console.error("[Titah] ADMIN_SECRET_TOKEN is not configured.");
    return { status: 500, body: { error: "Configuration serveur invalide" } };
  }

  const authHeader = c.req.header("Authorization") || c.req.header("authorization");

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return { status: 401, body: { error: "Non autorisé" } };
  }

  const token = authHeader.slice("Bearer ".length).trim();

  if (!token || token !== adminToken) {
    return { status: 401, body: { error: "Non autorisé" } };
  }

  return null;
};

const app = new Hono();

// Enable logger
app.use('*', logger(console.log));

// Enable CORS for all routes and methods
app.use("*", async (c, next) => {
  const origin = c.req.header("origin");
  if (origin && !isOriginAllowed(origin)) {
    console.warn(`[Titah] Blocked request from disallowed origin: ${origin}`);
    return c.json({ error: "Origin non autorisée" }, 403);
  }
  await next();
});

app.use(
  "/*",
  cors({
    origin: (origin) => {
      if (!origin) {
        return "";
      }
      return isOriginAllowed(origin) ? origin : "";
    },
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
  }),
);

// Health check endpoint
app.get("/make-server-2fc91c13/health", (c) => {
  return c.json({ status: "ok" });
});

// Get all contacts (admin endpoint - should be protected in production)
app.get("/make-server-2fc91c13/contacts", async (c) => {
  const authorizationError = ensureAdminAuthorized(c);
  if (authorizationError) {
    return c.json(authorizationError.body, authorizationError.status);
  }

  try {
    console.log("Fetching all contacts from database");
    
    // Récupérer tous les contacts avec le préfixe "contact_"
    const contacts = await kv.getByPrefix("contact_");
    
    // Trier par date (plus récents en premier)
    const sortedContacts = contacts.sort((a, b) => {
      return new Date(b.submittedAt).getTime() - new Date(a.submittedAt).getTime();
    });
    
    console.log(`Found ${sortedContacts.length} contacts`);
    
    return c.json({ 
      success: true, 
      count: sortedContacts.length,
      contacts: sortedContacts 
    });
  } catch (error) {
    console.error("Error fetching contacts:", error);
    return c.json({ 
      error: "Impossible de récupérer les contacts"
    }, 500);
  }
});

// Get contact statistics
app.get("/make-server-2fc91c13/contacts/stats", async (c) => {
  const authorizationError = ensureAdminAuthorized(c);
  if (authorizationError) {
    return c.json(authorizationError.body, authorizationError.status);
  }

  try {
    const contacts = await kv.getByPrefix("contact_");
    
    // Calculer les statistiques
    const stats = {
      total: contacts.length,
      byStatus: {
        new: contacts.filter(c => c.status === "new").length,
        read: contacts.filter(c => c.status === "read").length,
        contacted: contacts.filter(c => c.status === "contacted").length,
        closed: contacts.filter(c => c.status === "closed").length,
      },
      byService: {} as Record<string, number>,
      byEstablishmentType: {} as Record<string, number>,
      last24h: 0,
      last7days: 0,
      last30days: 0,
    };
    
    const now = new Date();
    const oneDayAgo = new Date(now.getTime() - 24 * 60 * 60 * 1000);
    const sevenDaysAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
    const thirtyDaysAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
    
    contacts.forEach(contact => {
      // Par service
      stats.byService[contact.service] = (stats.byService[contact.service] || 0) + 1;
      
      // Par type d'établissement
      stats.byEstablishmentType[contact.establishmentType] = 
        (stats.byEstablishmentType[contact.establishmentType] || 0) + 1;
      
      // Par période
      const submittedDate = new Date(contact.submittedAt);
      if (submittedDate > oneDayAgo) stats.last24h++;
      if (submittedDate > sevenDaysAgo) stats.last7days++;
      if (submittedDate > thirtyDaysAgo) stats.last30days++;
    });
    
    return c.json({ success: true, stats });
  } catch (error) {
    console.error("Error calculating stats:", error);
    return c.json({ error: "Impossible de calculer les statistiques" }, 500);
  }
});

// Contact form submission endpoint
app.post("/make-server-2fc91c13/contact", async (c) => {
  try {
    const formData = await c.req.json();

    const rateLimitKey =
      c.req.header("x-forwarded-for")?.split(",")[0].trim() ||
      c.req.header("x-real-ip") ||
      c.req.header("cf-connecting-ip") ||
      "unknown";

    if (!checkRateLimit(rateLimitKey)) {
      console.warn(`[Titah] Rate limit exceeded for key: ${rateLimitKey}`);
      return c.json(
        { error: "Trop de demandes. Veuillez réessayer plus tard." },
        429,
      );
    }
    
    // Sanitize and validate inputs
    const sanitize = (str: string) => str.trim().slice(0, 500);
    
    // Validate required fields
    if (!formData.firstName?.trim() || !formData.lastName?.trim() || !formData.email?.trim() || 
        !formData.establishmentType || !formData.service || !formData.message?.trim() || 
        !formData.consent) {
      return c.json({ error: "Tous les champs obligatoires doivent être remplis" }, 400);
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      return c.json({ error: "Format d'email invalide" }, 400);
    }

    // Validate phone format (optional but if provided must be valid)
    if (formData.phone && formData.phone.trim()) {
      const phoneRegex = /^[\d\s\+\-\(\)\.]+$/;
      if (!phoneRegex.test(formData.phone) || formData.phone.length > 20) {
        return c.json({ error: "Format de téléphone invalide" }, 400);
      }
    }

    // Validate message length
    if (formData.message.length > 2000) {
      return c.json({ error: "Le message est trop long (maximum 2000 caractères)" }, 400);
    }

    // Validate options array
    if (formData.options && (!Array.isArray(formData.options) || formData.options.length > 20)) {
      return c.json({ error: "Options invalides" }, 400);
    }

    // Prepare sanitized contact data
    const timestamp = new Date().toISOString();
    const contactId = `contact_${Date.now()}_${Math.random().toString(36).substring(7)}`;
    
    const contactData = {
      id: contactId,
      submittedAt: timestamp,
      firstName: sanitize(formData.firstName),
      lastName: sanitize(formData.lastName),
      email: sanitize(formData.email),
      phone: sanitize(formData.phone || ""),
      establishmentType: formData.establishmentType,
      service: formData.service,
      options: (formData.options || []).slice(0, 20),
      message: sanitize(formData.message),
      status: "new", // new, read, contacted, closed
      metadata: {
        userAgent: c.req.header("user-agent") || "unknown",
      }
    };

    console.log("Saving contact to database - ID:", contactId);

    // Save to Supabase database
    try {
      await kv.set(contactId, contactData);
      console.log("Contact successfully saved to database");
    } catch (dbError: any) {
      console.error("Database error while saving contact:", dbError);
      // ⚠️ SÉCURITÉ : Ne pas exposer les détails de l'erreur database au client
      return c.json({ 
        error: "Impossible d'enregistrer votre demande. Veuillez réessayer plus tard."
      }, 500);
    }

    return c.json({ 
      success: true, 
      message: "Votre demande a été envoyée avec succès" 
    });

  } catch (error) {
    console.error("Critical error processing contact form:", error);
    // ⚠️ SÉCURITÉ : Message générique pour ne pas exposer les détails internes
    return c.json({ 
      error: "Une erreur technique est survenue. Veuillez réessayer."
    }, 500);
  }
});

Deno.serve(app.fetch);
