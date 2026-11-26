import { glyphNames } from "../../components/icons";

/**
 * The Studio's fields are generated from the default content in /content, so
 * the two cannot drift apart: add a key to a default object and it becomes an
 * editable field.
 *
 *   string            → text field (multi-line when the default is long)
 *   string[]          → list of text lines
 *   object[]          → list of items with the same fields
 *   null              → image
 *   key named `icon`  → a pick-list of the site's icons
 */

type Field = Record<string, unknown>;
type Obj = Record<string, unknown>;

const isObj = (v: unknown): v is Obj =>
  typeof v === "object" && v !== null && !Array.isArray(v);

const ICONS = ["flower", ...glyphNames].map((value) => ({
  title: value,
  value,
}));

/** "bottomChipLabel" → "Bottom chip label" */
function titleOf(name: string) {
  const words = name.replace(/([a-z0-9])([A-Z])/g, "$1 $2").toLowerCase();
  return words.charAt(0).toUpperCase() + words.slice(1);
}

function merged(items: Obj[]): Obj {
  const out: Obj = {};
  for (const item of items) {
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

export function fieldsOf(defaults: Obj): Field[] {
  return Object.entries(defaults).map(([name, value]) => fieldOf(name, value));
}

function fieldOf(name: string, value: unknown): Field {
  const base = { name, title: titleOf(name) };

  if (value === null) {
    return { ...base, type: "image", options: { hotspot: true } };
  }
  if (name === "icon") {
    return { ...base, type: "string", options: { list: ICONS } };
  }
  if (typeof value === "number") return { ...base, type: "number" };
  if (typeof value === "boolean") return { ...base, type: "boolean" };
  if (typeof value === "string") {
    return value.length > 80
      ? { ...base, type: "text", rows: 4 }
      : { ...base, type: "string" };
  }
  if (Array.isArray(value)) {
    const objects = value.filter(isObj);
    if (objects.length === 0) {
      return { ...base, type: "array", of: [{ type: "string" }] };
    }
    const shape = merged(objects);
    const strings = Object.keys(shape).filter(
      (key) => typeof shape[key] === "string" && key !== "icon",
    );
    return {
      ...base,
      type: "array",
      of: [
        {
          type: "object",
          name: `${name}Item`,
          title: "Item",
          fields: fieldsOf(shape),
          preview: {
            select: {
              ...(strings[0] ? { title: strings[0] } : {}),
              ...(strings[1] ? { subtitle: strings[1] } : {}),
            },
          },
        },
      ],
    };
  }
  if (isObj(value)) {
    return {
      ...base,
      type: "object",
      fields: fieldsOf(value),
      options: { collapsible: true, collapsed: true },
    };
  }
  return { ...base, type: "string" };
}
