"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { FiLayout, FiMaximize, FiTarget, FiTrendingUp, FiZap, FiCheckCircle, FiShare2, FiSettings, FiShoppingCart, FiBox } from "react-icons/fi";
import { LeadForm } from "@/components/forms/LeadForm";
import { HeroBackground } from "@/components/ui/HeroBackground";

export default function ServicesPage() {
    const mainServices = [
        {
            title: "Webflow Development",
            href: "/webflow",
            icon: FiLayout,
            color: "blue",
            desc: "Pixel-perfect visual engineering and scalable CMS architecture."
        },
        {
            title: "Shopify E-commerce",
            href: "/shopify",
            icon: FiShoppingCart,
            color: "green",
            desc: "High-conversion commerce systems built for rapid scaling."
        },
        {
            title: "WordPress Solutions",
            href: "/wordpress",
            icon: FiTarget,
            color: "purple",
            desc: "Enterprise-grade CMS orchestration and secure technical builds."
        },
        {
            title: "SEO Domination",
            href: "/seo",
            icon: FiTrendingUp,
            color: "cyan",
            desc: "Programmatic search engine dominance and authority building."
        },
        {
            title: "Social Lead Generation",
            href: "/social-media",
            icon: FiShare2,
            color: "orange",
            desc: "High-performance paid acquisition and social conversion funnels."
        },
        {
            title: "Custom Web Apps",
            href: "/custom",
            icon: FiBox,
            color: "rose",
            desc: "Bespoke full-stack verticality for unique business requirements."
        }
    ];

    return (
        <div className="min-h-screen bg-white text-zinc-900 px-6">
            {/* Hero Section */}
            <section className="relative min-h-[90vh] flex items-center justify-center pt-32 pb-20 overflow-hidden text-center">
                <HeroBackground />
                <div className="max-w-6xl mx-auto w-full relative z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-block p-4 rounded-3xl bg-zinc-100 border border-zinc-200 mb-10 text-zinc-600">
                            <FiLayout className="text-4xl" />
                        </div>
                        <h1 className="text-4xl md:text-5xl font-black italic tracking-tighter leading-[0.9] uppercase mb-12">
                            Everything You Need to<br />Attract, Convert, and Retain<br />Customers Online.
                        </h1>
                        <p className="text-xl md:text-3xl text-zinc-600 max-w-4xl mx-auto font-medium leading-relaxed mb-16">
                            From high-performance websites to lead generation and ongoing management, we help businesses grow with clarity, structure, and measurable results.
                        </p>
                        <Link href="#contact">
                            <Button size="lg" className="h-16 px-10 text-lg font-bold group">
                                <span className="group-hover:translate-x-1 transition-transform inline-block">Scale My Business Online</span>
                            </Button>
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-24 border-t border-zinc-200 bg-zinc-50/50">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {mainServices.map((service, i) => (
                            <Link
                                key={service.title}
                                href={service.href}
                                className="group p-10 rounded-[40px] border border-zinc-200 hover:border-zinc-300 transition-all bg-white flex flex-col justify-between"
                            >
                                <div>
                                    <div className="w-12 h-12 rounded-2xl bg-zinc-100 flex items-center justify-center mb-8 border border-zinc-200 transition-colors group-hover:bg-zinc-900 group-hover:text-white">
                                        <service.icon className="text-xl" />
                                    </div>
                                    <h2 className="text-3xl font-black italic tracking-tighter mb-4 uppercase group-hover:text-zinc-900 transition-colors leading-none">{service.title}</h2>
                                    <p className="text-zinc-600 text-sm mb-8 leading-relaxed font-medium">{service.desc}</p>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Explore Vertical</span>
                                    <span className="text-zinc-900 group-hover:translate-x-2 transition-transform">→</span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-40 border-t border-zinc-200 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="bg-zinc-50 border border-zinc-200 p-8 md:p-16 rounded-[60px] shadow-2xl text-left">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <div className="space-y-8">
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                >
                                    <h2 className="text-3xl md:text-4xl font-black italic tracking-tighter mb-6 uppercase leading-[0.9]">
                                        Ready to Grow Your<br />Business?
                                    </h2>
                                    <p className="text-zinc-600 leading-relaxed font-medium">
                                        Ready to scale? Book a strategy session with our lead architects. We&apos;ll audit your current digital stack and provide a clear roadmap to dominance.
                                    </p>
                                </motion.div>

                                <div className="space-y-4">
                                    {[
                                        { title: "Audit & Analysis", desc: "Technical and marketing assessment." },
                                        { title: "Strategic Roadmap", desc: "Custom growth plan for your business." },
                                        { title: "Global Execution", desc: "End-to-end implementation by specialists." }
                                    ].map((item, i) => (
                                        <div key={i} className="flex gap-4">
                                            <div className="w-8 h-8 rounded-lg bg-white border border-zinc-200 flex items-center justify-center shrink-0">
                                                <div className="w-1 h-1 rounded-full bg-zinc-900" />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-zinc-900 text-sm uppercase tracking-wider">{item.title}</h4>
                                                <p className="text-xs text-zinc-600">{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="bg-white/40 backdrop-blur-sm p-8 md:p-12 rounded-[40px] border border-zinc-200">
                                <LeadForm service="overview" source="services_landing" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
