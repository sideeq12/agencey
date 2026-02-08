import React from 'react';
import { industries, locations, services } from '@/data/pseo';
import Link from 'next/link';
import { Section } from '@/components/ui/Section';
import { Footer } from '@/components/ui/Footer';
import { HeroBackground } from '@/components/ui/HeroBackground';
import { Metadata } from 'next';
import { FiMapPin, FiGrid, FiTrendingUp } from 'react-icons/fi';

export const metadata: Metadata = {
    title: 'Local Services by Location - SEO & Website Design | Agencey',
    description: `Expert SEO and website design services across ${locations.length} major US cities. Specialized marketing for plumbers, dentists, HVAC, lawyers, restaurants, and more.`,
    alternates: {
        canonical: '/locations'
    }
};

export default function LocationsPage() {
    // Sort cities alphabetically
    const sortedLocations = [...locations].sort((a, b) => a.name.localeCompare(b.name));

    // Calculate total pages for stats
    const totalPages = services.length * industries.length * locations.length;

    return (
        <div className="min-h-screen bg-white text-zinc-900">
            <header className="relative px-6 pt-32 pb-20 bg-black overflow-hidden">
                <HeroBackground />
                <div className="max-w-7xl mx-auto relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-bold uppercase tracking-widest text-white/80">
                        <FiMapPin />
                        {locations.length} Cities
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Local Digital Marketing Services</h1>
                    <p className="text-zinc-400 max-w-2xl mx-auto text-xl">
                        Expert SEO and website design for local businesses. Specialized strategies for your industry and city.
                    </p>
                </div>
            </header>

            {/* Quick Stats */}
            <Section className="py-12 px-6 border-b border-zinc-200 bg-zinc-50">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
                    <div className="p-6 rounded-2xl bg-white border border-zinc-200">
                        <FiMapPin className="text-3xl text-blue-600 mx-auto mb-3" />
                        <div className="text-3xl font-bold text-zinc-900 mb-1">{locations.length}</div>
                        <div className="text-sm text-zinc-600 font-medium">Cities</div>
                    </div>
                    <div className="p-6 rounded-2xl bg-white border border-zinc-200">
                        <FiGrid className="text-3xl text-blue-600 mx-auto mb-3" />
                        <div className="text-3xl font-bold text-zinc-900 mb-1">{industries.length}</div>
                        <div className="text-sm text-zinc-600 font-medium">Industries</div>
                    </div>
                    <div className="p-6 rounded-2xl bg-white border border-zinc-200">
                        <FiTrendingUp className="text-3xl text-blue-600 mx-auto mb-3" />
                        <div className="text-3xl font-bold text-zinc-900 mb-1">{services.length}</div>
                        <div className="text-sm text-zinc-600 font-medium">Services</div>
                    </div>
                    <div className="p-6 rounded-2xl bg-blue-600 text-white">
                        <div className="text-3xl font-bold mb-1">{totalPages}</div>
                        <div className="text-sm font-medium opacity-90">Total Solutions</div>
                    </div>
                </div>
            </Section>

            {/* Services Quick Links */}
            <Section className="py-16 px-6 bg-white">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold mb-8">Browse by Service</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {services.map(service => (
                            <div key={service.id} className="p-8 rounded-2xl border border-zinc-200 hover:border-blue-300 hover:shadow-lg transition-all">
                                <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                                <p className="text-zinc-600 mb-6">{service.action} for local businesses</p>
                                <div className="flex flex-wrap gap-2">
                                    {sortedLocations.map(city => (
                                        <Link
                                            key={city.id}
                                            href={`/local/${service.slug}/${industries[0].slug}/${city.slug}`}
                                            className="text-xs px-3 py-1.5 rounded-full bg-zinc-100 hover:bg-blue-600 hover:text-white transition-colors font-medium"
                                        >
                                            {city.name.split(',')[0]}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* Industries Quick Links */}
            <Section className="py-16 px-6 bg-zinc-50 border-y border-zinc-200">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold mb-8">Browse by Industry</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                        {industries.map(industry => (
                            <Link
                                key={industry.id}
                                href={`/local/seo/${industry.slug}/${locations[0].slug}`}
                                className="p-4 rounded-xl bg-white border border-zinc-200 hover:border-blue-300 hover:shadow-md transition-all text-center group"
                            >
                                <div className="font-bold text-zinc-800 group-hover:text-blue-600 mb-1 text-sm">
                                    {industry.name}
                                </div>
                                <div className="text-xs text-zinc-500">
                                    {locations.length} cities
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </Section>

            <main className="py-24 px-6">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold mb-12 text-center">All Services by City</h2>
                    <div className="space-y-16">
                        {sortedLocations.map((city) => (
                            <section key={city.id} className="border-t border-zinc-100 pt-12 first:border-0 first:pt-0">
                                <h2 className="text-3xl font-bold mb-8 text-zinc-900 border-l-4 border-blue-600 pl-4">
                                    {city.name}
                                </h2>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
                                    {services.map((service) => (
                                        <div key={`${city.id}-${service.id}`} className="p-6 rounded-xl bg-zinc-50 border border-zinc-100">
                                            <h3 className="font-bold text-lg mb-4 text-zinc-900">
                                                {service.title} in {city.name.split(',')[0]}
                                            </h3>
                                            <div className="space-y-2 flex flex-col">
                                                {industries.map((industry) => (
                                                    <Link
                                                        key={`${city.id}-${service.id}-${industry.id}`}
                                                        href={`/local/${service.slug}/${industry.slug}/${city.slug}`}
                                                        className="text-zinc-700 hover:text-blue-600 hover:translate-x-1 transition-all text-sm py-1.5 flex items-center gap-2"
                                                    >
                                                        <span className="text-blue-600">→</span>
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
                </div>
            </main>

            <Footer />
        </div>
    );
}
