import Head from 'next/head';
import Link from 'next/link';
import React, { useMemo, useState } from 'react';
import { Layout } from '../../components/Layout';
import { getAllPosts, Post } from '../../lib/posts';

export const getStaticProps = async () => {
  const posts = getAllPosts();
  return { props: { posts } };
};

const BlogPage: React.FC<{ posts: Post[] }> = ({ posts }) => {
  const [filter, setFilter] = useState('All');
  const categories = useMemo(() => ['All', ...Array.from(new Set(posts.map((p) => p.category)))], [posts]);
  const filtered = filter === 'All' ? posts : posts.filter((p) => p.category === filter);

  return (
    <Layout>
      <Head>
        <title>블로그 - Poppang</title>
      </Head>

      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold mb-6">팝팡 테크 블로그</h2>
        <div className="mb-6 flex gap-3 flex-wrap">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`px-3 py-1 rounded-full border ${filter === c ? 'bg-black text-white' : ''}`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="block bg-white rounded-xl shadow overflow-hidden">
              {post.cover ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={post.cover} alt={post.title} className="rounded-t-xl mb-0 h-40 w-full object-cover" />
              ) : (
                <div className="rounded-t-xl mb-0 h-40 w-full bg-gray-100 flex items-center justify-center">No Image</div>
              )}
              <div className="p-4">
                <div className="text-xs text-gray-400 mb-2">{post.category} · {post.date}</div>
                <h3 className="font-semibold">{post.title}</h3>
                <p className="text-sm text-gray-500 mt-2">{post.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default BlogPage;
