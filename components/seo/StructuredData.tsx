import React from 'react';

interface LocalBusinessSchemaProps {
    service: { name: string; title: string };
    industry: { name: string; singular: string };
    city: { name: string };
    url: string;
}

export const LocalBusinessSchema: React.FC<LocalBusinessSchemaProps> = ({ service, industry, city, url }) => {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        name: `Agencey - ${service.name} for ${industry.name} in ${city.name}`,
        description: `Professional ${service.name.toLowerCase()} services for ${industry.singular.toLowerCase()} businesses in ${city.name}. We help local ${industry.name.toLowerCase()} get more customers and grow their revenue.`,
        url: url,
        areaServed: {
            '@type': 'City',
            name: city.name
        },
        serviceType: service.name,
        priceRange: '$$',
        provider: {
            '@type': 'Organization',
            name: 'Agencey',
            url: 'https://agencey.pro'
        }
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
};

interface BreadcrumbSchemaProps {
    items: Array<{ label: string; href?: string }>;
    baseUrl: string;
}

export const BreadcrumbSchema: React.FC<BreadcrumbSchemaProps> = ({ items, baseUrl }) => {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: baseUrl
            },
            ...items.map((item, index) => ({
                '@type': 'ListItem',
                position: index + 2,
                name: item.label,
                ...(item.href ? { item: `${baseUrl}${item.href}` } : {})
            }))
        ]
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
};

interface ServiceSchemaProps {
    service: { name: string; title: string };
    industry: { name: string };
    city: { name: string };
}

export const ServiceSchema: React.FC<ServiceSchemaProps> = ({ service, industry, city }) => {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        serviceType: service.name,
        name: `${service.title} for ${industry.name}`,
        description: `Specialized ${service.name.toLowerCase()} services designed for ${industry.name.toLowerCase()} in ${city.name}`,
        areaServed: {
            '@type': 'City',
            name: city.name
        },
        provider: {
            '@type': 'Organization',
            name: 'Agencey',
            url: 'https://agencey.pro',
            description: 'Digital marketing agency specializing in local business growth'
        },
        offers: {
            '@type': 'Offer',
            availability: 'https://schema.org/InStock',
            priceRange: '$$'
        }
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
};
