import React from 'react';

interface SeoHeadProps {
    title: string;
    description?: string;
}

export const SeoHead: React.FC<SeoHeadProps> = ({ title, description }) => {
    return (
        <>
            <title>{title}</title>
            {description && <meta name="description" content={description} />}
        </>
    );
};
