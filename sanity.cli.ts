/** Settings for the `sanity` command line tool (e.g. `npx sanity deploy`). */
import { defineCliConfig } from "sanity/cli";
import { dataset, projectId } from "./sanity/env";

export default defineCliConfig({ api: { projectId, dataset } });
