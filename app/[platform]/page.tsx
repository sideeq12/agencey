import { platforms } from "@/data/pseo";
import { notFound } from "next/navigation";
import Image from "next/image";

interface PageProps {
    params: Promise<{
        platform: string;
    }>;
}

export async function generateStaticParams() {
    return platforms.map((p) => ({
        platform: p.slug,
    }));
}

export default async function PlatformPage({ params }: PageProps) {
    const resolvedParams = await params;
    const platform = platforms.find((p) => p.slug === resolvedParams.platform);

    if (!platform) {
        notFound();
    }

    return (
        <div className="flex min-h-screen flex-col items-center bg-black font-sans text-white">
            <main className="flex w-full max-w-4xl flex-col items-center py-20 pt-32 px-6 sm:px-16">
                <header className="mb-12 text-center sm:text-left w-full">
                    <div className="inline-block px-3 py-1 rounded-full bg-zinc-800 text-xs font-bold uppercase tracking-widest mb-4">
                        Platform Specialist
                    </div>
                    <h1 className="text-4xl font-bold tracking-tight text-white mb-4 sm:text-5xl">
                        World-Class {platform.name} Website Development
                    </h1>
                    <p className="text-xl text-zinc-400 max-w-2xl">
                        Custom, high-performance {platform.name} solutions tailored for your business needs.
                    </p>
                </header>

                <section className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full mb-16">
                    <div className="flex flex-col gap-6">
                        <h2 className="text-2xl font-semibold text-white">
                            Why Choose {platform.name}?
                        </h2>
                        <p className="text-zinc-400 leading-relaxed">
                            We leverage the full power of {platform.name} to deliver websites that are easy to manage, incredibly fast, and built to scale. Our developers are experts in custom {platform.name} implementations.
                        </p>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="p-4 bg-zinc-900 rounded-xl border border-zinc-800">
                                <p className="font-bold text-white">Custom Design</p>
                                <p className="text-sm text-zinc-500">No generic templates.</p>
                            </div>
                            <div className="p-4 bg-zinc-900 rounded-xl border border-zinc-800">
                                <p className="font-bold text-white">SEO Ready</p>
                                <p className="text-sm text-zinc-500">Optimized for Google.</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-zinc-900 rounded-2xl flex items-center justify-center p-8 min-h-[300px] border border-zinc-800">
                        <Image
                            className="invert opacity-20"
                            src="/next.svg"
                            alt="Logo placeholder"
                            width={150}
                            height={30}
                        />
                    </div>
                </section>

                <section className="w-full bg-zinc-950 text-white p-12 rounded-3xl text-center flex flex-col items-center gap-8">
                    <h2 className="text-3xl font-bold">Ready to build on {platform.name}?</h2>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <button className="h-12 px-8 bg-white text-black rounded-full font-semibold hover:bg-zinc-200 transition-colors">
                            Get a {platform.name} Quote
                        </button>
                        <button className="h-12 px-8 border border-zinc-700 rounded-full font-semibold hover:bg-zinc-800 transition-colors">
                            See Sample Projects
                        </button>
                    </div>
                </section>
            </main>
        </div>
    );
}
