"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ProductCard from "@/components/product/ProductCard";
import { useCartStore } from "@/store/cartStore";

// Mock Data
const PRODUCTS = [
    { id: "1", name: "Radiant Essence Serum", price: 4500, image: "/images/product-1.png", category: "Serum" },
    { id: "2", name: "Deep Moisture Cream", price: 3200, image: "/images/product-2.png", category: "Moisturizer" },
    { id: "3", name: "Calming Green Tea Toner", price: 2800, image: "/images/product-1.png", category: "Toner" },
    { id: "4", name: "Gentle Matcha Cleanser", price: 2100, image: "/images/product-2.png", category: "Cleanser" },
];

export default function ProductDetail({ params }: { params: { id: string } }) {
    const [quantity, setQuantity] = useState(1);
    const addItem = useCartStore(state => state.addItem);

    // Find product or fallback to the first one for demonstration
    const product = PRODUCTS.find(p => p.id === params.id) || PRODUCTS[0];

    const relatedProducts = PRODUCTS.filter(p => p.id !== product.id).slice(0, 4);

    return (
        <div className="bg-background min-h-screen py-10 md:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Product Section */}
                <div className="flex flex-col md:flex-row gap-12 lg:gap-20">

                    {/* Product Image Gallery */}
                    <div className="w-full md:w-1/2 flex flex-col space-y-4 animate-fade-in-up">
                        <div className="relative aspect-[4/5] w-full overflow-hidden bg-accent-light/10 border border-foreground/10">
                            <Image
                                src={product.image}
                                alt={product.name}
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                        {/* Thumbnail Placeholder */}
                        <div className="flex space-x-4 overflow-x-auto pb-2 scrollbar-hide">
                            {[1, 2, 3].map((thumb) => (
                                <div key={thumb} className="relative w-24 h-24 overflow-hidden border border-foreground/10 cursor-pointer opacity-60 hover:opacity-100 transition-opacity duration-300 flex-shrink-0">
                                    <Image
                                        src={product.image}
                                        alt={`Thumbnail ${thumb}`}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Product Info */}
                    <div className="w-full md:w-1/2 flex flex-col pt-4 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
                        <nav className="text-xs font-semibold tracking-[0.2em] uppercase text-foreground/50 mb-6 flex space-x-3 items-center">
                            <Link href="/shop" className="hover:text-foreground transition-colors">Shop</Link>
                            <span className="text-foreground/30">/</span>
                            <span className="text-foreground">{product.category}</span>
                        </nav>

                        <h1 className="text-4xl lg:text-5xl font-medium tracking-tight leading-[1.1] mb-6">
                            {product.name}
                        </h1>

                        <div className="flex items-baseline space-x-4 mb-8">
                            <p className="text-2xl font-light text-foreground">
                                Rs. {product.price.toLocaleString()}
                            </p>
                        </div>

                        <p className="text-foreground/80 leading-relaxed max-w-lg mb-12 font-light text-lg">
                            A light, refreshing formula designed to restore your skin&apos;s natural balance.
                            Infused with traditional Korean botanical extracts, it penetrates deeply to deliver
                            intense hydration without feeling heavy or greasy. Perfect for daily use to maintain
                            a healthy, radiant complexion.
                        </p>

                        {/* Quantity & Add to Cart */}
                        <div className="flex flex-col space-y-6 mb-16 pt-8 border-t border-foreground/10">
                            <div className="flex items-center justify-between">
                                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground/60">Quantity</span>
                                <div className="flex items-center border border-foreground/20 bg-transparent">
                                    <button
                                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                        className="w-12 py-2 text-foreground/70 hover:bg-foreground hover:text-background transition-colors flex items-center justify-center"
                                    >
                                        -
                                    </button>
                                    <span className="px-2 min-w-[3rem] text-center font-medium">{quantity}</span>
                                    <button
                                        onClick={() => setQuantity(quantity + 1)}
                                        className="w-12 py-2 text-foreground/70 hover:bg-foreground hover:text-background transition-colors flex items-center justify-center"
                                    >
                                        +
                                    </button>
                                </div>
                            </div>
                            <button
                                onClick={() => {
                                    addItem({
                                        id: product.id,
                                        name: product.name,
                                        price: product.price,
                                        image: product.image,
                                        quantity
                                    });
                                }}
                                className="w-full py-4 bg-foreground text-background font-medium tracking-[0.2em] uppercase text-sm hover:bg-black/80 transition-all duration-300">
                                Add to Cart
                            </button>
                        </div>

                        {/* Highlights Sections */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-foreground/10">
                            <div>
                                <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground mb-4">
                                    Ingredients
                                </h3>
                                <ul className="space-y-3 text-foreground/70 text-sm font-light">
                                    <li className="flex items-start">
                                        <span className="text-foreground mr-2">-</span>
                                        <span><strong className="font-medium text-foreground">Centella Asiatica</strong><br />Soothes irritation and promotes healing</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-foreground mr-2">-</span>
                                        <span><strong className="font-medium text-foreground">Hyaluronic Acid</strong><br />Retains moisture for plump skin</span>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground mb-4">
                                    How To Use
                                </h3>
                                <p className="text-foreground/70 text-sm font-light leading-relaxed">
                                    After cleansing and toning, apply 2-3 drops to the face and neck. Gently pat into the skin until fully absorbed. Follow with moisturizer.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Related Products */}
                <div className="mt-24 md:mt-32 pt-16 border-t border-foreground/10">
                    <h2 className="text-2xl font-medium tracking-tight text-foreground mb-12">You May Also Like</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                        {relatedProducts.map((p) => (
                            <ProductCard key={p.id} {...p} />
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
}
