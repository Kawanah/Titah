import { createClient } from "jsr:@supabase/supabase-js@2.49.8";
const getSupabase = ()=>{
  const url = Deno.env.get("SUPABASE_URL");
  const serviceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
  if (!url || !serviceKey) {
    throw new Error("[Titah] SUPABASE_URL ou SUPABASE_SERVICE_ROLE_KEY manquant");
  }
  return createClient(url, serviceKey, {
    auth: {
      persistSession: false
    }
  });
};
import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
import { checkRateLimit } from "./rate-limiter.ts";
const defaultAllowedOrigins = [
  "http://localhost:5173",
  "http://127.0.0.1:5173",
  "http://127.0.0.1:5174"
];
const envAllowedOrigins = (Deno.env.get("ALLOWED_ORIGINS") || "").split(",").map((origin)=>origin.trim().replace(/\/+$/, "")).filter((origin)=>origin.length > 0);
const allowedOrigins = new Set([
  ...defaultAllowedOrigins,
  ...envAllowedOrigins
]);
const isOriginAllowed = (origin)=>{
  if (!origin) {
    return true;
  }
  return allowedOrigins.has(origin);
};
const ensureAdminAuthorized = (c)=>{
  const adminToken = Deno.env.get("ADMIN_SECRET_TOKEN");
  if (!adminToken) {
    console.error("[Titah] ADMIN_SECRET_TOKEN is not configured.");
    return {
      status: 500,
      body: {
        error: "Configuration serveur invalide"
      }
    };
  }
  const authHeader = c.req.header("Authorization") || c.req.header("authorization");
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return {
      status: 401,
      body: {
        error: "Non autorisé"
      }
    };
  }
  const token = authHeader.slice("Bearer ".length).trim();
  if (!token || token !== adminToken) {
    return {
      status: 401,
      body: {
        error: "Non autorisé"
      }
    };
  }
  return null;
};
const app = new Hono();
// Enable logger
app.use('*', logger(console.log));
// Enable CORS for all routes and methods
app.use("*", async (c, next)=>{
  const origin = c.req.header("origin");
  if (origin && !isOriginAllowed(origin)) {
    console.warn(`[Titah] Blocked request from disallowed origin: ${origin}`);
    return c.json({
      error: "Origin non autorisée"
    }, 403);
  }
  await next();
});
app.use("/*", cors({
  origin: (origin)=>{
    if (!origin) {
      return "";
    }
    return isOriginAllowed(origin) ? origin : "";
  },
  allowHeaders: [
    "Content-Type",
    "Authorization"
  ],
  allowMethods: [
    "GET",
    "POST",
    "PUT",
    "DELETE",
    "OPTIONS"
  ],
  exposeHeaders: [
    "Content-Length"
  ],
  maxAge: 600
}));
// Health check endpoint
app.get("/health", (c)=>{
  return c.json({
    status: "ok"
  });
});
// Get all contacts (admin endpoint - should be protected in production)
app.get("/contacts", async (c) => {
  const authorizationError = ensureAdminAuthorized(c);
  if (authorizationError) {
    return c.json(authorizationError.body, authorizationError.status);
  }

  try {
    const supabase = getSupabase();
    const { data, error } = await supabase
      .from("formulaire")
      .select(
        "id, created_at, prenom, nom, email, telephone, type_etablissement, service_souhaite, options_souhaitees, description_projet, accord_confidentialite"
      )
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Error fetching contacts:", error);
      return c.json({ error: "Impossible de récupérer les contacts" }, 500);
    }

    const contacts = (data ?? []).map((row) => ({
      id: row.id,
      submittedAt: row.created_at,
      firstName: row.prenom,
      lastName: row.nom,
      email: row.email,
      phone: row.telephone ?? "",
      establishmentType: row.type_etablissement,
      service: row.service_souhaite,
      options: row.options_souhaitees
        ? row.options_souhaitees.split(",").map((v) => v.trim()).filter(Boolean)
        : [],
      message: row.description_projet,
      consent: !!row.accord_confidentialite,
    }));

    return c.json({ success: true, count: contacts.length, contacts });
  } catch (error) {
    console.error("Error fetching contacts:", error);
    return c.json(
      { error: "Impossible de récupérer les contacts" },
      500
    );
  }
});


