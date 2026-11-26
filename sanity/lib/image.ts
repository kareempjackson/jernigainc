import {
  createImageUrlBuilder,
  type SanityImageSource,
} from "@sanity/image-url";
import { dataset, projectId } from "../env";

const builder = createImageUrlBuilder({ projectId, dataset });

/** URL builder for a Sanity image field, e.g. `urlFor(photo).width(800).url()`. */
export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}
