import { readFileSync, writeFileSync } from 'fs';
import { glob } from 'glob';
import matter from 'gray-matter';
import path from 'path';

async function generateSearchIndex() {
  const products = [];
  
  try {
    // Find all product markdown files
    const productFiles = await glob('src/content/products/*.md');
    
    for (const file of productFiles) {
      try {
        const content = readFileSync(file, 'utf-8');
        const { data: frontmatter } = matter(content);
        
        // Extract slug from filename if not in frontmatter
        const slug = frontmatter.slug || path.basename(file, '.md');
        
        // Generate badges based on product properties
        const badges = [];
        if (frontmatter.featured) badges.push('FEATURED');
        if (frontmatter.bestseller) badges.push('BESTSELLER');
        if (frontmatter.limited) badges.push('LIMITED');
        if (frontmatter.new) badges.push('NEW');
        
        products.push({
          title: frontmatter.title,
          short: frontmatter.short,
          tags: frontmatter.tags || [],
          categories: frontmatter.categories || [],
          url: `/products/${slug}/`,
          price: frontmatter.price,
          currency: frontmatter.currency || 'INR',
          badges,
          image: frontmatter.images?.[0] || '/images/placeholder.jpg',
          in_stock: frontmatter.in_stock !== false,
        });
      } catch (error) {
        console.warn(`Error processing ${file}:`, error.message);
      }
    }
    
    // Write search index
    writeFileSync('public/search.json', JSON.stringify(products, null, 2));
    console.log(`Generated search index with ${products.length} products`);
    
  } catch (error) {
    console.error('Error generating search index:', error);
    process.exit(1);
  }
}

generateSearchIndex();