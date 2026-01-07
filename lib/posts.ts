// import fs from 'fs';
// import path from 'path';
// import matter from 'gray-matter';
// import { remark } from 'remark';
// import remarkHtml from 'remark-html';

// export type Post = {
//   slug: string;
//   title: string;
//   date: string;
//   category: string;
//   excerpt?: string;
//   cover?: string;
// };

// export type PostWithContent = Post & {
//   content: string; // HTML
// };

// const postsDir = path.join(process.cwd(), 'posts');

// export function getAllPosts(): Post[] {
//   if (!fs.existsSync(postsDir)) return [];
//   const files = fs.readdirSync(postsDir).filter((f) => f.endsWith('.md'));
//   const posts: Post[] = files.map((fileName) => {
//     const slug = fileName.replace(/\.md$/, '');
//     const filePath = path.join(postsDir, fileName);
//     const fileContents = fs.readFileSync(filePath, 'utf8');
//     const { data } = matter(fileContents);
//     return {
//       slug,
//       title: data.title || slug,
//       date: data.date || '',
//       category: data.category || 'Uncategorized',
//       excerpt: data.excerpt || '',
//       cover: data.cover || ''
//     } as Post;
//   });
//   posts.sort((a, b) => (a.date < b.date ? 1 : -1));
//   return posts;
// }

// export async function getPostBySlug(slug: string): Promise<PostWithContent | null> {
//   const filePath = path.join(postsDir, `${slug}.md`);
//   if (!fs.existsSync(filePath)) return null;
//   const fileContents = fs.readFileSync(filePath, 'utf8');
//   const { data, content } = matter(fileContents);
//   const processed = await remark().use(remarkHtml).process(content);
//   const html = String(processed);
//   return {
//     slug,
//     title: data.title || slug,
//     date: data.date || '',
//     category: data.category || 'Uncategorized',
//     excerpt: data.excerpt || '',
//     cover: data.cover || '',
//     content: html
//   };
// }





// import fs from 'fs';
// import path from 'path';
// import matter from 'gray-matter';
// import { createHighlighter } from 'shiki';

// export type Post = {
//   slug: string;
//   title: string;
//   date: string;
//   category: string;
//   excerpt?: string;
//   cover?: string;
// };

// export type PostWithContent = Post & {
//   content: string; // HTML
// };

// const postsDir = path.join(process.cwd(), 'posts');

// /* ================================
//  * 모든 게시글 메타 정보
//  * ================================ */
// export function getAllPosts(): Post[] {
//   if (!fs.existsSync(postsDir)) return [];

//   const files = fs.readdirSync(postsDir).filter((f) => f.endsWith('.md'));

//   const posts = files.map((fileName) => {
//     const slug = fileName.replace(/\.md$/, '');
//     const fileContents = fs.readFileSync(
//       path.join(postsDir, fileName),
//       'utf8'
//     );
//     const { data } = matter(fileContents);

//     return {
//       slug,
//       title: data.title || slug,
//       date: data.date || '',
//       category: data.category || 'Uncategorized',
//       excerpt: data.excerpt || '',
//       cover: data.cover || '',
//     };
//   });

//   posts.sort((a, b) => (a.date < b.date ? 1 : -1));
//   return posts;
// }

// /* ================================
//  * 단일 게시글 (Shiki)
//  * ================================ */
// export async function getPostBySlug(
//   slug: string
// ): Promise<PostWithContent | null> {
//   const filePath = path.join(postsDir, `${slug}.md`);
//   if (!fs.existsSync(filePath)) {
//     return null;
//   }

//   const fileContents = fs.readFileSync(filePath, 'utf8');
//   const { data, content } = matter(fileContents);

//   const highlighter = await createHighlighter({
//     themes: ['github-dark'],
//     langs: ['swift', 'ts', 'js', 'bash', 'json'],
//   });

//     const html = content.replace(
//     /```(\w+)?\n([\s\S]*?)```/g,
//     (_match, lang, code) => {
//         const language = (lang || 'text').toLowerCase();

//         const highlighted = highlighter
//         .codeToHtml(code.trim(), {
//             lang: language,
//             theme: 'github-dark',
//         })
//         .replace(
//         /<pre[^>]*class="[^"]*shiki[^"]*"[^>]*>/,
//         (match) => `${match}<span class="code-lang">${language}</span>`
//         )
//         return highlighted;
//     }
// );




//   // ✅ TS가 "반드시 반환"을 확신할 수 있음
//   return {
//     slug,
//     title: data.title || slug,
//     date: data.date || '',
//     category: data.category || 'Uncategorized',
//     excerpt: data.excerpt || '',
//     cover: data.cover || '',
//     content: html,
//   };
// }

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';
import { createHighlighter } from 'shiki';

export type Post = {
  slug: string;
  title: string;
  date: string;
  category: string;
  excerpt?: string;
  cover?: string;
};

export type PostWithContent = Post & {
  content: string;
};

const postsDir = path.join(process.cwd(), 'posts');

export function getAllPosts(): Post[] {
  if (!fs.existsSync(postsDir)) return [];

  return fs
    .readdirSync(postsDir)
    .filter((f) => f.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '');
      const fileContents = fs.readFileSync(
        path.join(postsDir, fileName),
        'utf8'
      );
      const { data } = matter(fileContents);

      return {
        slug,
        title: data.title || slug,
        date: data.date || '',
        category: data.category || 'Uncategorized',
        excerpt: data.excerpt || '',
        cover: data.cover || '',
      };
    });
}

export async function getPostBySlug(
  slug: string
): Promise<PostWithContent | null> {
  const filePath = path.join(postsDir, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;

  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);

  const highlighter = await createHighlighter({
    themes: ['github-dark'],
    langs: ['swift', 'ts', 'js', 'bash', 'json', 'java'],
  });

  const processor = unified()
    .use(remarkParse)
    .use(remarkRehype, {
      allowDangerousHtml: true,
    })
    .use(() => {
      return (tree) => {
        const visit = (node: any) => {
          if (node.tagName === 'pre' && node.children?.[0]?.tagName === 'code') {
            const className = node.children[0].properties?.className || [];
            const lang =
              className
                .find((c: string) => c.startsWith('language-'))
                ?.replace('language-', '') || 'text';

            const code = node.children[0].children
              .map((c: any) => c.value)
              .join('');

            node.type = 'raw';
            node.value = highlighter
              .codeToHtml(code, {
                lang,
                theme: 'github-dark',
              })
              .replace(
                /<pre[^>]*>/,
                (match) =>
                  `${match}<span class="code-lang">${lang}</span>`
              );
          }

          if (node.children) {
            node.children.forEach(visit);
          }
        };

        visit(tree);
      };
    })
    .use(rehypeStringify, {
      allowDangerousHtml: true,
    });

  const result = await processor.process(content);

  return {
    slug,
    title: data.title || slug,
    date: data.date || '',
    category: data.category || 'Uncategorized',
    excerpt: data.excerpt || '',
    cover: data.cover || '',
    content: String(result),
  };
}
