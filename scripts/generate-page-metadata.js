// This script will help create metadata for static pages
const pages = [
    {
        file: 'wordpress',
        title: 'Expert WordPress Development Services',
        description: 'Custom WordPress websites built for speed, security, and scalability. Professional development and optimization services.',
    },
    {
        file: 'shopify',
        title: 'Professional Shopify Development Services',
        description: 'High-converting Shopify stores optimized for sales. Expert e-commerce development and custom theme design.',
    },
    {
        file: 'custom',
        title: 'Custom Web Development Services',
        description: 'Bespoke web applications and custom development solutions tailored to your unique business needs.',
    },
    {
        file: 'seo',
        title: 'Professional SEO Services',
        description: 'Data-driven SEO strategies that increase organic traffic and improve search rankings.',
    },
    {
        file: 'design',
        title: 'Professional Web Design Services',
        description: 'Modern, conversion-focused web design that elevates your brand and engages your audience.',
    },
    {
        file: 'services',
        title: 'Our Services',
        description: 'Comprehensive web design, development,  and digital marketing services for growing businesses.',
    },
    {
        file: 'contact',
        title: 'Contact Us - Free Strategy Session',
        description: 'Book a free 30-minute strategy session. Get expert guidance on growing your online presence.',
    },
    {
        file: 'social-media',
        title: 'Social Media Marketing Services',
        description: 'Strategic social media management and advertising to grow your audience and drive engagement.',
    },
];

// Template for creating metadata
const template = (page) => `import { Metadata } from "next";
import { ${page.file.charAt(0).toUpperCase() + page.file.slice(1)}PageClient } from "./${page.file.charAt(0).toUpperCase() + page.file.slice(1)}PageClient";

export const metadata: Metadata = {
    title: "${page.title}",
    description: "${page.description}",
    alternates: {
        canonical: "/${page.file}"
    },
    openGraph: {
        title: "${page.title} | Agencey",
        description: "${page.description}",
        url: "https://agencey.pro/${page.file}",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "${page.title} | Agencey",
        description: "${page.description}",
    },
};

export default function ${page.file.charAt(0).toUpperCase() + page.file.slice(1)}Page() {
    return <${page.file.charAt(0).toUpperCase() + page.file.slice(1)}PageClient />;
}
`;

pages.forEach(page => {
    console.log(`=== ${page.file}/page.tsx ===`);
    console.log(template(page));
    console.log('\n');
});