// Get contact statistics
app.get("/contacts/stats", async (c) => {
  const authorizationError = ensureAdminAuthorized(c);
  if (authorizationError) {
    return c.json(authorizationError.body, authorizationError.status);
  }

  try {
    const supabase = getSupabase();
    const { data, error } = await supabase
      .from("formulaire")
      .select("id, created_at, type_etablissement, service_souhaite");

    if (error) {
      console.error("Error calculating stats:", error);
      return c.json({ error: "Impossible de calculer les statistiques" }, 500);
    }

    const stats = {
      total: data?.length ?? 0,
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

    (data ?? []).forEach((row) => {
      stats.byService[row.service_souhaite] =
        (stats.byService[row.service_souhaite] || 0) + 1;
      stats.byEstablishmentType[row.type_etablissement] =
        (stats.byEstablishmentType[row.type_etablissement] || 0) + 1;

      const createdAt = new Date(row.created_at);
      if (createdAt > oneDayAgo) stats.last24h++;
      if (createdAt > sevenDaysAgo) stats.last7days++;
      if (createdAt > thirtyDaysAgo) stats.last30days++;
    });

    return c.json({ success: true, stats });
  } catch (error) {
    console.error("Error calculating stats:", error);
    return c.json(
      { error: "Impossible de calculer les statistiques" },
      500
    );
  }
});

// Contact form submission endpoint
app.post("/contact", async (c)=>{
  try {
    const formData = await c.req.json();
    const rateLimitKey = c.req.header("x-forwarded-for")?.split(",")[0].trim() || c.req.header("x-real-ip") || c.req.header("cf-connecting-ip") || "unknown";
    if (!checkRateLimit(rateLimitKey)) {
      console.warn(`[Titah] Rate limit exceeded for key: ${rateLimitKey}`);
      return c.json({
        error: "Trop de demandes. Veuillez réessayer plus tard."
      }, 429);
    }
    // Sanitize and validate inputs
    const sanitize = (str)=>str.trim().slice(0, 500);
    // Validate required fields
    if (!formData.firstName?.trim() || !formData.lastName?.trim() || !formData.email?.trim() || !formData.establishmentType || !formData.service || !formData.message?.trim() || !formData.consent) {
      return c.json({
        error: "Tous les champs obligatoires doivent être remplis"
      }, 400);
    }
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      return c.json({
        error: "Format d'email invalide"
      }, 400);
    }
    // Validate phone format (optional but if provided must be valid)
    if (formData.phone && formData.phone.trim()) {
      const phoneRegex = /^[\d\s\+\-\(\)\.]+$/;
      if (!phoneRegex.test(formData.phone) || formData.phone.length > 20) {
        return c.json({
          error: "Format de téléphone invalide"
        }, 400);
      }
    }
    // Validate message length
    if (formData.message.length > 2000) {
      return c.json({
        error: "Le message est trop long (maximum 2000 caractères)"
      }, 400);
    }
    // Validate options array
    if (formData.options && (!Array.isArray(formData.options) || formData.options.length > 20)) {
      return c.json({
        error: "Options invalides"
      }, 400);
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
      status: "new",
      metadata: {
        userAgent: c.req.header("user-agent") || "unknown"
      }
    };
    console.log("Saving contact to database - ID:", contactId);
    // Save to Supabase database
    // Save to Supabase database
    try {
      const supabase = getSupabase();
      const { error } = await supabase.from("formulaire").insert({
        prenom: contactData.firstName,
        nom: contactData.lastName,
        email: contactData.email,
        telephone: contactData.phone || null,
        type_etablissement: contactData.establishmentType,
        service_souhaite: contactData.service,
        options_souhaitees: (contactData.options || []).join(", "),
        description_projet: contactData.message,
        accord_confidentialite: !!formData.consent
      });
      if (error) {
        console.error("Database error while saving contact:", error);
        return c.json({
          error: "Impossible d'enregistrer votre demande. Veuillez réessayer plus tard.",
          details: error.message ?? error
        }, 500);
      }
      console.log("Contact successfully saved to database");
    } catch (dbError) {
      console.error("Database error while saving contact:", dbError);
      return c.json({
        error: "Impossible d'enregistrer votre demande. Veuillez réessayer plus tard.",
        details: dbError instanceof Error ? dbError.message : String(dbError)
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
