import pages from "@/data/wordpress/pages.json";
import { WordPressTemplate } from "@/templates/WordPressTemplate";
import { notFound } from "next/navigation";

interface PageProps {
    params: Promise<{
        slug: string;
    }>;
}

export async function generateStaticParams() {
    return pages.map((p) => ({
        slug: p.slug,
    }));
}

export default async function WordPressPSeoPage({ params }: PageProps) {
    const resolvedParams = await params;
    const page = pages.find((p) => p.slug === resolvedParams.slug);

    if (!page) {
        notFound();
    }

    return <WordPressTemplate data={page} />;
}
