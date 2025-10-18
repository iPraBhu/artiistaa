// Product-related types
export interface ProductFrontmatter {
  title: string;
  slug?: string;
  sku: string;
  price: number;
  currency?: string;
  categories: string[];
  tags: string[];
  images: string[];
  short: string;
  in_stock?: boolean;
  featured?: boolean;
  bestseller?: boolean;
  limited?: boolean;
  new?: boolean;
  specs?: {
    material?: string;
    size?: string;
    weight?: string;
    care?: string;
  };
  seo?: {
    title?: string;
    description?: string;
  };
}

export interface Product extends ProductFrontmatter {
  slug: string;
  body: string;
  url: string;
}

export interface SearchProduct {
  title: string;
  short: string;
  tags: string[];
  categories: string[];
  url: string;
  price: number;
  currency: string;
  badges: string[];
  image: string;
  in_stock: boolean;
}

// Navigation types
export interface NavItem {
  name: string;
  href: string;
  dropdown?: boolean;
}

export interface FooterLink {
  name: string;
  href: string;
}

// SEO types
export interface SEOData {
  title: string;
  description: string;
  image?: string;
  url?: string;
  type?: 'website' | 'product';
  article?: {
    author?: string;
    publishedTime?: string;
    modifiedTime?: string;
    tags?: string[];
  };
}

// JSON-LD Schema types
export interface ProductSchema {
  '@context': 'https://schema.org';
  '@type': 'Product';
  name: string;
  image: string[];
  description: string;
  sku: string;
  brand: {
    '@type': 'Brand';
    name: string;
  };
  offers: {
    '@type': 'Offer';
    url: string;
    priceCurrency: string;
    price: string;
    availability: string;
    seller: {
      '@type': 'Organization';
      name: string;
    };
  };
}

export interface LocalBusinessSchema {
  '@context': 'https://schema.org';
  '@type': 'LocalBusiness';
  name: string;
  description: string;
  url: string;
  telephone?: string;
  address?: {
    '@type': 'PostalAddress';
    addressCountry: string;
    addressLocality?: string;
  };
  sameAs?: string[];
}