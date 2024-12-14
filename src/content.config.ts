import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const contentSchema = z.object({
	title: z.string(),
	description: z.string(),
	// Transform string to Date object
	pubDate: z.coerce.date(),
	updatedDate: z.coerce.date().optional(),
	heroImage: z.string().optional(),
});

const blog = defineCollection({
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	schema: contentSchema,
});

const projects = defineCollection({
	loader: glob({ base: './src/content/projects', pattern: '**/*.{md,mdx}' }),
	schema: contentSchema,
});

export const collections = { 
	blog,
	projects
};
