import type { StructureResolver } from "sanity/structure";
import { singletons } from "./schemaTypes";

/** Studio sidebar: the one-off pages first, then the collections. */
export const structure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      ...singletons.map((s) =>
        S.listItem()
          .title(s.title)
          .id(s.name)
          .child(S.document().schemaType(s.name).documentId(s.name)),
      ),
      S.divider(),
      S.documentTypeListItem("servicePage").title("Service pages"),
      S.documentTypeListItem("article").title("Articles"),
    ]);
