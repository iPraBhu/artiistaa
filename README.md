"# 🎨 Artiistaa - Handmade Art & Craft Store

A beautiful, mobile-first e-commerce storefront for handmade art and craft products from India. Built with Astro, TypeScript, Tailwind CSS, and optimized for GitHub Pages deployment.

![Artiistaa Screenshot](https://via.placeholder.com/800x400/d9563f/ffffff?text=Artiistaa+Store)

## ✨ Features

- 🎨 **Mobile-First Design** - Optimized for smartphones and tablets
- 🛍️ **WhatsApp Checkout** - Direct communication with customers via WhatsApp
- 🔍 **Client-Side Search** - Fast product search using Fuse.js
- 🏷️ **Advanced Filters** - Filter by category, tags, price, and availability
- 📱 **Responsive Design** - Beautiful on all screen sizes
- 🌙 **Dark Mode Support** - Automatic theme switching
- 📊 **SEO Optimized** - Meta tags, JSON-LD schema, sitemap
- 🎯 **Accessibility** - WCAG compliant with screen reader support
- 📝 **Content Management** - Decap CMS for easy product management
- 🚀 **Fast Loading** - Optimized images and minimal JavaScript
- 📋 **TypeScript** - Type-safe development
- 🎨 **Tailwind CSS** - Modern, utility-first styling

## 🛠️ Tech Stack

- **Framework**: [Astro](https://astro.build/) - Modern static site generator
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- **Language**: TypeScript - Type-safe JavaScript
- **Content**: Markdown with YAML frontmatter
- **Search**: [Fuse.js](https://fusejs.io/) - Lightweight fuzzy search
- **CMS**: [Decap CMS](https://decapcms.org/) - Git-based content management
- **Deployment**: GitHub Pages via GitHub Actions
- **Analytics**: Plausible (optional)

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm
- Git
- GitHub account (for deployment)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/iPraBhu/artiistaa.git
   cd artiistaa
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Visit [http://localhost:4321](http://localhost:4321)

## 🔧 Configuration

### Required: Replace Placeholders

Before deploying, you **must** replace these placeholders in `src/utils/constants.ts`:

```typescript
export const SITE_CONFIG = {
  // ===============================================================================
  // REPLACE THESE WITH YOUR ACTUAL VALUES
  // ===============================================================================
  STORE_NAME: 'Your Store Name',                    // Replace with your store name
  GITHUB_USERNAME: 'yourusername',                  // Your GitHub username
  GITHUB_REPO: 'your-repo-name',                   // Your repository name
  WHATSAPP_NUMBER_INTL: '+1234567890',             // Your WhatsApp number with country code
  CANONICAL_DOMAIN: 'yourdomain.com',              // Optional: your custom domain
  // ===============================================================================
};
```

### Update Repository Settings

1. **Update `astro.config.mjs`**:
   ```javascript
   export default defineConfig({
     site: 'https://yourdomain.com', // or https://yourusername.github.io for GitHub Pages
     // ... rest of config
   });
   ```

2. **Update CMS config in `admin/config.yml`**:
   ```yaml
   backend:
     name: github
     repo: yourusername/your-repo-name
     branch: main
   ```

## 📝 Content Management

### Adding Products

#### Option 1: Using Decap CMS (Recommended)

1. Deploy your site first (see deployment section)
2. Visit `https://yourusername.github.io/your-repo-name/admin/`
3. Authenticate with GitHub
4. Click "New Product" to add products with a user-friendly interface

#### Option 2: Manual Markdown Files

Create new `.md` files in `src/content/products/`:

```markdown
---
title: "Your Product Name"
sku: "PROD-001"
price: 999
categories: ["Category Name"]
tags: ["tag1", "tag2"]
images:
  - "/images/product1.jpg"
  - "/images/product2.jpg"
short: "Brief product description"
in_stock: true
featured: false
---

Detailed product description in Markdown...
```

### Product Content Structure

Each product requires:

- **title**: Product name
- **sku**: Unique product identifier
- **price**: Price in INR (or your currency)
- **categories**: Array of category names
- **tags**: Array of tags for filtering
- **images**: Array of image paths (first image is main)
- **short**: Brief description for cards and search
- **in_stock**: Availability status
- **featured**: Show on homepage
- **Long description**: Markdown content

## 🖼️ Images

### Adding Product Images

1. **Upload images** to `public/images/` or use Decap CMS
2. **Reference in frontmatter**:
   ```yaml
   images:
     - "/images/your-product-1.jpg"
     - "/images/your-product-2.jpg"
   ```

### Image Guidelines

- **Format**: JPG or PNG
- **Size**: 800x800px minimum (square aspect ratio preferred)
- **Quality**: High quality but optimized for web
- **Names**: Use descriptive, lowercase names with hyphens

## 🚀 Deployment

### GitHub Pages (Recommended)

1. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "Initial setup"
   git push origin main
   ```

2. **Enable GitHub Pages**:
   - Go to repository Settings > Pages
   - Select "GitHub Actions" as source
   - The workflow will automatically deploy your site

3. **Custom Domain** (Optional):
   - Add your domain to repository Settings > Pages
   - Update `CANONICAL_DOMAIN` in constants.ts

### Alternative Deployments

The site can also be deployed to:
- **Netlify**: Connect your GitHub repo
- **Vercel**: Import your GitHub repo  
- **Cloudflare Pages**: Connect GitHub integration

## 🔍 Search Setup

The search functionality uses Fuse.js and is automatically configured:

1. **Search index** is generated at build time
2. **Search data** is stored in `public/search.json`
3. **Search components** are included in the header and shop page

To customize search:
- Edit `scripts/generate-search-index.js`
- Modify search keys in `src/components/SearchBar.astro`

## 🎨 Customization

### Branding & Colors

Edit `tailwind.config.cjs`:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        // Your brand colors
        500: '#your-color',
        600: '#your-darker-color',
      },
    },
  },
},
```

### Typography

The site uses:
- **Headers**: Crimson Text (serif)
- **Body**: Inter (sans-serif)

To change fonts, update the Google Fonts import in `src/layouts/BaseLayout.astro`.

### Layout & Components

All components are in `src/components/`:
- `Header.astro` - Navigation and search
- `Footer.astro` - Footer with links and social media
- `ProductCard.astro` - Product display cards
- `ProductGallery.astro` - Product image gallery with zoom
- `WhatsAppButton.astro` - WhatsApp checkout button

## 📱 WhatsApp Integration

### Setup

1. **Update your WhatsApp number** in `src/utils/constants.ts`
2. **Message template** is automatically generated with:
   - Product name and SKU
   - Quantity (defaulted to 1)
   - Product page link

### Customizing Messages

Edit the template in `src/utils/constants.ts`:

```typescript
get WHATSAPP_MESSAGE_TEMPLATE() {
  return `Hi! I want to buy:
{{product.title}}
SKU: {{product.sku}}
Qty: 1
Link: {{product_url}}`;
}
```

## 🔧 Development

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint issues
npm run format       # Format code with Prettier
```

### File Structure

```
artiistaa/
├── src/
│   ├── components/       # Reusable Astro components
│   ├── content/
│   │   └── products/     # Product markdown files
│   ├── layouts/          # Page layouts
│   ├── pages/           # Route pages
│   ├── types/           # TypeScript type definitions
│   └── utils/           # Utility functions and constants
├── public/              # Static assets
│   ├── images/          # Product and site images
│   └── search.json      # Generated search index
├── admin/               # Decap CMS configuration
└── scripts/             # Build scripts
```

## 🎯 SEO & Performance

### Built-in SEO Features

- **Meta tags**: Automatic generation for all pages
- **Open Graph**: Social media sharing optimization
- **JSON-LD**: Structured data for search engines
- **Sitemap**: Automatically generated
- **Robots.txt**: Search engine crawling instructions

### Performance Optimizations

- **Image optimization**: Lazy loading and responsive images
- **Code splitting**: Minimal JavaScript bundles
- **CSS optimization**: Tailwind CSS purging
- **Static generation**: Pre-built HTML pages

## 🌐 Multi-language Support

To add multi-language support:

1. **Update Astro config** for i18n
2. **Create language-specific content** folders
3. **Add language switcher** to header
4. **Update constants** for each language

## 📊 Analytics (Optional)

### Plausible Analytics

Add your Plausible script to `src/layouts/BaseLayout.astro`:

```html
<script defer data-domain="yourdomain.com" src="https://plausible.io/js/script.js"></script>
```

### Google Analytics 4

Add GA4 tracking code to the same file:

```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
```

## 🐛 Troubleshooting

### Common Issues

1. **Build fails**: Check that all placeholder values are replaced
2. **Images not loading**: Ensure images are in `public/images/`
3. **WhatsApp not working**: Verify phone number format with country code
4. **Search not working**: Check that `search.json` is generated during build

### Getting Help

- **GitHub Issues**: Report bugs or request features
- **Discussions**: Ask questions or share ideas
- **Documentation**: Check Astro and Tailwind CSS docs

## 🤝 Contributing

Contributions are welcome! Please:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- **Astro Team** - For the amazing framework
- **Tailwind CSS** - For the utility-first CSS framework
- **Indian Artisans** - For inspiring this project with their beautiful crafts
- **Open Source Community** - For the tools and libraries that make this possible

---

## 📞 Support

If you need help setting up your store:

- 📧 **Email**: hello@artiistaa.com
- 💬 **WhatsApp**: +918830342238
- 🐛 **Issues**: [GitHub Issues](https://github.com/iPraBhu/artiistaa/issues)

---

**Made with ❤️ for the artisan community**" 
