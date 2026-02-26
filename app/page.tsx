import Image from "next/image";
import Link from "next/link";
import ProductCard from "@/components/product/ProductCard";
import ParticleBackground from "@/components/ui/ParticleBackground";
import Marquee from "@/components/ui/Marquee";
import { Leaf, Droplets, Sparkles, ArrowRight } from "lucide-react";

const FEATURED_PRODUCTS = [
  { id: "1", name: "Radiant Essence Serum", price: 4500, image: "/images/product-1.png", category: "Serum" },
  { id: "2", name: "Deep Moisture Cream", price: 3200, image: "/images/product-2.png", category: "Moisturizer" },
  { id: "3", name: "Calming Green Tea Toner", price: 2800, image: "/images/product-1.png", category: "Toner" },
  { id: "4", name: "Gentle Matcha Cleanser", price: 2100, image: "/images/product-2.png", category: "Cleanser" }
];

export default function Home() {
  return (
    <div className="flex flex-col w-full pb-20 overflow-hidden">

      {/* Hero Section - Particle Background Edit */}
      <section className="relative w-full min-h-[90vh] flex flex-col items-center justify-center bg-background px-4 overflow-hidden">

        <ParticleBackground />

        <div className="relative z-10 text-center max-w-5xl mx-auto flex flex-col items-center space-y-12 animate-fade-in-up mt-20">
          <div className="text-xs uppercase tracking-[0.3em] font-medium text-foreground/50 border-b border-foreground/10 pb-2">
            The Essentials Collection
          </div>

          <h1 className="text-7xl md:text-9xl font-medium tracking-tighter text-foreground leading-[0.9]">
            RADICAL<br />
            <span className="italic font-light text-foreground/70">PURITY</span>
          </h1>

          <p className="text-lg md:text-2xl text-foreground/60 max-w-2xl font-light leading-relaxed tracking-wide">
            A brutalist approach to botanical skincare. Distilled to focus only on what shifts the skin.
          </p>

          <div className="pt-8">
            <Link
              href="/shop"
              className="group inline-flex items-center justify-center px-12 py-5 text-sm uppercase tracking-widest font-medium bg-foreground text-background hover:bg-black/80 transition-all duration-500"
            >
              Shop All
              <ArrowRight className="ml-4 w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </section>

      <Marquee text="AUTHENTIC K-BEAUTY • DIRECT TO PAKISTAN • MINIMALIST ROUTINE • EXPERTLY CURATED • CRUELTY-FREE • RADIANT GLOW" />

      {/* Brand Values Strip - Stark and Grid-based */}
      <section className="py-24 border-t border-accent-mid mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 divide-y md:divide-y-0 md:divide-x divide-accent-mid border border-accent-mid">

            <div className="flex flex-col p-12 lg:p-16 space-y-8 bg-white group hover:bg-accent-light transition-colors duration-500">
              <Leaf className="w-8 h-8 stroke-[1.5] text-foreground" />
              <div>
                <h3 className="text-2xl font-medium tracking-tight text-foreground mb-4">Authentic Origins</h3>
                <p className="text-foreground/60 text-base font-light leading-relaxed">
                  Sourced directly from South Korea, guaranteeing 100% genuine products for your peace of mind.
                </p>
              </div>
            </div>

            <div className="flex flex-col p-12 lg:p-16 space-y-8 bg-white group hover:bg-accent-light transition-colors duration-500">
              <Droplets className="w-8 h-8 stroke-[1.5] text-foreground" />
              <div>
                <h3 className="text-2xl font-medium tracking-tight text-foreground mb-4">Deep Infusion</h3>
                <p className="text-foreground/60 text-base font-light leading-relaxed">
                  Multi-molecular hydration layers that penetrate deeply and bind moisture instantly.
                </p>
              </div>
            </div>

            <div className="flex flex-col p-12 lg:p-16 space-y-8 bg-white group hover:bg-accent-light transition-colors duration-500">
              <Sparkles className="w-8 h-8 stroke-[1.5] text-foreground" />
              <div>
                <h3 className="text-2xl font-medium tracking-tight text-foreground mb-4">Visible Clarity</h3>
                <p className="text-foreground/60 text-base font-light leading-relaxed">
                  Targeted, gentle actives that strengthen the skin barrier and restore natural luminosity.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 space-y-6 md:space-y-0">
            <div>
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-foreground/50 mb-3 block">Curated</span>
              <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-foreground">Community Favorites</h2>
            </div>
            <Link
              href="/shop"
              className="text-sm uppercase tracking-widest font-semibold border-b border-foreground pb-1 hover:text-foreground/60 transition-colors"
            >
              View All
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {FEATURED_PRODUCTS.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section - Split Typographic */}
      <section className="py-24 border-t border-accent-mid bg-foreground text-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-8">Authentic K-Beauty.</h2>
              <p className="text-background/70 text-lg font-light leading-relaxed mb-6">
                You shouldn't have to navigate a maze of counterfeits or complex customs to get the skincare your skin deserves.
              </p>
              <p className="text-background/70 text-lg font-light leading-relaxed">
                KSerene bridges the gap between Pakistan and the heart of Korean skincare. We meticulously curate, vet, and import only the most effective, genuine products focused on barrier health and gentle radiance.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square bg-background/5 border border-background/10 p-8 flex flex-col justify-end group hover:bg-background/10 transition-colors">
                <span className="text-4xl font-light mb-auto">01</span>
                <span className="text-sm uppercase tracking-widest font-semibold">Source</span>
              </div>
              <div className="aspect-square bg-background/5 border border-background/10 p-8 flex flex-col justify-end group hover:bg-background/10 transition-colors">
                <span className="text-4xl font-light mb-auto">02</span>
                <span className="text-sm uppercase tracking-widest font-semibold">Vet</span>
              </div>
              <div className="aspect-square bg-background/5 border border-background/10 p-8 flex flex-col justify-end group hover:bg-background/10 transition-colors">
                <span className="text-4xl font-light mb-auto">03</span>
                <span className="text-sm uppercase tracking-widest font-semibold">Import</span>
              </div>
              <div className="aspect-square bg-background/5 border border-background/10 p-8 flex flex-col justify-end group hover:bg-background/10 transition-colors">
                <span className="text-4xl font-light mb-auto">04</span>
                <span className="text-sm uppercase tracking-widest font-semibold">Deliver</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Ritual Section */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-foreground/50 mb-4 block">The Ritual</span>
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-foreground mb-20">Three Steps. Infinite Glow.</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            <div className="absolute top-[30%] left-0 w-full h-[1px] bg-foreground/10 hidden md:block z-0"></div>

            <div className="relative z-10 flex flex-col items-center group">
              <div className="w-20 h-20 bg-background border border-foreground flex items-center justify-center rounded-full mb-8 group-hover:bg-foreground group-hover:text-background transition-colors duration-500">
                <span className="text-xl font-medium">1</span>
              </div>
              <h3 className="text-xl font-medium tracking-tight mb-4">Purify</h3>
              <p className="text-foreground/60 text-sm font-light leading-relaxed max-w-xs">Melt away impurities without stripping essential moisture using our gentle cleansers.</p>
            </div>

            <div className="relative z-10 flex flex-col items-center group">
              <div className="w-20 h-20 bg-background border border-foreground flex items-center justify-center rounded-full mb-8 group-hover:bg-foreground group-hover:text-background transition-colors duration-500">
                <span className="text-xl font-medium">2</span>
              </div>
              <h3 className="text-xl font-medium tracking-tight mb-4">Prep & Treat</h3>
              <p className="text-foreground/60 text-sm font-light leading-relaxed max-w-xs">Balance pH and infuse deep hydration with concentrated toners and serums.</p>
            </div>

            <div className="relative z-10 flex flex-col items-center group">
              <div className="w-20 h-20 bg-background border border-foreground flex items-center justify-center rounded-full mb-8 group-hover:bg-foreground group-hover:text-background transition-colors duration-500">
                <span className="text-xl font-medium">3</span>
              </div>
              <h3 className="text-xl font-medium tracking-tight mb-4">Seal</h3>
              <p className="text-foreground/60 text-sm font-light leading-relaxed max-w-xs">Lock in the active ingredients with a ceramide-rich moisturizer to fortify your barrier.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section - Ultra Minimal */}
      <section className="py-32 border-t border-accent-mid mx-4 sm:mx-6 lg:mx-8 mb-8">
        <div className="max-w-3xl mx-auto text-center px-4 space-y-12">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-6xl font-medium tracking-tighter text-foreground">Join KSerene</h2>
            <p className="text-foreground/50 text-xl font-light leading-relaxed max-w-xl mx-auto">
              Subscribe for early access to new drops, exclusive insights, and 10% off your first order.
            </p>
          </div>
          <form className="mt-12 sm:flex sm:max-w-xl sm:mx-auto border-b border-foreground pb-2 group">
            <label htmlFor="email-address" className="sr-only">Email address</label>
            <input
              type="email"
              name="email-address"
              id="email-address"
              autoComplete="email"
              required
              className="w-full min-w-0 px-0 py-4 text-xl md:text-2xl text-foreground placeholder-foreground/20 bg-transparent border-none focus:outline-none focus:ring-0 transition-all font-light"
              placeholder="Enter your email"
            />
            <div className="mt-4 sm:mt-0 sm:ml-auto flex items-center justify-end">
              <button
                type="submit"
                className="group-focus-within:text-foreground text-foreground/40 font-medium tracking-widest uppercase text-sm px-4 py-2 hover:text-foreground transition-colors"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>

    </div>
  );
}
