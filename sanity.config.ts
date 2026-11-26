"use client";

/** Configuration for the Sanity Studio embedded at /studio. */
import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { apiVersion, dataset, projectId } from "./sanity/env";
import { schemaTypes, singletons } from "./sanity/schemaTypes";
import { structure } from "./sanity/structure";

const singletonTypes = new Set<string>(singletons.map((s) => s.name));

export default defineConfig({
  name: "default",
  title: "Jernigan & Associates",
  basePath: "/studio",
  projectId,
  dataset,
  schema: {
    types: schemaTypes,
    // One-off pages cannot be created a second time from "New document".
    templates: (templates) =>
      templates.filter((t) => !singletonTypes.has(t.schemaType)),
  },
  document: {
    // ...nor duplicated or deleted.
    actions: (actions, { schemaType }) =>
      singletonTypes.has(schemaType)
        ? actions.filter(
            (a) => a.action !== "duplicate" && a.action !== "delete",
          )
        : actions,
  },
  plugins: [
    structureTool({ structure }),
    // Query playground, for trying GROQ against the dataset.
    visionTool({ defaultApiVersion: apiVersion }),
  ],
});
