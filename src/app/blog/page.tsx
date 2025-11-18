import fs from "fs";
import path from "path";
import matter from "gray-matter";
import PageBanner from "@/components/PageBanner";
import BlogPosts from "./BlogPosts";

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
                description="Dijital dünyadaki en güncel trendler, ipuçları ve OsianaTech'ten faydalı içerikler burada."
            />

            {/* Blog Kartları */}
            <BlogPosts posts={posts as any} />
        </main>
    );
}
