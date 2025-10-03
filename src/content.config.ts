import { defineCollection, z } from "astro:content";

import { glob, file } from "astro/loaders";

// 3. Define your collection(s)
const algorithms = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "src/content/algorithms" }),
  schema: z.object({
    title: z.string(),
    // date:z.date(),
    tags: z.array(z.string()),
  }),
});

const posts = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "src/content/posts" }),
  schema: z.object({
    title: z.string(),
    date: z.string(),
  }),
});

export const collections = { algorithms, posts };
