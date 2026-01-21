import { industries, locations } from "@/data/pseo";
import { notFound } from "next/navigation";
import Link from "next/link";
import { HeroBackground } from "@/components/ui/HeroBackground";

interface PageProps {
    params: Promise<{
        industry: string;
        location: string;
    }>;
}

export async function generateStaticParams() {
    const params = [];
    for (const industry of industries) {
        for (const location of locations) {
            params.push({
                industry: industry.slug,
                location: location.slug,
            });
        }
    }
    return params;
}

export async function generateMetadata({ params }: PageProps) {
    const resolvedParams = await params;
    const industry = industries.find((i) => i.slug === resolvedParams.industry);
    const location = locations.find((l) => l.slug === resolvedParams.location);

    if (!industry || !location) {
        return {
            title: "Service Not Found",
        };
    }

    const title = `Website Design for ${industry.name} in ${location.name}`;
    const description = `Helping ${industry.name.toLowerCase()} businesses in ${location.name} grow with high-converting, professional websites. Expert web design and marketing services.`;

    return {
        title,
        description,
        alternates: {
            canonical: `/services/${industry.slug}/${location.slug}`
        },
        openGraph: {
            title,
            description,
            url: `https://agencey.pro/services/${industry.slug}/${location.slug}`,
            type: "website",
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
        },
    };
}

export default async function ServiceLocationPage({ params }: PageProps) {
    const resolvedParams = await params;
    const industry = industries.find((i) => i.slug === resolvedParams.industry);
    const location = locations.find((l) => l.slug === resolvedParams.location);

    if (!industry || !location) {
        notFound();
    }

    return (
        <div className="flex min-h-screen flex-col items-center bg-black font-sans text-white">
            <main className="relative flex w-full max-w-4xl flex-col items-center py-20 pt-32 px-6 sm:px-16 overflow-hidden">
                <HeroBackground backgroundImage="/team.jpg" className="!fixed h-screen" />
                <header className="mb-12 text-center sm:text-left w-full relative z-10">
                    <h1 className="text-4xl font-bold tracking-tight text-white mb-4 sm:text-5xl">
                        Website Design for {industry.name} in {location.name}
                    </h1>
                    <p className="text-xl text-zinc-400 max-w-2xl">
                        Helping {industry.name.toLowerCase()} businesses in {location.name} grow with high-converting, professional websites.
                    </p>
                </header>

                <section className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full mb-16 relative z-10">
                    <div className="flex flex-col gap-6">
                        <h2 className="text-2xl font-semibold text-white">
                            Why Your Business Needs a Professional Website
                        </h2>
                        <p className="text-zinc-400 leading-relaxed">
                            In {location.name}, competition for {industry.name.toLowerCase()} is fierce. A slow, outdated website is costing you customers every day. We specialize in creating custom designs that not only look beautiful but are optimized for speed and conversion.
                        </p>
                        <ul className="flex flex-col gap-3 text-zinc-400">
                            <li className="flex items-center gap-2">
                                <span className="text-green-500">✓</span> Mobile-Responsive Design
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="text-green-500">✓</span> Local SEO Optimization
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="text-green-500">✓</span> Fast Loading Speeds
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="text-green-500">✓</span> High-Converting Layouts
                            </li>
                        </ul>
                    </div>
                    <div className="bg-zinc-900 rounded-2xl flex items-center justify-center p-8 min-h-[300px] border border-zinc-800">
                        <div className="text-center">
                            <p className="text-sm font-medium text-zinc-500 uppercase tracking-widest mb-2">Featured Project</p>
                            <p className="text-xl font-semibold text-white">Local Success Story</p>
                        </div>
                    </div>
                </section>

                <section className="w-full bg-zinc-950 text-white p-12 rounded-3xl text-center flex flex-col items-center gap-8 relative z-10 border border-zinc-800">
                    <h2 className="text-3xl font-bold">Ready to Grow Your Business in {location.name}?</h2>
                    <p className="text-zinc-400 max-w-md">
                        Get a free audit of your current digital presence or a custom quote for your new project.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <button className="h-12 px-8 bg-white text-black rounded-full font-semibold hover:bg-zinc-200 transition-colors">
                            Get a Custom Quote
                        </button>
                        <button className="h-12 px-8 border border-zinc-700 rounded-full font-semibold hover:bg-zinc-800 transition-colors">
                            Check Our Process
                        </button>
                    </div>
                </section>
            </main>
        </div>
    );
}
