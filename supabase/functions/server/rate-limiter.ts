const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

const cleanupIntervalMs = 60 * 60 * 1000;

setInterval(() => {
  const now = Date.now();
  for (const [key, record] of rateLimitMap.entries()) {
    if (now > record.resetTime) {
      rateLimitMap.delete(key);
    }
  }
}, cleanupIntervalMs);

export const checkRateLimit = (
  key: string,
  maxRequests = 5,
  windowMs = 60 * 60 * 1000,
): boolean => {
  const now = Date.now();
  const record = rateLimitMap.get(key);

  if (!record || now > record.resetTime) {
    rateLimitMap.set(key, { count: 1, resetTime: now + windowMs });
    return true;
  }

  if (record.count >= maxRequests) {
    return false;
  }

  record.count += 1;
  return true;
};
