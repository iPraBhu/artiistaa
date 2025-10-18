// Site Configuration Constants
// Replace these placeholders with your actual values

export const SITE_CONFIG = {
  // ===============================================================================
  // MAIN CONFIGURATION - UPDATE THIS FOR DEPLOYMENT
  // ===============================================================================
  STORE_NAME: 'Artiistaa',
  WHATSAPP_NUMBER_INTL: '+919356944708',
  CANONICAL_DOMAIN: 'store.pratik-bhuite.com/', // Change this to your domain (e.g., 'yourdomain.com')
  USE_HTTPS: true, // Set to true for production domains
  // ===============================================================================
  
  // Site metadata
  TAGLINE: 'Handcrafted with Love, Made in India',
  DESCRIPTION: 'Discover beautiful handmade art and craft items, lovingly created by skilled artisans across India. Each piece tells a unique story.',
  PRIMARY_LOCALE: 'en-IN',
  PRIMARY_CURRENCY: 'INR',
  
  // Contact information
  EMAIL: 'hello@artiistaa.com',
  INSTAGRAM: '@artiistaa',
  
  // Site URLs
  get SITE_URL() {
    const protocol = this.USE_HTTPS ? 'https' : 'http';
    return this.CANONICAL_DOMAIN 
      ? `${protocol}://${this.CANONICAL_DOMAIN}` 
      : 'http://localhost:4321';
  },
  
  // WhatsApp message template
  get WHATSAPP_MESSAGE_TEMPLATE() {
    return `Hi! I want to buy:
{{product.title}}
SKU: {{product.sku}}
Qty: 1
Link: {{product_url}}`;
  }
};

// Default categories for products
export const PRODUCT_CATEGORIES = [
  'Festive Decor',
  'Home Decor',
  'Pottery & Ceramics',
  'Textiles & Fabrics',
  'Jewelry & Accessories',
  'Art & Paintings',
];

// Default tags for products
export const PRODUCT_TAGS = [
  'handmade',
  'eco-friendly',
  'traditional',
  'modern',
  'festive',
  'decorative',
  'functional',
  'gift',
  'sustainable',
  'artisanal',
];

// Navigation menu items
export const NAV_ITEMS = [
  { name: 'Home', href: '/' },
  { name: 'Shop', href: '/shop' },
  { name: 'Categories', href: '#', dropdown: true },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

// Footer links
export const FOOTER_LINKS = {
  shop: [
    { name: 'All Products', href: '/shop' },
    { name: 'Featured', href: '/shop?filter=featured' },
    { name: 'New Arrivals', href: '/shop?filter=new' },
    { name: 'Best Sellers', href: '/shop?filter=bestseller' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
  ],
  social: [
    { name: 'Instagram', href: `https://instagram.com/${SITE_CONFIG.INSTAGRAM.replace('@', '')}` },
    { name: 'WhatsApp', href: `https://wa.me/${SITE_CONFIG.WHATSAPP_NUMBER_INTL.replace('+', '')}` },
  ],
};

// Export the site URL for astro.config.mjs
export const getSiteUrl = () => SITE_CONFIG.SITE_URL;