import { getCollection } from 'astro:content';

export const prerender = true;

export async function GET() {
  const products = await getCollection('products');

  const payload = products.map((product) => {
    const data = product.data;
    const badges: string[] = [];

    if (data.featured) badges.push('FEATURED');
    if (data.bestseller) badges.push('BESTSELLER');
    if (data.limited) badges.push('LIMITED');
    if (data.new) badges.push('NEW');

    return {
      title: data.title,
      short: data.short,
      tags: data.tags || [],
      categories: data.categories || [],
      url: `/products/${product.id}/`,
      price: data.price,
      currency: data.currency || 'INR',
      badges,
      image: data.images?.[0] || '/images/placeholder.png',
      in_stock: data.in_stock !== false,
    };
  });

  return new Response(JSON.stringify(payload), {
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'public, max-age=300',
    },
  });
}
