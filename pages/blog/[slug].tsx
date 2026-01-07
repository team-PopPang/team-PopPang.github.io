import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import { Layout } from '../../components/Layout';
import { getAllPosts, getPostBySlug, PostWithContent } from '../../lib/posts';

export async function getStaticPaths() {
  const posts = getAllPosts();
  const paths = posts.map((p) => ({ params: { slug: p.slug } }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug);
  return { props: { post } };
}

const PostPage: React.FC<{ post: PostWithContent | null }> = ({ post }) => {
  if (!post) return null;
  return (
    <Layout>
      <Head>
        <title>{post.title} - MY4CUT</title>
      </Head>

      <section className="max-w-3xl mx-auto px-6 py-12">
        <nav className="text-sm text-gray-500 mb-4">
          <Link href="/">홈</Link> / <Link href="/blog">블로그</Link> / <span className="text-gray-700">{post.title}</span>
        </nav>

        <article className="bg-white rounded-2xl p-8 shadow">
          <div className="text-xs text-gray-400 mb-2">{post.category} · {post.date}</div>
          <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
          {/* <p className="text-gray-600 mb-6">{post.excerpt}</p>
          {post.cover && (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={post.cover} alt={post.title} className="rounded-xl w-full object-cover mb-6" />
          )} */}

          <div className="blog-content prose max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />
        </article>
      </section>
    </Layout>
  );
};

export default PostPage;
