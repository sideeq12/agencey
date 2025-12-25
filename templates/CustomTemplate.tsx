import React from 'react';
import { SeoHead } from '@/components/seo/SeoHead';
import { LeadForm } from '@/components/forms/LeadForm';
import { Button } from '@/components/ui/Button';
import { JsonLd } from '@/components/seo/JsonLd';
import { ImagePlaceholder } from '@/components/ui/ImagePlaceholder';
import { Accordion } from '@/components/ui/Accordion';

interface CustomTemplateProps {
    data: {
        title: string;
        description: string;
        cta: string;
        primary_keyword: string;
        slug: string;
    };
}

export const CustomTemplate: React.FC<CustomTemplateProps> = ({ data }) => {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": data.title,
        "description": data.description,
        "provider": {
            "@type": "Organization",
            "name": "Agencey",
            "url": "https://agencey.com"
        },
        "serviceType": "Custom Web Development"
    };

    return (
        <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
            <SeoHead title={data.title} description={data.description} />
            <JsonLd data={schema} />

            {/* Content starts below global Navbar */}

            {/* Hero */}
            <header className="pt-40 pb-20 px-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-blue-500/5 pointer-events-none" />
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8">
                        <div className="inline-block px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-[10px] font-bold uppercase tracking-widest text-zinc-400">
                            Custom Engineering Experts
                        </div>
                        <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.9]">
                            {data.title}
                        </h1>
                        <p className="text-xl md:text-2xl text-zinc-400 max-w-xl leading-relaxed">
                            {data.description}
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Button size="lg">{data.cta}</Button>
                            <Button variant="outline" size="lg">Technical Stack</Button>
                        </div>
                    </div>
                    <ImagePlaceholder text="Engineering Excellence" aspect="video" className="shadow-[0_0_100px_rgba(168,85,247,0.1)] rounded-[40px]" />
                </div>
            </header>

            {/* Feature Grid */}
            <section className="py-24 px-6 bg-zinc-950">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-sm font-black uppercase tracking-[0.3em] text-zinc-500 mb-16 text-center">Built for Performance</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[1, 2, 3, 4, 5, 6].map(i => (
                            <div key={i} className="p-8 rounded-[32px] bg-black border border-zinc-900 hover:border-purple-500/50 transition-colors group">
                                <div className="w-12 h-12 rounded-2xl bg-zinc-900 mb-6 group-hover:bg-purple-500/20 transition-colors" />
                                <h3 className="text-xl font-bold mb-4">Scalable Architecture</h3>
                                <p className="text-zinc-500 text-sm leading-relaxed">
                                    Engineered to handle millions of visitors with sub-second response times using the latest edge computing technologies.
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-24 px-6 border-y border-zinc-900">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl font-bold mb-20 text-center tracking-tight italic">Our Methodology</h2>
                    <div className="space-y-20">
                        {[
                            { step: "01", title: "Discovery & Arch", desc: "We deep-dive into your technical requirements and business goals to map out a resilient architecture." },
                            { step: "02", title: "Design Systems", desc: "Creating a bespoke, modular design system that ensures consistency and lightning-fast development." },
                            { step: "03", title: "Agile Sprints", desc: "Bi-weekly cycles of development and feedback, ensuring your project moves forward with transparency." },
                            { step: "04", title: "Deployment", desc: "CI/CD pipelines set up for seamless, zero-downtime updates and global distribution." }
                        ].map((p, i) => (
                            <div key={i} className="flex gap-12 group">
                                <div className="text-5xl font-black text-zinc-800 group-hover:text-purple-500 transition-colors">{p.step}</div>
                                <div>
                                    <h3 className="text-2xl font-bold mb-4">{p.title}</h3>
                                    <p className="text-zinc-500 leading-relaxed max-w-xl">{p.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials (Standardization) */}
            <section className="py-24 px-6 bg-zinc-950">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <h2 className="text-4xl font-bold tracking-tight">Partnered with the World's Boldest Teams</h2>
                            <p className="text-zinc-400 text-lg">We don't take on every project. We only work with teams that are ready to redefine their category.</p>
                            <ImagePlaceholder text="Client Success Story" aspect="video" />
                        </div>
                        <div className="p-12 rounded-[50px] bg-black border border-zinc-900 shadow-2xl italic text-xl leading-relaxed text-zinc-300">
                            "The technical depth of the Agencey team is unmatched. They didn't just build a website; they built a platform that scales with our growth without breaking a sweat."
                            <footer className="mt-8 not-italic text-sm font-bold text-zinc-500">— CTO, Fintech Unicorn</footer>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-24 px-6 bg-black border-y border-zinc-900">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">Frequently Asked Questions</h2>
                    <p className="text-zinc-400 text-center mb-12">Everything you need to know about our custom engineering services</p>
                    <Accordion items={[
                        {
                            question: "Is a custom website the right choice for my business?",
                            answer: "Custom development is the choice for businesses that have outgrown standard platforms or need unique functionality that plugins can't provide. It's ideal for enterprise SaaS, complex marketplaces, or brands that require absolute control over performance, security, and the user experience."
                        },
                        {
                            question: "What does your custom development process look like?",
                            answer: "We follow a modular engineering approach: Technical Discovery, System Architecture, UI/UX Prototyping, and Agile Development Sprints. We use modern stacks like Next.js, TypeScript, and Tailwind CSS to build robust, maintainable platforms."
                        },
                        {
                            question: "How long does it take to build a custom website?",
                            answer: "Custom builds usually range from 8 to 16 weeks depending on the complexity of the backend logic and integration requirements. We provide a detailed technical roadmap and release internal milestones every two weeks."
                        },
                        {
                            question: "How much does a custom website cost?",
                            answer: "Custom engineering is an investment in your business infrastructure. Pricing depends on the complexity of features, integrations, and performance requirements. We provide transparent, value-based pricing that reflects the long-term scalability of your platform."
                        },
                        {
                            question: "Will my custom site be SEO-friendly?",
                            answer: "Yes. By building from scratch, we have total control over the DOM structure, server-side rendering (SSR), and edge-caching. Custom sites often outperform platform-based sites in Core Web Vitals and organic rankings due to zero code bloat."
                        },
                        {
                            question: "Can I update the website myself after launch?",
                            answer: "Absolutely. We typically integrate a Headless CMS (like Sanity, Contentful, or Strapi) that allows your team to manage content effortlessly while keeping the frontend performant and secure. You get platform ease-of-use with custom power."
                        },
                        {
                            question: "Do you offer maintenance and support after launch?",
                            answer: "Yes. We provide ongoing support agreements that cover security patches, performance monitoring, and iterative feature development. We don't just launch and leave; we partner with you for the long term."
                        },
                        {
                            question: "How does custom development compare to Webflow, WordPress, or Shopify?",
                            answer: "Custom dev offers 'infinite' flexibility compared to platform constraints. While it requires a higher initial investment, it removes the ceiling on what's possible and significantly reduces long-term technical debt for large-scale operations."
                        }
                    ]} />
                </div>
            </section>

            {/* Lead Capture */}
            <section className="py-32 px-6">
                <div className="max-w-4xl mx-auto p-12 md:p-20 rounded-[60px] bg-purple-600/10 border border-purple-500/20 shadow-[0_0_100px_rgba(168,85,247,0.1)]">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-8 underline decoration-purple-500 underline-offset-8 italic">Ready to Build?</h2>
                        <p className="text-zinc-400 text-lg max-w-xl mx-auto">Request a technical consultation today and see how we can transform your digital infrastructure.</p>
                    </div>
                    <LeadForm service="custom" source={data.slug} />
                </div>
            </section>

            {/* Footer */}
            <footer className="py-20 px-6 border-t border-zinc-900">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
                    <div className="text-2xl font-black italic tracking-tighter">AGENCEY.</div>
                    <div className="flex gap-12 text-xs font-bold uppercase tracking-widest text-zinc-500">
                        <a href="/custom" className="text-white">Custom Hub</a>
                        <a href="/webflow" className="hover:text-white">Webflow</a>
                        <a href="/wordpress" className="hover:text-white">WordPress</a>
                        <a href="/" className="hover:text-white">Home</a>
                    </div>
                    <p className="text-[10px] text-zinc-700 font-bold uppercase tracking-[0.3em]">Engineering the Future</p>
                </div>
            </footer>
        </div>
    );
};
