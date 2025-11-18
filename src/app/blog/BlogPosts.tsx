"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

interface BlogPost {
    slug: string;
    title?: string;
    excerpt?: string;
    image?: string;
    [key: string]: any;
}

interface BlogPostsProps {
    posts: BlogPost[];
}

export default function BlogPosts({ posts }: BlogPostsProps) {
    // Generate a deterministic date based on slug
    const getPostDate = (slug: string) => {
        // Create a hash from slug to get a consistent date
        let hash = 0;
        for (let i = 0; i < slug.length; i++) {
            hash = ((hash << 5) - hash) + slug.charCodeAt(i);
            hash = hash & hash; // Convert to 32bit integer
        }
        // Generate a date between 30 days ago and today
        const daysAgo = Math.abs(hash) % 30;
        const date = new Date();
        date.setDate(date.getDate() - daysAgo);
        return date;
    };

    return (
        <section className="relative py-24 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 min-h-screen overflow-hidden">
            {/* Background decorative elements */}
            <div className="fixed inset-0 opacity-5 pointer-events-none overflow-hidden">
                <div className="absolute top-20 left-10 text-white font-mono text-xs whitespace-pre">
                    {`const blogPosts = [
  { title: "SEO Stratejileri", views: 4860 },
  { title: "Web Tasarım", views: 3200 },
  { title: "Dijital Pazarlama", views: 2100 }
]`}
                </div>
                <div className="absolute top-1/3 right-20 text-white font-mono text-xs whitespace-pre">
                    {`function getPosts() {
  return posts.filter(post => 
    post.published === true
  )
}`}
                </div>
                <div className="absolute bottom-40 left-1/4 text-white font-mono text-xs whitespace-pre">
                    {`const categories = [
  "Web Development",
  "SEO",
  "Marketing",
  "Design"
]`}
                </div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {posts.map((post, i) => (
                        <motion.div
                            key={post.slug}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{
                                y: -12,
                                scale: 1.02,
                                transition: { duration: 0.3 }
                            }}
                            className="group relative bg-slate-800/50 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 border border-slate-700/50 hover:border-blue-400/50 overflow-hidden flex flex-col"
                        >
                            {/* Hover gradient background */}
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-blue-500/0 to-blue-500/0 group-hover:from-blue-500/10 group-hover:via-blue-500/5 group-hover:to-transparent transition-all duration-300 pointer-events-none" />

                            {post.image && (
                                <motion.div
                                    className="relative bg-slate-700/30 p-4"
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <Image
                                        src={post.image}
                                        alt={post.title || "Blog post"}
                                        width={200}
                                        height={100}
                                        className="w-full h-48 object-contain brightness-110 transition-transform duration-300 group-hover:scale-110"
                                    />
                                </motion.div>
                            )}
                            <div className="p-6 flex flex-col flex-1 relative z-10">
                                <h3 className="text-2xl font-semibold text-white mb-3 group-hover:text-blue-300 transition-colors duration-300">{post.title || "Başlıksız"}</h3>

                                {/* Metadata */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    <span className="px-3 py-1 rounded-full bg-slate-700/50 border border-slate-600/50 text-gray-400 text-xs">
                                        {getPostDate(post.slug).toLocaleDateString('tr-TR', { day: 'numeric', month: 'short' })}
                                    </span>
                                    <span className="px-3 py-1 rounded-full bg-slate-700/50 border border-slate-600/50 text-gray-400 text-xs">
                                        {Math.ceil((post.excerpt?.split(/\s+/).length || 0) / 200)} dk
                                    </span>
                                </div>

                                <p className="text-gray-300 mb-4 flex-1 leading-relaxed group-hover:text-gray-200 transition-colors duration-300 line-clamp-3">{post.excerpt || ""}</p>
                                <Link
                                    href={`/blog/${post.slug}`}
                                    className="mt-auto inline-flex items-center text-blue-400 font-medium hover:text-blue-300 transition-colors duration-300 group/link"
                                >
                                    Daha Fazla Oku
                                    <span className="ml-2 group-hover/link:translate-x-1 transition-transform duration-300">→</span>
                                </Link>
                            </div>

                            {/* Shine effect on hover */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

