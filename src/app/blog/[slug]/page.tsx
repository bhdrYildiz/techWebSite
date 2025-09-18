import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import Image from "next/image";

export default function BlogDetailPage({ params }: { params: { slug: string } }) {
    const postsDir = path.join(process.cwd(), "src/app/blog");
    const filePath = path.join(postsDir, `${params.slug}.mdx`);

    const source = fs.readFileSync(filePath, "utf-8");
    const { content, data } = matter(source);

    return (
        <main className="bg-gradient-to-b from-white to-[#F0F4FF] min-h-screen">
            <section className="py-24 container mx-auto px-4 max-w-3xl">
                <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text">
                    {data.title}
                </h1>

                <div className="relative w-full h-72 mb-12">
                    <Image
                        src={data.image}
                        alt={data.title}
                        fill
                        className="object-contain rounded-2xl bg-gray-50"
                    />
                </div>

                <article className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                    <MDXRemote source={content} />
                </article>
            </section>
        </main>
    );
}
