import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const specsSchema = z.object({
  material: z.string().optional(),
  size: z.string().optional(),
  weight: z.string().optional(),
  care: z.string().optional(),
  dimensions: z.string().optional(),
  technique: z.string().optional(),
  dyes: z.string().optional(),
  origin: z.string().optional(),
  finish: z.string().optional(),
}).optional();

const productBaseSchema = z.object({
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
  specs: specsSchema,
  specifications: specsSchema,
  seo: z.object({
    title: z.string().optional(),
    description: z.string().optional(),
    meta_title: z.string().optional(),
    meta_description: z.string().optional(),
    focus_keyword: z.string().optional(),
  }).optional(),
});

type ProductBaseData = z.infer<typeof productBaseSchema>;

const productsCollection = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/products' }),
  schema: productBaseSchema.transform((data: ProductBaseData) => {
    const normalizedSeo = data.seo
      ? {
          ...data.seo,
          title: data.seo.title ?? data.seo.meta_title,
          description: data.seo.description ?? data.seo.meta_description,
        }
      : undefined;

    return {
      ...data,
      specs: data.specs ?? data.specifications,
      seo: normalizedSeo,
    };
  }),
});

export const collections = {
  products: productsCollection,
};
