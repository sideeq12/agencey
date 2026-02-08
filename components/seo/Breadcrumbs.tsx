import React from 'react';
import Link from 'next/link';
import { FiChevronRight } from 'react-icons/fi';

interface BreadcrumbItem {
    label: string;
    href?: string;
}

interface BreadcrumbsProps {
    items: BreadcrumbItem[];
    className?: string;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items, className = '' }) => {
    return (
        <nav className={`flex items-center gap-2 text-sm ${className}`} aria-label="Breadcrumb">
            <Link
                href="/"
                className="text-zinc-500 hover:text-blue-600 transition-colors"
            >
                Home
            </Link>

            {items.map((item, index) => (
                <React.Fragment key={index}>
                    <FiChevronRight className="text-zinc-400 text-xs" />
                    {item.href && index < items.length - 1 ? (
                        <Link
                            href={item.href}
                            className="text-zinc-500 hover:text-blue-600 transition-colors"
                        >
                            {item.label}
                        </Link>
                    ) : (
                        <span className="text-zinc-900 font-medium">
                            {item.label}
                        </span>
                    )}
                </React.Fragment>
            ))}
        </nav>
    );
};
