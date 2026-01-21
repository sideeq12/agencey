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

export async function generateMetadata({ params }: PageProps) {
    const resolvedParams = await params;
    const page = pages.find((p) => p.slug === resolvedParams.slug);

    if (!page) {
        return {
            title: "Page Not Found",
        };
    }

    return {
        title: page.title,
        description: page.description,
        alternates: {
            canonical: `/wordpress/${page.slug}`
        },
        openGraph: {
            title: page.title,
            description: page.description,
            url: `https://agencey.pro/wordpress/${page.slug}`,
            type: "website",
        },
        twitter: {
            card: "summary_large_image",
            title: page.title,
            description: page.description,
        },
    };
}

export default async function WordPressPSeoPage({ params }: PageProps) {
    const resolvedParams = await params;
    const page = pages.find((p) => p.slug === resolvedParams.slug);

    if (!page) {
        notFound();
    }

    return <WordPressTemplate data={page} />;
}
