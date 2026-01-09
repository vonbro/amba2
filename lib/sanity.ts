// lib/sanity.ts

import { createClient } from "next-sanity"
import { createImageUrlBuilder, type SanityImageSource } from "@sanity/image-url"

const projectId =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ||
  process.env.SANITY_PROJECT_ID

const dataset =
  process.env.NEXT_PUBLIC_SANITY_DATASET ||
  process.env.SANITY_DATASET

if (!projectId || !dataset) {
  throw new Error("Missing Sanity environment variables")
}

export const client = createClient({
  projectId,
  dataset,
  apiVersion: "2024-03-01",
  useCdn: true,
})

const builder = createImageUrlBuilder(client)

export function urlFor(source: SanityImageSource) {
  return builder.image(source)
}

/* ✅ EXPORT THIS */
export interface SanityGalleryImage {
  _id: string
  title: string
  description?: string
  imageUrl: string
  category: string
  publishedAt: string
}

/* ✅ EXPORT THIS */
export async function getSanityImagesByCategory(
  categorySlug: string
): Promise<SanityGalleryImage[]> {
  const query = `
    *[_type == "galleryImage" && category == $categorySlug]
    | order(publishedAt desc) {
      _id,
      title,
      description,
      "imageUrl": image.asset->url,
      category,
      publishedAt
    }
  `

  return client.fetch(query, { categorySlug })
}
