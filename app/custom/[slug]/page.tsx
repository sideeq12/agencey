import { notFound } from 'next/navigation';
import { CustomTemplate } from '@/templates/CustomTemplate';
import pages from '@/data/custom/pages.json';

export function generateStaticParams() {
    return pages.map((page) => ({
        slug: page.slug,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const page = pages.find((p) => p.slug === slug);

    if (!page) {
        return {
            title: "Page Not Found",
        };
    }

    return {
        title: page.title,
        description: page.description,
        alternates: {
            canonical: `/custom/${page.slug}`
        },
        openGraph: {
            title: page.title,
            description: page.description,
            url: `https://agencey.pro/custom/${page.slug}`,
            type: "website",
        },
        twitter: {
            card: "summary_large_image",
            title: page.title,
            description: page.description,
        },
    };
}

export default async function CustomPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const page = pages.find((p) => p.slug === slug);

    if (!page) {
        notFound();
    }

    return <CustomTemplate data={page} />;
}
