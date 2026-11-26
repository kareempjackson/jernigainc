/**
 * Fill an empty dataset with the site's default content, so every page and
 * field shows up in the Studio ready to edit.
 *
 *   npx sanity exec sanity/seed.ts --with-user-token
 *
 * Safe to re-run: documents that already exist are left untouched, so edits
 * made in the Studio are never overwritten.
 */
import { getCliClient } from "sanity/cli";
import { articleDefaults } from "../content/insights";
import { serviceDefaults } from "../content/services";
import { apiVersion } from "./env";
import { singletons } from "./schemaTypes";

type Obj = Record<string, unknown>;

/** Sanity form: list items need a `_key`, and empty image slots are left out. */
function prepare(value: unknown): unknown {
  if (Array.isArray(value)) {
    return value.map((item, i) => {
      const prepared = prepare(item);
      return typeof prepared === "object" && prepared !== null
        ? { _key: `item${i}`, ...(prepared as Obj) }
        : prepared;
    });
  }
  if (typeof value === "object" && value !== null) {
    const out: Obj = {};
    for (const [key, v] of Object.entries(value)) {
      if (v !== null) out[key] = prepare(v);
    }
    return out;
  }
  return value;
}

const docs = [
  ...singletons.map((s) => ({
    _id: s.name,
    _type: s.name,
    ...(prepare(s.defaults) as Obj),
  })),
  ...serviceDefaults.map((service) => ({
    _id: `servicePage-${service.slug}`,
    _type: "servicePage",
    ...(prepare(service) as Obj),
  })),
  ...articleDefaults.map((article, i) => ({
    _id: `article-placeholder-${i + 1}`,
    _type: "article",
    ...(prepare(article) as Obj),
  })),
];

async function main() {
  const client = getCliClient({ apiVersion });
  const tx = client.transaction();
  for (const doc of docs) tx.createIfNotExists(doc);
  const result = await tx.commit();
  console.log(
    `Seeded ${client.config().dataset}: ${docs.length} documents checked,`,
    `${result.results.length} operations.`,
  );
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
