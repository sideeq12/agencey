import React from 'react';
import { industries, locations, services } from '@/data/pseo';
import Link from 'next/link';
import { Section } from '@/components/ui/Section';
import { Footer } from '@/components/ui/Footer';
import { HeroBackground } from '@/components/ui/HeroBackground';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Service Locations | Agencey',
    description: 'Browse our local service areas and specialized industry solutions.',
};

export default function LocationsPage() {
    // Sort cities alphabetically
    const sortedLocations = [...locations].sort((a, b) => a.name.localeCompare(b.name));

    return (
        <div className="min-h-screen bg-white text-zinc-900">
            <header className="relative px-6 pt-32 pb-20 bg-black overflow-hidden">
                <HeroBackground />
                <div className="max-w-7xl mx-auto relative z-10 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Service Locations</h1>
                    <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
                        We provide specialized digital growth systems for local businesses across the United States.
                    </p>
                </div>
            </header>

            <main className="py-24 px-6">
                <div className="max-w-7xl mx-auto space-y-24">
                    {sortedLocations.map((city) => (
                        <section key={city.id} className="border-t border-zinc-100 pt-12 first:border-0 first:pt-0">
                            <h2 className="text-3xl font-bold mb-8 text-zinc-900 border-l-4 border-blue-600 pl-4">
                                {city.name}
                            </h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
                                {services.map((service) => (
                                    <div key={`${city.id}-${service.id}`}>
                                        <h3 className="font-bold text-sm uppercase tracking-widest text-zinc-500 mb-4 flex items-center gap-2">
                                            <span className="w-1 h-1 rounded-full bg-blue-600"></span>
                                            {service.title} in {city.name.split(',')[0]}
                                        </h3>
                                        <div className="space-y-2 flex flex-col">
                                            {industries.map((industry) => (
                                                <Link
                                                    key={`${city.id}-${service.id}-${industry.id}`}
                                                    href={`/local/${service.slug}/${industry.slug}/${city.slug}`}
                                                    className="text-zinc-600 hover:text-blue-600 transition-colors text-sm py-1 border-b border-zinc-50 hover:border-zinc-200"
                                                >
                                                    {service.name} for {industry.name}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    ))}
                </div>
            </main>

            <Footer />
        </div>
    );
}
