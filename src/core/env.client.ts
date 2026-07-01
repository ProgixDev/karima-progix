import { z } from "zod";

/**
 * Client-exposed environment. These are inlined into the browser bundle, so they
 * are PUBLIC by definition — only `NEXT_PUBLIC_*` values that are safe to ship.
 */
const clientEnvSchema = z.object({
  // Frontend-only access gate (site-gate feature). PUBLIC by design: it is
  // inlined into the browser bundle and anyone can read it in devtools. It is a
  // soft gate code, not a secret — it only deters casual access and must never
  // protect real secrets. Override per app via NEXT_PUBLIC_SITE_ACCESS_CODE.
  NEXT_PUBLIC_SITE_ACCESS_CODE: z.string().min(1).default("progix2026"),
});

// NEXT_PUBLIC_* must be referenced statically for Next.js to inline them.
export const clientEnv = clientEnvSchema.parse({
  NEXT_PUBLIC_SITE_ACCESS_CODE: process.env.NEXT_PUBLIC_SITE_ACCESS_CODE,
});
