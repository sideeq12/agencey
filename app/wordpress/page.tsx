"use client";

import { motion } from "framer-motion";
import pages from "@/data/wordpress/pages.json";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { FiCode, FiCheckCircle } from "react-icons/fi";
import { LeadForm } from "@/components/forms/LeadForm";

export default function WordPressHub() {
    return (
        <div className="min-h-screen bg-black text-white px-6">
            {/* Hero Section */}
            <section className="relative min-h-[90vh] flex items-center justify-center pt-32 pb-20 overflow-hidden text-center">
                <div className="absolute inset-0 bg-gradient-to-b from-purple-500/10 to-transparent opacity-30 pointer-events-none" />
                <div className="max-w-6xl mx-auto w-full relative z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-block p-4 rounded-3xl bg-purple-500/10 border border-purple-500/20 mb-10 text-purple-500">
                            <FiCode className="text-4xl" />
                        </div>
                        <h1 className="text-5xl md:text-8xl font-black italic tracking-tighter leading-[0.8] uppercase mb-12">
                            Flexible WordPress Websites<br />Built for Long-Term Growth.
                        </h1>
                        <p className="text-xl md:text-3xl text-zinc-400 max-w-4xl mx-auto font-medium leading-relaxed mb-16">
                            We create secure, scalable WordPress websites tailored to your business — optimized for SEO, performance, and easy content management.
                        </p>
                        <Link href="#strategy">
                            <Button size="lg" className="h-16 px-10 text-lg font-bold mb-20 group">
                                <span className="group-hover:translate-x-1 transition-transform inline-block">👉 Start My WordPress Project</span>
                            </Button>
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Platform Sub-services / Pages */}
            <section className="py-24 border-t border-zinc-900 bg-zinc-950/50">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-[10px] font-bold uppercase tracking-[0.5em] text-zinc-500 text-center mb-16">Enterprise WordPress Calibration</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {pages.map((page, i) => (
                            <Link
                                key={page.slug}
                                href={`/wordpress/${page.slug}`}
                                className="group p-10 rounded-[40px] border border-zinc-800 hover:border-purple-500/50 transition-all bg-black flex flex-col justify-between"
                            >
                                <div>
                                    <h2 className="text-2xl font-black italic tracking-tighter mb-4 uppercase group-hover:text-white transition-colors leading-none">{page.title}</h2>
                                    <p className="text-zinc-500 text-sm mb-8 leading-relaxed font-medium">{page.description}</p>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-[10px] font-black uppercase tracking-widest text-zinc-700">Scalable Architecture</span>
                                    <span className="text-purple-500 group-hover:translate-x-2 transition-transform">→</span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Strategy Section */}
            <section id="strategy" className="py-40 border-t border-zinc-900 bg-black">
                <div className="max-w-7xl mx-auto">
                    <div className="bg-zinc-900 border border-zinc-800 p-8 md:p-16 rounded-[60px] shadow-2xl text-left">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <div className="space-y-8">
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                >
                                    <h2 className="text-3xl md:text-4xl font-black italic tracking-tighter mb-6 uppercase leading-[0.9]">
                                        Let&apos;s Find Why Your<br />Website Isn&apos;t Converting.
                                    </h2>
                                    <p className="text-zinc-400 leading-relaxed font-medium">
                                        Book a free 30-minute strategy session. We&apos;ll review your current marketing, identify what&apos;s holding you back, and outline a clear path to more revenue.
                                    </p>
                                </motion.div>

                                <div className="space-y-4">
                                    {[
                                        { title: "Business Review", desc: "A clear look at what's working and what isn't." },
                                        { title: "Growth Plan", desc: "Specific recommendations tailored to your goals." },
                                        { title: "Implementation", desc: "Expert guidance on how to execute effectively." }
                                    ].map((item, i) => (
                                        <div key={i} className="flex gap-4">
                                            <div className="w-8 h-8 rounded-lg bg-black border border-zinc-800 flex items-center justify-center shrink-0">
                                                <div className="w-1 h-1 rounded-full bg-white" />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-white text-sm uppercase tracking-wider">{item.title}</h4>
                                                <p className="text-xs text-zinc-500">{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="bg-black/40 backdrop-blur-sm p-8 md:p-12 rounded-[40px] border border-zinc-800">
                                <LeadForm service="wordpress" source="wordpress_hub" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
