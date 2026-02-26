import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Beaker, ShieldCheck, Droplets, Leaf } from "lucide-react";

export const metadata = {
    title: "Why K-Beauty? | KSerene",
    description: "Discover why authentic Korean skincare is fundamentally different from traditional Western approaches. Focus on barrier repair, hydration, and gentle efficacy.",
};

export default function WhyKoreanSkincare() {
    return (
        <div className="bg-background min-h-screen pb-20 overflow-hidden">

            {/* Hero Header */}
            <section className="relative w-full min-h-[60vh] flex flex-col items-center justify-center border-b border-foreground/10 px-4">
                <div className="absolute inset-0 bg-foreground text-background">
                    <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-background/30 via-foreground to-foreground"></div>
                </div>

                <div className="relative z-10 text-center max-w-4xl mx-auto space-y-8 animate-fade-in-up mt-20">
                    <div className="text-xs uppercase tracking-[0.4em] font-medium text-background/60 border-b border-background/20 pb-2 inline-block">
                        Education
                    </div>
                    <h1 className="text-5xl md:text-7xl font-medium tracking-tighter text-white">
                        Beyond the <span className="italic font-light text-white/70">Surface.</span>
                    </h1>
                    <p className="text-lg md:text-xl text-background/80 font-light leading-relaxed max-w-2xl mx-auto">
                        Why the world is leaving traditional harsh actives behind in favor of the Korean philosophy of barrier-first hydration.
                    </p>
                </div>
            </section>

            {/* Intro Text */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center space-y-8">
                <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-foreground">A Fundamental Shift in Skincare</h2>
                <p className="text-foreground/70 font-light text-lg md:text-xl leading-relaxed">
                    For decades, traditional Western skincare focused on aggressive correction—stripping the skin with harsh acids, physical scrubs, and high-percentage retinoids to force cellular turnover. The result? A compromised skin barrier, chronic inflammation, and paradoxical breakouts.
                </p>
                <p className="text-foreground/70 font-light text-lg md:text-xl leading-relaxed">
                    Korean skincare (K-Beauty) was born from a completely different mindset: <strong className="font-medium text-foreground">Prevention, Hydration, and Barrier Repair.</strong> Instead of fighting your skin, K-Beauty nourishes it.
                </p>
            </section>

            {/* Comparison Grid */}
            <section className="py-16 border-y border-accent-mid bg-accent-light/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border border-foreground/10">

                        {/* Traditional Side */}
                        <div className="flex flex-col p-12 lg:p-16 border-b lg:border-b-0 lg:border-r border-foreground/10 bg-white">
                            <h3 className="text-2xl font-medium tracking-tight text-foreground mb-8">Traditional Approach</h3>
                            <ul className="space-y-6">
                                <li className="flex items-start">
                                    <span className="text-red-500 mr-4 font-bold">✕</span>
                                    <div>
                                        <h4 className="font-medium text-foreground mb-1">Eradication</h4>
                                        <p className="text-sm text-foreground/60 leading-relaxed font-light">Focuses on "burning off" problems with high-strength, irritating acids (like 10% benzoyl peroxide).</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-red-500 mr-4 font-bold">✕</span>
                                    <div>
                                        <h4 className="font-medium text-foreground mb-1">Instant, Harsh Results</h4>
                                        <p className="text-sm text-foreground/60 leading-relaxed font-light">Prioritizes immediate visual changes over long-term cellular health, leading to sensitivity.</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-red-500 mr-4 font-bold">✕</span>
                                    <div>
                                        <h4 className="font-medium text-foreground mb-1">Stripping Cleansers</h4>
                                        <p className="text-sm text-foreground/60 leading-relaxed font-light">Uses high-pH foaming cleansers that leave the skin feeling "squeaky clean" (which means the acid mantle is destroyed).</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-red-500 mr-4 font-bold">✕</span>
                                    <div>
                                        <h4 className="font-medium text-foreground mb-1">Heavy, Occlusive Creams</h4>
                                        <p className="text-sm text-foreground/60 leading-relaxed font-light">Relies on thick, pore-clogging bases rather than layered, lightweight hydration.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        {/* K-Beauty Side */}
                        <div className="flex flex-col p-12 lg:p-16 bg-foreground text-background">
                            <h3 className="text-2xl font-medium tracking-tight mb-8">The K-Beauty Philosophy</h3>
                            <ul className="space-y-6">
                                <li className="flex items-start">
                                    <span className="text-accent-light mr-4 font-bold">✓</span>
                                    <div>
                                        <h4 className="font-medium mb-1">Nourishment & Repair</h4>
                                        <p className="text-sm text-background/60 leading-relaxed font-light">Uses gentle, natural extracts (Centella Asiatica, Snail Mucin, Propolis) to soothe and heal.</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-accent-light mr-4 font-bold">✓</span>
                                    <div>
                                        <h4 className="font-medium mb-1">Long-Term Resilience</h4>
                                        <p className="text-sm text-background/60 leading-relaxed font-light">Focuses on fortifying the skin's lipid barrier so it can protect itself naturally.</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-accent-light mr-4 font-bold">✓</span>
                                    <div>
                                        <h4 className="font-medium mb-1">pH Balance</h4>
                                        <p className="text-sm text-background/60 leading-relaxed font-light">Utilizes low-pH, gentle cleansers that remove impurities while leaving natural oils intact.</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-accent-light mr-4 font-bold">✓</span>
                                    <div>
                                        <h4 className="font-medium mb-1">Layered Hydration</h4>
                                        <p className="text-sm text-background/60 leading-relaxed font-light">Builds moisture through lightweight toners, essences, and ampoules rather than one heavy cream.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </section>

            {/* Key Ingredients Spotlight */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="text-center mb-16 space-y-4">
                    <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-foreground/50">Innovation</span>
                    <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-foreground">Ingredients You Won't Find Elsewhere.</h2>
                    <p className="text-foreground/70 font-light max-w-2xl mx-auto text-lg pt-4">
                        South Korea leads the world in skincare R&D, utilizing hyper-effective ingredients centuries ahead of the Western market.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

                    <div className="border border-foreground/10 p-8 hover:bg-foreground hover:text-background group transition-colors duration-500">
                        <Leaf className="w-8 h-8 stroke-[1.5] mb-6 text-foreground group-hover:text-background" />
                        <h3 className="text-lg font-medium tracking-tight mb-2">Centella Asiatica (Cica)</h3>
                        <p className="text-sm text-foreground/60 group-hover:text-background/70 font-light leading-relaxed">
                            Known as "tiger grass", this powerful herb instantly calms redness, severe inflammation, and repairs compromised skin barriers.
                        </p>
                    </div>

                    <div className="border border-foreground/10 p-8 hover:bg-foreground hover:text-background group transition-colors duration-500">
                        <Droplets className="w-8 h-8 stroke-[1.5] mb-6 text-foreground group-hover:text-background" />
                        <h3 className="text-lg font-medium tracking-tight mb-2">Snail Mucin</h3>
                        <p className="text-sm text-foreground/60 group-hover:text-background/70 font-light leading-relaxed">
                            A hyper-hydrating, glow-inducing powerhouse packed with glycoproteins and hyaluronic acid to fade hyperpigmentation.
                        </p>
                    </div>

                    <div className="border border-foreground/10 p-8 hover:bg-foreground hover:text-background group transition-colors duration-500">
                        <Beaker className="w-8 h-8 stroke-[1.5] mb-6 text-foreground group-hover:text-background" />
                        <h3 className="text-lg font-medium tracking-tight mb-2">Galactomyces</h3>
                        <p className="text-sm text-foreground/60 group-hover:text-background/70 font-light leading-relaxed">
                            A fermented yeast extract that absorbs instantly, shrinking pore appearance and delivering a glass-skin level of radiance.
                        </p>
                    </div>

                    <div className="border border-foreground/10 p-8 hover:bg-foreground hover:text-background group transition-colors duration-500">
                        <ShieldCheck className="w-8 h-8 stroke-[1.5] mb-6 text-foreground group-hover:text-background" />
                        <h3 className="text-lg font-medium tracking-tight mb-2">Ginseng Root</h3>
                        <p className="text-sm text-foreground/60 group-hover:text-background/70 font-light leading-relaxed">
                            An ancient antioxidant that boosts blood circulation, tightens the skin, and protects against environmental oxidative stress.
                        </p>
                    </div>

                </div>
            </section>

            {/* CTA */}
            <section className="py-24 border-t border-accent-mid text-center">
                <h2 className="text-4xl font-medium tracking-tight text-foreground mb-8">Ready to transform your routine?</h2>
                <Link
                    href="/shop"
                    className="group inline-flex items-center justify-center px-12 py-5 text-sm uppercase tracking-widest font-medium bg-foreground text-background hover:bg-black/80 transition-all duration-500"
                >
                    Explore Authentic K-Beauty
                    <ArrowRight className="ml-4 w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
                </Link>
            </section>

        </div>
    );
}
