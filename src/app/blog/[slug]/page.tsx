import fs from "fs";
import path from "path";
import matter from "gray-matter";
import BlogDetailContent from "./BlogDetailContent";

export default function BlogDetailPage({ params }: { params: { slug: string } }) {
    const postsDir = path.join(process.cwd(), "src/app/blog");
    const filePath = path.join(postsDir, `${params.slug}.mdx`);

    const source = fs.readFileSync(filePath, "utf-8");
    const { content, data } = matter(source);

    // Construct URL for sharing (client-side will use actual URL)
    const url = `/blog/${params.slug}`;

    return <BlogDetailContent content={content} data={data} slug={params.slug} url={url} />;
}
