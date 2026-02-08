"use client";

import React, { useState } from 'react';
import Link from "next/link";
import Image from 'next/image';
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { FiCode, FiLayout, FiShoppingCart, FiZap, FiChevronDown, FiTrendingUp, FiShare2, FiMapPin } from "react-icons/fi";

export const Navbar = () => {
    const [isDevOpen, setIsDevOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [isLocationsOpen, setIsLocationsOpen] = useState(false);

    const devPlatforms = [
        { title: "Webflow", href: "/webflow", icon: FiLayout, desc: "Visual engineering" },
        { title: "WordPress", href: "/wordpress", icon: FiCode, desc: "Enterprise CMS" },
        { title: "Shopify", href: "/shopify", icon: FiShoppingCart, desc: "E-commerce" },
        { title: "Custom", href: "/custom", icon: FiZap, desc: "Bespoke code" },
    ];

    const searchServices = [
        { title: "Google Search Ranking", href: "/seo", icon: FiTrendingUp, desc: "SEO Dominance" },
        { title: "Social Media Ads & Management", href: "/social-media", icon: FiShare2, desc: "Paid acquisition" },
    ];

    return (
        <nav className="fixed top-0 w-full z-50 bg-white border-b border-zinc-200/50">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                <Link href="/" className="relative h-10 w-32">
                    <Image
                        src="/whitebg.png"
                        alt="Agencey Logo"
                        fill
                        className="object-contain"
                        priority
                    />
                </Link>
                <div className="hidden lg:flex gap-8 text-xs font-bold uppercase tracking-widest items-center">
                    <Link href="/services" className="text-zinc-600 hover:text-zinc-900 transition-colors">Services</Link>

                    {/* Website Development Dropdown */}
                    <div
                        className="relative"
                        onMouseEnter={() => setIsDevOpen(true)}
                        onMouseLeave={() => setIsDevOpen(false)}
                    >
                        <button className="text-zinc-600 hover:text-zinc-900 transition-colors h-10 flex items-center gap-1">
                            Website Development
                            <FiChevronDown className={`text-xs transition-transform ${isDevOpen ? 'rotate-180' : ''}`} />
                        </button>

                        {isDevOpen && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="absolute top-full left-0 mt-0 w-64 bg-zinc-50 border border-zinc-200 rounded-xl shadow-2xl overflow-hidden p-2"
                            >
                                <div className="space-y-1">
                                    {devPlatforms.map((item) => {
                                        const Icon = item.icon;
                                        return (
                                            <Link
                                                key={item.title}
                                                href={item.href}
                                                className="flex items-center gap-3 px-3 py-2 hover:bg-zinc-100/50 rounded-lg transition-colors group"
                                            >
                                                <div className="w-8 h-8 rounded-lg bg-zinc-100 flex items-center justify-center group-hover:bg-zinc-900 transition-colors">
                                                    <Icon className="text-zinc-600 group-hover:text-white transition-colors" />
                                                </div>
                                                <div>
                                                    <div className="font-bold text-zinc-800 group-hover:text-zinc-900 text-[10px]">{item.title}</div>
                                                    <div className="text-[9px] text-zinc-600 group-hover:text-zinc-500">{item.desc}</div>
                                                </div>
                                            </Link>
                                        );
                                    })}
                                </div>
                            </motion.div>
                        )}
                    </div>

                    {/* Growth & Marketing Dropdown */}
                    <div
                        className="relative"
                        onMouseEnter={() => setIsSearchOpen(true)}
                        onMouseLeave={() => setIsSearchOpen(false)}
                    >
                        <button className="text-zinc-600 hover:text-zinc-900 transition-colors h-10 flex items-center gap-1 text-[10px]">
                            Growth & Marketing
                            <FiChevronDown className={`text-xs transition-transform ${isSearchOpen ? 'rotate-180' : ''}`} />
                        </button>

                        {isSearchOpen && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="absolute top-full left-0 mt-0 w-72 bg-zinc-50 border border-zinc-200 rounded-xl shadow-2xl overflow-hidden p-2"
                            >
                                <div className="space-y-1">
                                    {searchServices.map((item) => {
                                        const Icon = item.icon;
                                        return (
                                            <Link
                                                key={item.title}
                                                href={item.href}
                                                className="flex items-center gap-3 px-3 py-2 hover:bg-zinc-100/50 rounded-lg transition-colors group"
                                            >
                                                <div className="w-8 h-8 rounded-lg bg-zinc-100 flex items-center justify-center group-hover:bg-zinc-900 transition-colors">
                                                    <Icon className="text-zinc-600 group-hover:text-white transition-colors" />
                                                </div>
                                                <div>
                                                    <div className="font-bold text-zinc-800 group-hover:text-zinc-900 text-[10px]">{item.title}</div>
                                                    <div className="text-[9px] text-zinc-600 group-hover:text-zinc-500">{item.desc}</div>
                                                </div>
                                            </Link>
                                        );
                                    })}
                                </div>
                            </motion.div>
                        )}
                    </div>

                    {/* Locations Dropdown */}
                    <div
                        className="relative"
                        onMouseEnter={() => setIsLocationsOpen(true)}
                        onMouseLeave={() => setIsLocationsOpen(false)}
                    >
                        <button className="text-zinc-600 hover:text-zinc-900 transition-colors h-10 flex items-center gap-1">
                            Locations
                            <FiChevronDown className={`text-xs transition-transform ${isLocationsOpen ? 'rotate-180' : ''}`} />
                        </button>

                        {isLocationsOpen && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="absolute top-full left-0 mt-0 w-80 bg-zinc-50 border border-zinc-200 rounded-xl shadow-2xl overflow-hidden p-2 max-h-[500px] overflow-y-auto"
                            >
                                <Link
                                    href="/locations"
                                    className="block px-3 py-2 mb-2 bg-blue-600 text-white rounded-lg text-xs font-bold text-center hover:bg-blue-700 transition-colors"
                                >
                                    View All Locations →
                                </Link>

                                <div className="space-y-3">
                                    <div className="text-[9px] font-bold text-zinc-400 uppercase tracking-wider px-3">Top Cities - SEO</div>
                                    <div className="grid grid-cols-2 gap-1">
                                        {['new-york', 'los-angeles', 'chicago', 'houston', 'miami', 'boston', 'seattle', 'denver', 'austin', 'dallas'].map(city => (
                                            <Link
                                                key={`seo-${city}`}
                                                href={`/local/seo/plumber/${city}`}
                                                className="px-3 py-1.5 hover:bg-zinc-100 rounded-lg transition-colors text-xs text-zinc-700 hover:text-blue-600"
                                            >
                                                {city.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}
                                            </Link>
                                        ))}
                                    </div>

                                    <div className="text-[9px] font-bold text-zinc-400 uppercase tracking-wider px-3 pt-2 border-t border-zinc-200">Top Cities - Web Design</div>
                                    <div className="grid grid-cols-2 gap-1">
                                        {['new-york', 'los-angeles', 'chicago', 'houston', 'miami', 'boston', 'seattle', 'denver', 'austin', 'dallas'].map(city => (
                                            <Link
                                                key={`web-${city}`}
                                                href={`/local/website-design/dentist/${city}`}
                                                className="px-3 py-1.5 hover:bg-zinc-100rounded-lg transition-colors text-xs text-zinc-700 hover:text-blue-600"
                                            >
                                                {city.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </div>

                    <Link href="/design" className="text-zinc-600 hover:text-zinc-900 transition-colors">Graphic Design</Link>
                    <Link href="/contact" className="text-zinc-600 hover:text-zinc-900 transition-colors">Contact</Link>
                </div>
                <Link href="/contact">
                    <Button size="sm" className="hidden md:block">Start Your Project</Button>
                </Link>
            </div>
        </nav>
    );
};
