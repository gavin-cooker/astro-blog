import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	type: 'content',
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		author: z.string(),
		tags: z.array(z.string()),
		heroImage: z.string().optional(),
		updatedDate: z.coerce.date().optional(),
	}),
});

export const collections = { blog };
