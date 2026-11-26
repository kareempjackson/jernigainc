/**
 * The Sanity Studio, mounted at /studio. Every path under it is handled by
 * the Studio's own router. It sits outside the (site) group, so it has no
 * site header or footer.
 */
import { NextStudio } from "next-sanity/studio";
import config from "../../../sanity.config";

export { metadata, viewport } from "next-sanity/studio";

export default function StudioPage() {
  return <NextStudio config={config} />;
}
