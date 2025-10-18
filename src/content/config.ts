import { defineCollection, z } from 'astro:content';

const productsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    sku: z.string(),
    price: z.number(),
    currency: z.string().default('INR'),
    categories: z.array(z.string()),
    tags: z.array(z.string()),
    images: z.array(z.string()),
    short: z.string(),
    in_stock: z.boolean().default(true),
    featured: z.boolean().default(false),
    bestseller: z.boolean().default(false),
    limited: z.boolean().default(false),
    new: z.boolean().default(false),
    specs: z.object({
      material: z.string().optional(),
      size: z.string().optional(),
      weight: z.string().optional(),
      care: z.string().optional(),
    }).optional(),
    seo: z.object({
      title: z.string().optional(),
      description: z.string().optional(),
    }).optional(),
  }),
});

export const collections = {
  products: productsCollection,
};