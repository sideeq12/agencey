import { notFound } from 'next/navigation';
import { CustomTemplate } from '@/templates/CustomTemplate';
import pages from '@/data/custom/pages.json';

export function generateStaticParams() {
    return pages.map((page) => ({
        slug: page.slug,
    }));
}

export default async function CustomPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const page = pages.find((p) => p.slug === slug);

    if (!page) {
        notFound();
    }

    return <CustomTemplate data={page} />;
}
