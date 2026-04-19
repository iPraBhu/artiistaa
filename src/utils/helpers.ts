import { SITE_CONFIG } from './constants';
import type { ProductFrontmatter, SEOData, ProductSchema, LocalBusinessSchema } from '@/types';

// Utility functions for the Artiistaa store

function normalizeBaseUrl(baseUrl: string): string {
  return baseUrl.replace(/\/+$/, '');
}

export function toAbsoluteUrl(pathOrUrl: string): string {
  if (/^https?:\/\//i.test(pathOrUrl)) {
    return pathOrUrl;
  }
  return new URL(pathOrUrl, `${normalizeBaseUrl(SITE_CONFIG.SITE_URL)}/`).toString();
}

export function slugify(value: string): string {
  return value
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/**
 * Format price with currency symbol
 */
export function formatPrice(price: number, currency = 'INR'): string {
  if (currency === 'INR') {
    return `₹${price.toLocaleString('en-IN')}`;
  }
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency,
  }).format(price);
}

/**
 * Generate WhatsApp URL for product inquiry
 */
export function generateWhatsAppURL(product: ProductFrontmatter & { url: string }): string {
  const message = SITE_CONFIG.WHATSAPP_MESSAGE_TEMPLATE
    .replace('{{product.title}}', product.title)
    .replace('{{product.sku}}', product.sku)
    .replace('{{product_url}}', toAbsoluteUrl(product.url));
  
  const whatsappNumber = SITE_CONFIG.WHATSAPP_NUMBER_INTL.replace('+', '');
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

/**
 * Generate product badges based on frontmatter
 */
export function getProductBadges(product: ProductFrontmatter): string[] {
  const badges: string[] = [];
  
  if (product.new) badges.push('NEW');
  if (product.bestseller) badges.push('BESTSELLER');
  if (product.featured) badges.push('FEATURED');
  if (product.limited) badges.push('LIMITED');
  if (!product.in_stock) badges.push('OUT OF STOCK');
  
  return badges;
}

/**
 * Generate SEO metadata for pages
 */
export function generateSEO(data: Partial<SEOData> & { title: string }): SEOData {
  const title = data.title.includes(SITE_CONFIG.STORE_NAME) 
    ? data.title 
    : `${data.title} | ${SITE_CONFIG.STORE_NAME}`;
    
  return {
    ...data,
    title,
    description: data.description || SITE_CONFIG.DESCRIPTION,
    image: data.image || SITE_CONFIG.DEFAULT_OG_IMAGE,
    imageAlt: data.imageAlt || `${SITE_CONFIG.STORE_NAME} handcrafted products`,
    imageWidth: data.imageWidth || 1200,
    imageHeight: data.imageHeight || 630,
    url: data.url,
    type: data.type || 'website',
  };
}

/**
 * Generate JSON-LD Product schema
 */
export function generateProductSchema(product: ProductFrontmatter & { url: string }): ProductSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.title,
    image: product.images.map((img) => toAbsoluteUrl(img)),
    description: product.short,
    sku: product.sku,
    brand: {
      '@type': 'Brand',
      name: SITE_CONFIG.STORE_NAME,
    },
    offers: {
      '@type': 'Offer',
      url: toAbsoluteUrl(product.url),
      priceCurrency: product.currency || 'INR',
      price: product.price.toString(),
      availability: product.in_stock !== false 
        ? 'https://schema.org/InStock' 
        : 'https://schema.org/OutOfStock',
      seller: {
        '@type': 'Organization',
        name: SITE_CONFIG.STORE_NAME,
      },
    },
  };
}

/**
 * Generate JSON-LD LocalBusiness schema
 */
export function generateLocalBusinessSchema(): LocalBusinessSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: SITE_CONFIG.STORE_NAME,
    description: SITE_CONFIG.DESCRIPTION,
    url: SITE_CONFIG.SITE_URL,
    telephone: SITE_CONFIG.WHATSAPP_NUMBER_INTL,
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'IN',
      addressLocality: 'India', // Replace with actual city/state
    },
    sameAs: [
      `https://instagram.com/${SITE_CONFIG.INSTAGRAM.replace('@', '')}`,
    ],
  };
}

/**
 * Get unique categories from products
 */
export function getUniqueCategories(products: ProductFrontmatter[]): string[] {
  const categories = new Set<string>();
  products.forEach(product => {
    product.categories?.forEach(cat => categories.add(cat));
  });
  return Array.from(categories).sort();
}

/**
 * Get unique tags from products
 */
export function getUniqueTags(products: ProductFrontmatter[]): string[] {
  const tags = new Set<string>();
  products.forEach(product => {
    product.tags?.forEach(tag => tags.add(tag));
  });
  return Array.from(tags).sort();
}

/**
 * Filter products by category
 */
export function filterByCategory(products: ProductFrontmatter[], category: string): ProductFrontmatter[] {
  return products.filter(product => 
    product.categories?.includes(category)
  );
}

/**
 * Filter products by tag
 */
export function filterByTag(products: ProductFrontmatter[], tag: string): ProductFrontmatter[] {
  return products.filter(product => 
    product.tags?.includes(tag)
  );
}

/**
 * Sort products by price
 */
export function sortByPrice(products: ProductFrontmatter[], direction: 'asc' | 'desc' = 'asc'): ProductFrontmatter[] {
  return [...products].sort((a, b) => {
    return direction === 'asc' ? a.price - b.price : b.price - a.price;
  });
}

/**
 * Get featured products
 */
export function getFeaturedProducts(products: ProductFrontmatter[], limit?: number): ProductFrontmatter[] {
  const featured = products.filter(product => product.featured);
  return limit ? featured.slice(0, limit) : featured;
}

/**
 * Get related products (same category or shared tags)
 */
export function getRelatedProducts(
  products: ProductFrontmatter[],
  currentProduct: ProductFrontmatter,
  limit = 4
): ProductFrontmatter[] {
  const related = products.filter(product => {
    if (product.sku === currentProduct.sku) return false;
    
    // Check for shared categories
    const sharedCategories = product.categories?.some(cat => 
      currentProduct.categories?.includes(cat)
    );
    
    // Check for shared tags
    const sharedTags = product.tags?.some(tag => 
      currentProduct.tags?.includes(tag)
    );
    
    return sharedCategories || sharedTags;
  });
  
  return related.slice(0, limit);
}

/**
 * Debounce function for search input
 */
export function debounce<T extends (...args: unknown[]) => unknown>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: ReturnType<typeof setTimeout>;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}
