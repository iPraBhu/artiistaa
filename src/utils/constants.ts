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
  TAGLINE: 'स्वदेशी • Handcrafted by Women • Made in India',
  DESCRIPTION: 'Celebrating the artistry of Indian women entrepreneurs. Every piece is lovingly handcrafted by skilled women artisans across India, supporting Atmanirbhar Bharat and empowering women-led businesses.',
  
  // Brand messaging
  BRAND_VALUES: {
    madeInIndia: 'हमारा देश, हमारी कला - Our Country, Our Art',
    womenOwned: 'Proudly Women-Owned & Supporting Women Artisans',
    atmanirbhar: 'आत्मनिर्भर भारत - Self-Reliant India',
    authentic: 'Authentic Indian Craftsmanship with Global Standards',
    sustainable: 'Eco-friendly • Sustainable • Traditional Techniques'
  },
  
  // Indian elements
  HINDI_WELCOME: 'नमस्ते',
  SANSKRIT_MOTTO: 'वसुधैव कुटुम्बकम्', // The world is one family
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

// Women empowerment messaging
export const WOMEN_EMPOWERMENT = {
  tagline: 'Empowering Women, One Craft at a Time',
  stats: {
    womenArtisans: '500+ Women Artisans',
    womenOwned: '90% Women-Owned Businesses',
    states: '15+ Indian States',
    families: '1000+ Families Supported'
  },
  values: [
    'Supporting women entrepreneurs across rural India',
    'Preserving traditional Indian art forms',
    'Creating sustainable livelihoods for women',
    'Promoting financial independence for artisan families'
  ]
};

// Atmanirbhar Bharat messaging
export const ATMANIRBHAR_MESSAGING = {
  title: 'आत्मनिर्भर भारत - Self-Reliant India',
  subtitle: 'Every Purchase Strengthens Indian Economy',
  benefits: [
    'Reducing dependency on imports',
    'Creating local employment opportunities',
    'Preserving ancient Indian crafts',
    'Building a stronger Indian economy'
  ]
};

// Indian cultural elements
export const CULTURAL_ELEMENTS = {
  patterns: {
    mandala: '🔮',
    lotus: '🪷', 
    paisley: '🌿',
    rangoli: '🌸'
  },
  colors: {
    saffron: '#FF9933',
    white: '#FFFFFF', 
    green: '#138808',
    navy: '#000080'
  },
  symbols: {
    om: 'ॐ',
    swastika: '卍',
    lotus: '🪷',
    diya: '🪔'
  }
};

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