import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export const Footer = () => {
    return (
        <footer className="py-20 px-6 bg-black text-white border-t border-zinc-900">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    <div className="space-y-6">
                        <Link href="/" className="relative h-12 w-40 block">
                            <Image
                                src="/darkbg.png"
                                alt="Agencey Logo"
                                fill
                                className="object-contain"
                            />
                        </Link>
                        <p className="text-zinc-500 text-sm leading-relaxed max-w-xs">
                            Our elite team of designers, engineers, and growth strategists works as a unified unit to build high-performance digital systems that drive measurable business scale.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-bold mb-6 uppercase tracking-widest text-xs text-zinc-600">Solutions</h4>
                        <div className="flex flex-col gap-4 text-sm text-zinc-500">
                            <Link href="/webflow" className="hover:text-white transition-colors">Webflow Engineering</Link>
                            <Link href="/wordpress" className="hover:text-white transition-colors">WordPress Orchestration</Link>
                            <Link href="/shopify" className="hover:text-white transition-colors">Commerce Design</Link>
                            <Link href="/custom" className="hover:text-white transition-colors">Bespoke Verticality</Link>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold mb-6 uppercase tracking-widest text-xs text-zinc-600">Company</h4>
                        <div className="flex flex-col gap-4 text-sm text-zinc-500">
                            <Link href="/contact" className="hover:text-white transition-colors">Consultation</Link>
                            <Link href="/design" className="hover:text-white transition-colors">Graphic Design</Link>
                            <Link href="/seo" className="hover:text-white transition-colors">SEO Performance</Link>
                            <Link href="/social-media" className="hover:text-white transition-colors">Growth Systems</Link>
                            <Link href="/locations" className="hover:text-white transition-colors">Locations</Link>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold mb-6 uppercase tracking-widest text-xs text-zinc-600">Impact</h4>
                        <p className="text-zinc-500 text-sm leading-relaxed">
                            Transforming market demand into predictable revenue through technical excellence and radical focus.
                        </p>
                    </div>
                </div>

                <div className="pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-zinc-700 font-bold uppercase tracking-widest">
                    <div>© 2026 Agencey. All Rights Reserved.</div>
                    <div className="flex gap-8">
                        <Link href="#" className="hover:text-zinc-500 transition-colors">Privacy</Link>
                        <Link href="#" className="hover:text-zinc-500 transition-colors">Terms</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};
