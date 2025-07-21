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

export const collections = {algorithms};
