import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import Image from "next/image";
import PageBanner from "@/components/PageBanner";

const postsDir = path.join(process.cwd(), "src/app/blog");

export default function BlogPage() {
    const files = fs.readdirSync(postsDir).filter((f) => f.endsWith(".mdx"));

    const posts = files.map((filename) => {
        const fileContent = fs.readFileSync(path.join(postsDir, filename), "utf-8");
        const { data } = matter(fileContent);

        return {
            slug: filename.replace(".mdx", ""),
            ...data,
        };
    });

    return (
        <main>
            {/* Banner */}
            <PageBanner
                title="BLOG"
                description="Dijital dünyadaki en güncel trendler, ipuçları ve OsianaTech’ten faydalı içerikler burada."
            />

            {/* Blog Kartları */}
            <section className="py-24 container mx-auto px-4 relative">
                <div className="grid gap-12 md:grid-cols-3 relative z-10">
                    {posts.map((post: any, i: number) => (
                        <div
                            key={post.slug}
                            className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col"
                        >
                            <Image
                                src={post.image}
                                alt={post.title}
                                width={600}
                                height={400}
                                className="w-full h-48 p-4 object-contain bg-gray-50"
                            />
                            <div className="p-6 flex flex-col flex-1">
                                <h3 className="text-2xl font-semibold">{post.title}</h3>
                                <p className="text-gray-600 mt-4 flex-1">{post.excerpt}</p>
                                <Link
                                    href={`/blog/${post.slug}`}
                                    className="mt-6 inline-flex items-center text-indigo-600 font-medium hover:underline"
                                >
                                    Daha Fazla Oku →
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}
