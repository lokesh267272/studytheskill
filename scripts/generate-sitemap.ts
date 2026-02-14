/**
 * Sitemap Generation Script (Split by Category)
 * 
 * Run: npx tsx scripts/generate-sitemap.ts
 * Generates: sitemap.xml (index), sitemap-main.xml, sitemap-dbms.xml, sitemap-dsa.xml
 * IMPORTANT: Update SITE_URL to your actual production domain!
 */

import { writeFileSync, mkdirSync, existsSync } from 'fs';
import { resolve } from 'path';

const SITE_URL = 'https://studytheskill.com';

const slugify = (text: string) =>
    text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');

// ── DBMS Slugs (from conceptMeta.ts) ──
const dbmsSlugs = [
    'what-is-dbms', 'data-abstraction-independence', 'schema-vs-instance',
    'primary-foreign-keys', 'super-key-candidate-key',
    'er-symbols-attributes', 'advanced-attributes', 'relationships-weak-entities',
    '1nf-atomicity', '2nf-partial-dependency', '3nf-transitive-dependency',
    'bcnf-strong-3nf', '4nf-multi-valued-dependency', '5nf-project-join',
    'acid-properties', 'transaction-states',
    'sql-select-where', 'group-by-having', 'joins-types',
    'indexing-clustered-non-clustered', 'db-languages-ddl-dml', 'triggers-cursors',
];

// ── DSA Modules (mirrors dsaMeta.ts) ──
const dsaModules: { module: string; shortTitles: string[] }[] = [
    {
        module: 'Module 1: Time & Space Complexity', shortTitles: [
            '1. Why?', '2. Time Complexity', '3. Space Complexity', '4. Input Size (n)',
            '5. Best/Avg/Worst', '6. Notations', '7. Big-O', '8. Big-Ω',
            '9. Big-Θ', '10. The Ladder', '11. O(log n)', '12. Nested Loops',
            '13. Recursion Space', '14. Pitfalls', '15. Recap',
        ]
    },
    {
        module: 'Module 2: Arrays', shortTitles: [
            '1. Definition', '2. Indexing', '3. Memory', '4. Types', '5. Operations',
            '6. Time Complexity', '7. Space Complexity', '8. Static vs Dynamic',
            '9-10. Pros & Cons', '11. vs Linked List', '12. Pitfalls', '13. Shortcuts',
        ]
    },
    {
        module: 'Module 3: Strings', shortTitles: [
            '1. Definition', '2. Memory', '3. vs Char Array', '4. Length',
            '5. Operations', '6. Time Complexity', '7. Space Complexity',
            '8. Mutability', '9. Input/Output', '10. Problems',
            '11. vs Arrays', '12. Pitfalls', '13. Shortcuts',
        ]
    },
    {
        module: 'Module 4: Linked Lists', shortTitles: [
            '1. Intro', '2. The Node', '3. Memory View', '4. Types', '5. Operations',
            '6. Time Complexity', '7. Space Complexity', '8. VS Array',
            '9-10. Pros/Cons', '11. Pitfalls', '12. Shortcuts',
        ]
    },
    {
        module: 'Module 5: Stacks', shortTitles: [
            '1. Definition', '2. Terms', '3. Operations Lab', '4. Error States',
            '5. Implementation', '6. Time Complexity', '8. Applications',
            '10. Pitfalls', '11. Shortcuts',
        ]
    },
    {
        module: 'Module 6: Queues', shortTitles: [
            '1. Definition', '2. Terms', '3. Operations Lab', '4. Error States',
            '5. Implementation', '6. Time Complexity', '7. Space Complexity',
            '8. Types', '9. Circular Queue', '10. Applications',
            '11. Comparison', '12. Pitfalls', '13. Shortcuts',
        ]
    },
    {
        module: 'Module 7: Trees', shortTitles: [
            '1. Definition', '2. Terms', '3. Binary Tree', '5. Traversals',
            '6. BST', '7. BST Search', '8. Time Complexity', '9. Space Complexity',
            '10. Comparison', '11. Pitfalls', '12. Shortcuts',
        ]
    },
    {
        module: 'Module 8: Hashing', shortTitles: [
            '1. Definition', '2. Hash Table', '3. Hash Function', '4. Collision',
            '5. Resolution', '6. Load Factor', '7. Time Complexity', '8. Space Complexity',
            '10. Applications', '11. Pitfalls', '12. Shortcuts',
        ]
    },
    {
        module: 'Module 9: Searching', shortTitles: [
            '1. Definition', '2. Linear Search', '3. Linear Complexity', '4. Binary Search',
            '5. BS Visualizer', '6. BS Complexity', '7. Space Complexity',
            '8. Comparison', '9. Structures', '10. Pitfalls', '11. Shortcuts',
        ]
    },
];

// ── Build helpers ──
function wrapUrlset(entries: string[]): string {
    return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries.join('\n')}\n</urlset>\n`;
}

function urlTag(path: string): string {
    const trailingPath = path.endsWith('/') ? path : `${path}/`;
    return `  <url><loc>${SITE_URL}${trailingPath}</loc></url>`;
}

// ── Generate all files ──
const outDir = resolve(__dirname, '..', 'public');
if (!existsSync(outDir)) mkdirSync(outDir, { recursive: true });

// 1. sitemap-main.xml
const mainEntries = ['/', '/dbms/', '/dsa/'].map(urlTag);
writeFileSync(resolve(outDir, 'sitemap-main.xml'), wrapUrlset(mainEntries), 'utf-8');

// 2. sitemap-dbms.xml
const dbmsEntries = dbmsSlugs.map(s => urlTag(`/dbms/${s}`));
writeFileSync(resolve(outDir, 'sitemap-dbms.xml'), wrapUrlset(dbmsEntries), 'utf-8');

// 3. sitemap-dsa.xml
const dsaEntries: string[] = [];
for (const mod of dsaModules) {
    for (const st of mod.shortTitles) {
        dsaEntries.push(urlTag(`/dsa/${slugify(mod.module + '-' + st)}`));
    }
}
writeFileSync(resolve(outDir, 'sitemap-dsa.xml'), wrapUrlset(dsaEntries), 'utf-8');

// 4. sitemap.xml (index)
const index = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap><loc>${SITE_URL}/sitemap-main.xml</loc></sitemap>
  <sitemap><loc>${SITE_URL}/sitemap-dbms.xml</loc></sitemap>
  <sitemap><loc>${SITE_URL}/sitemap-dsa.xml</loc></sitemap>
</sitemapindex>\n`;
writeFileSync(resolve(outDir, 'sitemap.xml'), index, 'utf-8');

const total = mainEntries.length + dbmsEntries.length + dsaEntries.length;
console.log(`✅ Sitemaps generated in ${outDir}`);
console.log(`   sitemap-main.xml  →  ${mainEntries.length} URLs`);
console.log(`   sitemap-dbms.xml  →  ${dbmsEntries.length} URLs`);
console.log(`   sitemap-dsa.xml   →  ${dsaEntries.length} URLs`);
console.log(`   Total: ${total} URLs`);
