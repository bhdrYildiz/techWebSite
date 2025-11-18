import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import BlogSidebar from "./BlogSidebar";

interface BlogDetailContentProps {
    content: string;
    data: any;
    slug: string;
    url: string;
}

export default function BlogDetailContent({ content, data, slug, url }: BlogDetailContentProps) {

    // Calculate reading time (approximate: 200 words per minute)
    const wordCount = content.split(/\s+/).length;
    const readingTime = Math.ceil(wordCount / 200);

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

    const postDate = data.date ? new Date(data.date) : getPostDate(slug);

    // Generate a deterministic view count based on slug
    const getViewCount = (slug: string) => {
        let hash = 0;
        for (let i = 0; i < slug.length; i++) {
            hash = ((hash << 5) - hash) + slug.charCodeAt(i);
            hash = hash & hash;
        }
        return Math.abs(hash) % 5000 + 100;
    };

    const viewCount = getViewCount(slug);

    return (
        <main className="relative bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 min-h-screen">
            {/* Background decorative elements */}
            <div className="fixed inset-0 opacity-5 pointer-events-none overflow-hidden">
                <div className="absolute top-20 left-10 text-white font-mono text-xs whitespace-pre">
                    {`const blog = {
  title: "${data.title?.substring(0, 30)}...",
  content: "...",
  date: "${postDate.toLocaleDateString('tr-TR')}"
}`}
                </div>
                <div className="absolute bottom-40 right-20 text-white font-mono text-xs whitespace-pre">
                    {`function readArticle() {
  return {
    time: ${readingTime}min,
    views: ${viewCount}
  }
}`}
                </div>
            </div>

            <div className="container mx-auto px-4 py-12 relative z-10">
                <div className="max-w-5xl mx-auto">
                    {/* Breadcrumb */}
                    <nav className="mb-8 text-sm text-gray-400">
                        <Link href="/" className="hover:text-blue-400 transition-colors">Anasayfa</Link>
                        <span className="mx-2">/</span>
                        <Link href="/blog" className="hover:text-blue-400 transition-colors">Blog & Haber</Link>
                        <span className="mx-2">/</span>
                        <span className="text-gray-300 line-clamp-1">{data.title}</span>
                    </nav>

                    <div className="flex gap-6">
                        {/* Left Sidebar - Social Share & Utilities */}
                        <BlogSidebar title={data.title || ''} url={url} />

                        {/* Main Content */}
                        <article className="flex-1">
                            {/* Title */}
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-center text-white leading-tight">
                                {data.title}
                            </h1>

                            {/* Metadata */}
                            <div className="flex flex-wrap justify-center gap-3 mb-12">
                                <span className="px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700/50 text-gray-300 text-sm">
                                    {postDate.toLocaleDateString('tr-TR', { day: 'numeric', month: 'long', year: 'numeric' })}
                                </span>
                                <span className="px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700/50 text-gray-300 text-sm">
                                    {readingTime} dk. Okuma
                                </span>
                                <span className="px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700/50 text-gray-300 text-sm">
                                    {viewCount} Görüntülenme
                                </span>
                            </div>

                            {/* Article Content */}
                            <div className="prose prose-lg prose-invert max-w-none">
                                <div className="text-gray-300 leading-relaxed [&>h1]:text-white [&>h1]:text-3xl [&>h1]:font-bold [&>h1]:mt-8 [&>h1]:mb-4 [&>h2]:text-white [&>h2]:text-2xl [&>h2]:font-bold [&>h2]:mt-6 [&>h2]:mb-3 [&>h3]:text-white [&>h3]:text-xl [&>h3]:font-semibold [&>h3]:mt-4 [&>h3]:mb-2 [&>p]:text-gray-300 [&>p]:mb-4 [&>p]:leading-relaxed [&>strong]:text-white [&>strong]:font-semibold [&>ul]:text-gray-300 [&>ul]:list-disc [&>ul]:ml-6 [&>ul]:mb-4 [&>li]:mb-2 [&>code]:bg-slate-800/50 [&>code]:px-2 [&>code]:py-1 [&>code]:rounded [&>code]:text-blue-300">
                                    <MDXRemote source={content} />
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </main>
    );
}

