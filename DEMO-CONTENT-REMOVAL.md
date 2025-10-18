# 🚨 DEMO CONTENT REMOVAL GUIDE

This file contains instructions for easily removing all demonstration content from your Artiistaa storefront.

## Demo Products to Remove

The following product files contain **DEMO CONTENT** and should be deleted when you're ready to add your real products:

### Files to Delete:
```
src/content/products/demo-brass-elephant-figurine.md
src/content/products/demo-indigo-table-runner.md
src/content/products/demo-diwali-oil-lamps.md
src/content/products/demo-madhubani-painting.md
src/content/products/demo-silver-jhumka-earrings.md
src/content/products/demo-bamboo-wind-chime.md
```

### Original Sample Products (can also be removed):
```
src/content/products/hand-painted-clay-diya.md
src/content/products/handwoven-cotton-table-runner.md
src/content/products/brass-decorative-bowl-set.md
```

## How to Remove Demo Content

### Option 1: Manual Deletion
Simply delete the files listed above from your `src/content/products/` folder.

### Option 2: Command Line (Windows PowerShell)
```powershell
# Navigate to your project directory
cd "c:\Tools\git-projects\Artiistaa"

# Remove demo files
Remove-Item "src\content\products\demo-*.md"

# Optionally remove original samples too
Remove-Item "src\content\products\hand-painted-clay-diya.md"
Remove-Item "src\content\products\handwoven-cotton-table-runner.md"
Remove-Item "src\content\products\brass-decorative-bowl-set.md"
```

### Option 3: Command Line (Unix/Linux/macOS)
```bash
# Navigate to your project directory
cd /path/to/your/artiistaa

# Remove demo files
rm src/content/products/demo-*.md

# Optionally remove original samples too
rm src/content/products/hand-painted-clay-diya.md
rm src/content/products/handwoven-cotton-table-runner.md
rm src/content/products/brass-decorative-bowl-set.md
```

## After Removing Demo Content

1. **Rebuild the site** to update the search index:
   ```bash
   npm run build
   ```

2. **Add your real products** using:
   - Decap CMS at `/admin/` (recommended)
   - Manual markdown files in `src/content/products/`

3. **Update placeholder content** in:
   - `src/utils/constants.ts` - Replace store name, contact info, etc.
   - `src/pages/about.mdx` - Add your real brand story
   - `src/pages/contact.mdx` - Update contact information

## Demo Product Identifiers

All demo products are clearly marked with:
- ✅ Filename starts with `demo-`
- ✅ Title starts with `"DEMO -"`
- ✅ SKU starts with `"DEMO-"`
- ✅ `"demo"` tag in the frontmatter
- ✅ Warning text: **🚨 DEMO CONTENT - This is a demonstration product that can be easily removed later 🚨**

## What Demo Content Includes

The demo products showcase:
- **Brass Elephant Figurine** - Traditional metalwork from Moradabad
- **Indigo Table Runner** - Block-printed textiles from Rajasthan  
- **Terracotta Oil Lamps** - Festive pottery from Uttar Pradesh
- **Madhubani Painting** - Folk art from Bihar
- **Silver Jhumka Earrings** - Traditional jewelry from Jaipur
- **Bamboo Wind Chime** - Eco-friendly craft from Kerala

Each includes realistic:
- Product descriptions and specifications
- Artisan stories and cultural context
- High-quality Unsplash placeholder images
- Proper categorization and tagging
- SEO-optimized content

---

**Remember**: After removing demo content, delete this file too!

---

## Configuration Updates Made

The site is now configured to work from the root domain (`https://store.pratik-bhuite.com`) instead of a subdirectory. This means:

- ✅ No `/artiistaa` base path in URLs
- ✅ Search functionality works from root domain  
- ✅ All assets and links use absolute paths
- ✅ Ready for custom domain deployment

---

*Generated on: October 18, 2025*
*Artiistaa Storefront v1.0.0*