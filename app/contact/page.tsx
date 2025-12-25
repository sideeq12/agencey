"use client";

import { LeadForm } from "@/components/forms/LeadForm";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiMail, FiPhone, FiMapPin, FiArrowLeft } from "react-icons/fi";

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-black text-white">
            {/* Hero Section */}
            <section className="relative h-[80vh] flex items-center justify-center pt-32 px-6 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/20 to-black pointer-events-none" />
                <div className="max-w-6xl mx-auto w-full relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="space-y-8"
                    >
                        <nav className="flex justify-center mb-12">
                            <Link href="/">
                                <Button variant="outline" size="sm" className="gap-2 border-zinc-800 text-zinc-400 hover:text-white">
                                    <FiArrowLeft /> Back to Home
                                </Button>
                            </Link>
                        </nav>
                        <h1 className="text-6xl md:text-9xl font-black italic tracking-tighter leading-[0.85] uppercase">
                            The Strategy<br />Hub.
                        </h1>
                        <p className="text-xl md:text-2xl text-zinc-400 max-w-2xl mx-auto font-medium leading-relaxed">
                            Ready to scale your digital presence? Book your free 30-minute high-fidelity strategy session below.
                        </p>
                        <div className="pt-12">
                            <motion.div
                                animate={{ y: [0, 10, 0] }}
                                transition={{ repeat: Infinity, duration: 2 }}
                                className="text-zinc-600 text-[10px] font-bold uppercase tracking-[0.5em]"
                            >
                                Scroll to Engineer
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Strategy Section */}
            <section className="py-32 px-6 bg-black" id="strategy">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-12 lg:sticky lg:top-32"
                        >
                            <div>
                                <h2 className="text-4xl md:text-6xl font-black italic tracking-tighter mb-8 leading-[0.9] uppercase">
                                    Let&apos;s Find Why Your<br />Website Isn&apos;t Converting.
                                </h2>
                                <p className="text-xl text-zinc-400 max-w-lg leading-relaxed font-medium">
                                    We&apos;ll review your current marketing, identify what&apos;s holding you back, and outline a clear, realistic path to more leads and revenue.
                                </p>
                            </div>

                            <div className="space-y-10">
                                <div>
                                    <h3 className="text-xs font-black uppercase tracking-[0.3em] text-zinc-600 mb-6">What You&apos;ll Get</h3>
                                    <div className="space-y-8">
                                        {[
                                            {
                                                title: "Focused Business Review",
                                                desc: "A clear look at what's working, what isn't, and where opportunities are being missed."
                                            },
                                            {
                                                title: "Actionable Growth Plan",
                                                desc: "Specific recommendations tailored to your business, market, and goals."
                                            },
                                            {
                                                title: "Implementation Guidance",
                                                desc: "We'll show you exactly what to fix, what to prioritize, and how to execute."
                                            }
                                        ].map((item, i) => (
                                            <div key={i} className="flex gap-4 group">
                                                <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center shrink-0 group-hover:border-white transition-colors">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-white" />
                                                </div>
                                                <div>
                                                    <h4 className="font-bold text-white mb-1 uppercase text-xs tracking-wider">{item.title}</h4>
                                                    <p className="text-sm text-zinc-500 leading-relaxed">{item.desc}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-zinc-900/50 border border-zinc-800 p-8 md:p-16 rounded-[60px] shadow-2xl"
                        >
                            <h2 className="text-2xl font-black italic tracking-tighter mb-12 uppercase">Session Parameters</h2>
                            <LeadForm service="general" source="contact_page" />
                        </motion.div>
                    </div>
                </div>
            </section>

            <footer className="py-20 px-6 border-t border-zinc-900 flex justify-center text-zinc-600">
                <p className="text-[10px] font-bold uppercase tracking-[0.5em]">AGENCEY / 2025 / STRATEGY UNIT</p>
            </footer>
        </div>
    );
}
