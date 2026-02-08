import React from 'react';
import { Button } from '@/components/ui/Button';
import { Section } from '@/components/ui/Section';
import { Footer } from '@/components/ui/Footer';
import { LeadForm } from '@/components/forms/LeadForm';
import { HeroBackground } from '@/components/ui/HeroBackground';
import { Breadcrumbs } from '@/components/seo/Breadcrumbs';
import { LocalBusinessSchema, BreadcrumbSchema, ServiceSchema } from '@/components/seo/StructuredData';
import Link from 'next/link';
import { FiCheck, FiArrowRight, FiTrendingUp, FiTarget, FiLayout } from 'react-icons/fi';
import { industries, locations, services } from '@/data/pseo';

interface PseoTemplateProps {
    service: { id: string; name: string; title: string, action: string, slug: string };
    industry: { id: string; name: string; singular: string, slug: string };
    city: { id: string; name: string, slug: string };
}

export const PseoTemplate: React.FC<PseoTemplateProps> = ({ service, industry, city }) => {
    const cityName = city.name.split(',')[0]; // Just the city name for some uses

    // Generate related services (same city, different industries/services)
    const relatedSameCity = industries
        .filter(ind => ind.id !== industry.id)
        .slice(0, 5)
        .map(ind => ({
            title: `${service.name} for ${ind.name}`,
            href: `/local/${service.slug}/${ind.slug}/${city.slug}`
        }));

    // Related services (same industry, different service)
    const relatedDifferentService = services
        .filter(svc => svc.id !== service.id)
        .map(svc => ({
            title: `${svc.name} for ${industry.name}`,
            href: `/local/${svc.slug}/${industry.slug}/${city.slug}`
        }));

    // Nearby cities (same service + industry)
    const nearbyCities = locations
        .filter(loc => loc.id !== city.id)
        .slice(0, 3)
        .map(loc => ({
            title: `${service.name} in ${loc.name.split(',')[0]}`,
            href: `/local/${service.slug}/${industry.slug}/${loc.slug}`
        }));

    const allRelated = [...relatedSameCity, ...relatedDifferentService, ...nearbyCities];

    // Breadcrumb navigation
    const breadcrumbs = [
        { label: 'Local Services', href: '/locations' },
        { label: service.name, href: `/locations#${service.slug}` },
        { label: industry.name, href: `/locations#${industry.slug}` },
        { label: cityName }
    ];

    return (
        <div className="min-h-screen bg-white text-zinc-900">
            {/* Structured Data for SEO */}
            <LocalBusinessSchema
                service={service}
                industry={industry}
                city={city}
                url={`https://agencey.pro/local/${service.slug}/${industry.slug}/${city.slug}`}
            />
            <ServiceSchema service={service} industry={industry} city={city} />
            <BreadcrumbSchema items={breadcrumbs} baseUrl="https://agencey.pro" />

            {/* Breadcrumbs */}
            <div className="fixed top-20 left-0 right-0 z-40 bg-white/95 backdrop-blur-sm border-b border-zinc-200">
                <div className="max-w-7xl mx-auto px-6 py-3">
                    <Breadcrumbs items={breadcrumbs} />
                </div>
            </div>

            {/* 1. Hero Section */}
            <header className="relative px-6 pt-40 pb-32 min-h-[85vh] flex items-center justify-center overflow-hidden">
                <HeroBackground />
                <div className="max-w-5xl mx-auto text-center relative z-10">
                    <div className="inline-block px-4 py-2 mb-8 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[10px] font-bold uppercase tracking-[0.2em] text-white/80">
                        {service.name} for {industry.name}
                    </div>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 leading-[1.1] text-white drop-shadow-2xl">
                        {service.action} for <br />
                        <span className="text-blue-400">{industry.name} in {cityName}</span>
                    </h1>
                    <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-12 font-medium leading-relaxed drop-shadow-lg">
                        We help {industry.singular.toLowerCase()}s in {city.name} get more clients, increase revenue, and dominate their local market with data-driven {service.name.toLowerCase()} strategies.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                        <Link href="#contact">
                            <Button size="lg" className="h-16 px-10 text-base font-bold rounded-full shadow-xl">
                                Get Your Free Growth Plan
                            </Button>
                        </Link>
                        <p className="text-white/60 text-sm font-medium">
                            No commitment. 100% free strategy session.
                        </p>
                    </div>
                </div>
            </header>

            {/* 2. Problems Section */}
            <Section className="py-24 px-6 bg-white">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">
                        Is your {industry.singular.toLowerCase()} business invisible in {cityName}?
                    </h2>
                    <p className="text-xl text-zinc-600">
                        Most {industry.name.toLowerCase()} struggle with the same digital challenges.
                    </p>
                </div>
                <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { title: "Low Lead Volume", desc: `You aren't getting enough qualified calls from people in ${city.name} looking for a ${industry.singular.toLowerCase()}.` },
                        { title: "Wasted Ad Spend", desc: "You've tried running ads before, but they just burned money without bringing in real jobs." },
                        { title: "Outdated Website", desc: "Your current site doesn't reflect the quality of your work, costing you trust and customers." }
                    ].map((item, i) => (
                        <div key={i} className="p-8 rounded-3xl bg-zinc-50 border border-zinc-100">
                            <h3 className="text-xl font-bold mb-4 text-red-600">{item.title}</h3>
                            <p className="text-zinc-600 leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </Section>

            {/* 3. Solution Section */}
            <Section className="py-24 px-6 bg-zinc-50 border-y border-zinc-200">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <div className="inline-block px-3 py-1 mb-6 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-widest">
                            Our Solution
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-8">
                            Specialized {service.name} Strategies for {industry.name}
                        </h2>
                        <p className="text-lg text-zinc-600 mb-8 leading-relaxed">
                            We don't do generic marketing. We build custom {service.name.toLowerCase()} systems specifically designed for {industry.singular.toLowerCase()}s in {cityName} to capture high-intent leads.
                        </p>
                        <ul className="space-y-4 mb-10">
                            {[
                                `Targeted ${service.name} Implementation`,
                                `Competitor Analysis in ${cityName}`,
                                `Conversion-Focused Landing Pages`,
                                `Automated Lead Follow-up Systems`
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3">
                                    <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center shrink-0">
                                        <FiCheck className="text-white text-sm" />
                                    </div>
                                    <span className="font-bold text-zinc-700">{item}</span>
                                </li>
                            ))}
                        </ul>
                        <Link href="#contact">
                            <Button variant="outline" className="font-bold">
                                See How We Do It <FiArrowRight className="ml-2" />
                            </Button>
                        </Link>
                    </div>
                    <div className="relative">
                        <div className="aspect-square rounded-[40px] bg-gradient-to-br from-blue-600 to-indigo-700 shadow-2xl p-12 flex flex-col justify-center items-center text-center text-white">
                            <FiTrendingUp className="text-8xl mb-8 opacity-90" />
                            <div className="text-5xl font-bold mb-2">+147%</div>
                            <div className="text-xl opacity-80">Average Lead Increase</div>
                            <div className="mt-8 text-sm opacity-60">for our partners in {city.name}</div>
                        </div>
                    </div>
                </div>
            </Section>

            {/* 4. Benefits Section */}
            <Section className="py-24 px-6 bg-white">
                <div className="max-w-4xl mx-auto text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">Real Business Impact</h2>
                    <p className="text-xl text-zinc-600">The results that matter for your bottom line.</p>
                </div>
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
                    {[
                        { icon: FiTarget, title: "Qualified Leads", desc: `Get calls from real customers in ${cityName} who are ready to hire a ${industry.singular.toLowerCase()} now.` },
                        { icon: FiTrendingUp, title: "Predictable Growth", desc: "Stop relying on referrals and luck. Build a consistent engine for new business." },
                        { icon: FiLayout, title: "Market Authority", desc: `Become the #1 most trusted ${industry.singular.toLowerCase()} in the ${cityName} area.` }
                    ].map((item, i) => (
                        <div key={i} className="text-center group">
                            <div className="w-20 h-20 mx-auto mb-8 rounded-3xl bg-blue-50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                <item.icon className="text-4xl text-blue-600" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                            <p className="text-zinc-600 leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </Section>

            {/* 5. Why Choose Us */}
            <Section className="py-24 px-6 bg-zinc-900 text-white">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl md:text-5xl font-bold mb-8">Why {industry.name} Trust Agencey</h2>
                    <p className="text-xl text-zinc-400 mb-12 max-w-2xl mx-auto">
                        We understand the {industry.singular.toLowerCase()} business. We know what keywords drive calls, what ad copy gets clicks, and what website designs convert.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-left max-w-3xl mx-auto">
                        <div className="p-8 rounded-2xl bg-white/5 border border-white/10">
                            <h4 className="font-bold text-xl mb-2">Data-Driven Approach</h4>
                            <p className="text-zinc-400 text-sm">We don't guess. We use real search data from {cityName} to make decisions.</p>
                        </div>
                        <div className="p-8 rounded-2xl bg-white/5 border border-white/10">
                            <h4 className="font-bold text-xl mb-2">Exclusivity Focused</h4>
                            <p className="text-zinc-400 text-sm">We limit how many {industry.name.toLowerCase()} we work with in one city to avoid conflict.</p>
                        </div>
                    </div>
                </div>
            </Section>

            {/* 6. Simple Process */}
            <Section className="py-24 px-6 bg-white">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">How It Works</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {[
                            { step: "01", title: "Audit & Strategy", desc: `We analyze your current presence and spy on your competitors in ${cityName}.` },
                            { step: "02", title: "Hyperscale Launch", desc: `We build and launch your custom ${service.name} campaign.` },
                            { step: "03", title: "Leads & Revenue", desc: "You start getting booked appointments and calls directly to your phone." }
                        ].map((s, i) => (
                            <div key={i} className="relative">
                                <div className="text-8xl font-black text-zinc-100 absolute -top-8 -left-4 -z-10 select-none">
                                    {s.step}
                                </div>
                                <h3 className="text-2xl font-bold mb-4 pt-4">{s.title}</h3>
                                <p className="text-zinc-600">{s.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* 7. Related Services - CRITICAL FOR SEO INTERNAL LINKING */}
            <Section className="py-24 px-6 bg-zinc-50 border-y border-zinc-200">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Related Services</h2>
                    <p className="text-center text-zinc-600 mb-12 max-w-2xl mx-auto">
                        Explore more of our specialized marketing solutions for local businesses.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {allRelated.map((related, i) => (
                            <Link
                                key={i}
                                href={related.href}
                                className="p-6 rounded-xl bg-white border border-zinc-200 hover:border-blue-300 hover:shadow-lg transition-all group"
                            >
                                <div className="flex items-start gap-3">
                                    <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center shrink-0 group-hover:bg-blue-600 transition-colors">
                                        <FiArrowRight className="text-blue-600 group-hover:text-white transition-colors" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-zinc-900 group-hover:text-blue-600 transition-colors mb-1">
                                            {related.title}
                                        </h3>
                                        <p className="text-xs text-zinc-500">View service details →</p>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <Link
                            href="/locations"
                            className="inline-block px-8 py-4 bg-white border-2 border-zinc-300 rounded-full font-bold hover:border-blue-600 hover:text-blue-600 transition-colors"
                        >
                            View All Service Locations →
                        </Link>
                    </div>
                </div>
            </Section>

            {/* 8. CTA & Form */}
            <Section className="py-24 px-6 bg-blue-600" id="contact">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="text-white">
                        <h2 className="text-4xl md:text-6xl font-black italic tracking-tighter mb-8 uppercase leading-none">
                            Dominate Your<br />Local Market.
                        </h2>
                        <p className="text-xl text-blue-100 mb-12 max-w-lg leading-relaxed">
                            Stop losing customers to competitors in {cityName}. Let's build a system that brings you steady, high-paying work.
                        </p>
                        <div className="flex flex-col gap-4">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center font-bold">1</div>
                                <div>
                                    <p className="font-bold">Book a Request</p>
                                    <p className="text-sm text-blue-200">Fill out the form to get started.</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center font-bold">2</div>
                                <div>
                                    <p className="font-bold">Get Your Plan</p>
                                    <p className="text-sm text-blue-200">We'll send you a custom growth roadmap.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-[40px] p-8 md:p-12 shadow-2xl">
                        <h3 className="text-2xl font-bold text-zinc-900 mb-6">Request Your Growth Plan</h3>
                        <LeadForm service={service.id} source={`pseo-${service.slug}-${industry.slug}-${city.slug}`} />
                    </div>
                </div>
            </Section>

            <Footer />
        </div>
    );
};
