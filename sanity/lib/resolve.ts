import { urlFor } from "./image";

type Obj = Record<string, unknown>;

const isObj = (v: unknown): v is Obj =>
  typeof v === "object" && v !== null && !Array.isArray(v);

/** One object carrying every key used by any item, to read array items by. */
function template(items: unknown[]): unknown {
  const objects = items.filter(isObj);
  if (objects.length === 0) return items[0];
  const out: Obj = {};
  for (const item of objects) {
    for (const [key, value] of Object.entries(item)) {
      if (Array.isArray(value) && Array.isArray(out[key])) {
        out[key] = [...(out[key] as unknown[]), ...value];
      } else if (out[key] === undefined || out[key] === null) {
        out[key] = value;
      }
    }
  }
  return out;
}

/**
 * Lay Sanity data over the default content, keeping the defaults' shape.
 *
 * - Text: the Studio's value when it has one, otherwise the default.
 * - Lists: the Studio's list replaces the default list as a whole.
 * - Images (`null` in the defaults): become a URL string, or stay `null`.
 *
 * `fill` is off inside list items, where a blank field means blank rather
 * than "fall back to whatever the default list had in that position".
 */
export function resolve<T>(defaults: T, value: unknown, fill = true): T {
  if (defaults === null) {
    if (isObj(value) && value.asset) {
      return urlFor(value).auto("format").url() as T;
    }
    return (typeof value === "string" && value ? value : null) as T;
  }
  if (Array.isArray(defaults)) {
    if (!Array.isArray(value)) return (fill ? defaults : []) as T;
    const shape = template(defaults);
    return value.map((item) =>
      isObj(shape) ? resolve(shape, item, false) : item,
    ) as T;
  }
  if (isObj(defaults)) {
    const source = isObj(value) ? value : {};
    const out: Obj = {};
    for (const key of Object.keys(defaults)) {
      out[key] = resolve(defaults[key], source[key], fill);
    }
    return out as T;
  }
  if (typeof defaults === "string") {
    if (typeof value === "string" && (value !== "" || !fill)) return value as T;
    return (fill ? defaults : "") as T;
  }
  return (typeof value === typeof defaults ? value : defaults) as T;
}
