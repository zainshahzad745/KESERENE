import Image from "next/image";
import Link from "next/link";
import { Heart, Sparkles, Leaf } from "lucide-react";

export default function AboutPage() {
    return (
        <div className="bg-background min-h-screen py-10 md:py-20 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">

                {/* Intro Section */}
                <section className="flex flex-col md:flex-row gap-12 lg:gap-20 items-center">
                    <div className="w-full md:w-1/2 flex flex-col items-start space-y-6">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-foreground tracking-wide leading-tight">
                            Rooted in Nature,<br />Crafted for You.
                        </h1>
                        <p className="text-foreground/80 leading-relaxed font-light text-lg">
                            KSerene was born from a simple belief: accessing authentic, transformative skincare shouldn't be difficult. Drawing from centuries of Korean herbal traditions and the latest in gentle green science, we curate and source the highest quality K-Beauty products directly to Pakistan.
                        </p>
                        <p className="text-foreground/80 leading-relaxed font-light text-lg">
                            Every product we offer is a testament to mindful living—meticulously vetted for minimum fillers, maximum efficacy, and an unwavering commitment to genuine results for your skin barrier.
                        </p>
                    </div>

                    <div className="w-full md:w-1/2 relative aspect-[4/5] sm:aspect-square lg:aspect-[4/5] rounded-[2rem] overflow-hidden shadow-sm">
                        <Image
                            src="/images/hero.png"
                            alt="Soft natural skincare aesthetic"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-accent-light/10 mix-blend-multiply"></div>
                    </div>
                </section>

                {/* Founder Note */}
                <section className="bg-accent-light/20 rounded-[3rem] p-10 md:p-16 lg:p-24 relative overflow-hidden border border-accent-light/30 text-center">
                    <div className="max-w-3xl mx-auto relative z-10 space-y-8">
                        <h2 className="text-3xl font-serif text-foreground tracking-wide">A Note From the Founder</h2>
                        <div className="w-12 h-px bg-accent-dark mx-auto"></div>
                        <p className="text-xl md:text-2xl text-foreground font-light leading-relaxed font-serif italic">
                            "I started this journey because I couldn't easily find authentic Korean skincare that spoke to the calm, gentle care I craved. KSerene is an invitation to experience true K-Beauty, delivered straight to your door with trust and transparency."
                        </p>
                        <p className="text-sm tracking-widest uppercase font-medium text-accent-dark">
                            — ALIZA AZAM, Founder
                        </p>
                    </div>
                </section>

                {/* Values */}
                <section className="pb-10">
                    <div className="text-center mb-16 space-y-4">
                        <h2 className="text-3xl md:text-4xl font-serif text-foreground tracking-wide">Our Principles</h2>
                        <p className="text-foreground/70 font-light max-w-2xl mx-auto">
                            We hold ourselves to the highest standards of transparency and care.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">

                        <div className="bg-white rounded-3xl p-10 border border-accent-light/30 shadow-[0_4px_24px_rgba(0,0,0,0.02)] flex flex-col items-center text-center space-y-6 hover:-translate-y-2 transition-transform duration-500">
                            <div className="w-16 h-16 bg-accent-light/30 rounded-full flex items-center justify-center text-accent-dark">
                                <Leaf className="w-8 h-8 stroke-[1.5]" />
                            </div>
                            <h3 className="text-xl font-serif text-foreground tracking-wide">Authentic Sourcing</h3>
                            <p className="text-foreground/70 font-light text-sm leading-relaxed">
                                We guarantee the authenticity of every product. Sourced directly from trusted distributors to ensure you receive genuine Korean formulas.
                            </p>
                        </div>

                        <div className="bg-white rounded-3xl p-10 border border-accent-light/30 shadow-[0_4px_24px_rgba(0,0,0,0.02)] flex flex-col items-center text-center space-y-6 hover:-translate-y-2 transition-transform duration-500">
                            <div className="w-16 h-16 bg-accent-light/30 rounded-full flex items-center justify-center text-accent-dark">
                                <Sparkles className="w-8 h-8 stroke-[1.5]" />
                            </div>
                            <h3 className="text-xl font-serif text-foreground tracking-wide">Curated Purity</h3>
                            <p className="text-foreground/70 font-light text-sm leading-relaxed">
                                We say no to harsh sulfates, parabens, and hidden fillers. We handpick items that contain concentrated active ingredients your skin instantly recognizes.
                            </p>
                        </div>

                        <div className="bg-white rounded-3xl p-10 border border-accent-light/30 shadow-[0_4px_24px_rgba(0,0,0,0.02)] flex flex-col items-center text-center space-y-6 hover:-translate-y-2 transition-transform duration-500">
                            <div className="w-16 h-16 bg-accent-light/30 rounded-full flex items-center justify-center text-accent-dark">
                                <Heart className="w-8 h-8 stroke-[1.5]" />
                            </div>
                            <h3 className="text-xl font-serif text-foreground tracking-wide">Barrier Focus</h3>
                            <p className="text-foreground/70 font-light text-sm leading-relaxed">
                                Skincare should never sting. We focus entirely on products that prioritize barrier repair and deeply soothing components for sensitive skin.
                            </p>
                        </div>

                    </div>
                </section>

                {/* Closing CTA */}
                <section className="text-center pb-12">
                    <Link
                        href="/shop"
                        className="inline-flex items-center justify-center px-10 py-4 bg-accent-dark text-white rounded-xl font-medium tracking-wide text-lg hover:bg-foreground transition-all duration-300 shadow-sm"
                    >
                        Discover the Collection
                    </Link>
                </section>

            </div>
        </div>
    );
}
