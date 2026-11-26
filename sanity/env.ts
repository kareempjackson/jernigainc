/**
 * Sanity project settings. The project ID and dataset are public identifiers
 * (they appear in every API URL), so they are safe to keep as defaults here;
 * set the env vars to point a deployment at a different project or dataset.
 */
export const projectId =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "8x0yhdlq";

export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

/** Pin the API behaviour to a date; bump deliberately. */
export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2026-11-01";
