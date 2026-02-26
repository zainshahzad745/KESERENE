"use client";

import ProductCard from "@/components/product/ProductCard";
import { useState } from "react";
import { ChevronDown, SlidersHorizontal } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const PRODUCTS = [
    { id: "1", name: "Radiant Essence Serum", price: 4500, image: "/images/product-1.png", category: "Serum" },
    { id: "2", name: "Deep Moisture Cream", price: 3200, image: "/images/product-2.png", category: "Moisturizer" },
    { id: "3", name: "Calming Green Tea Toner", price: 2800, image: "/images/product-1.png", category: "Toner" },
    { id: "4", name: "Gentle Matcha Cleanser", price: 2100, image: "/images/product-2.png", category: "Cleanser" },
    { id: "5", name: "Glow Recovery Oil", price: 4100, image: "/images/product-1.png", category: "Oil" },
    { id: "6", name: "Barrier Repair Ampoule", price: 3800, image: "/images/product-2.png", category: "Ampoule" },
    { id: "7", name: "Soothing Rice Water Foam", price: 1900, image: "/images/product-1.png", category: "Cleanser" },
    { id: "8", name: "Snail Mucin Gel", price: 2500, image: "/images/product-2.png", category: "Moisturizer" },
];

const CATEGORIES = ["All", "Cleansers", "Toners", "Serums", "Moisturizers", "Oils"];
const CONCERNS = ["Acne", "Anti-aging", "Dryness", "Dullness", "Sensitivity"];

export default function Shop() {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredProducts = activeCategory === "All"
        ? PRODUCTS
        : PRODUCTS.filter(p => p.category === activeCategory);

    return (
        <div className="bg-background min-h-screen py-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-baseline mb-12 pb-8 border-b border-accent-light/40 animate-fade-in-up">
                    <h1 className="text-4xl md:text-5xl font-medium tracking-tight text-foreground">Shop</h1>

                    <div className="flex items-center space-x-6 mt-8 md:mt-0">
                        <button className="md:hidden flex items-center px-4 py-2 border border-accent-mid rounded-full text-sm font-medium text-foreground bg-white shadow-sm">
                            <SlidersHorizontal className="w-4 h-4 mr-2" />
                            Filters
                        </button>

                        <div className="relative group">
                            <button className="flex items-center px-4 py-2 border border-foreground/20 text-sm font-medium text-foreground transition-colors hover:bg-foreground hover:text-background rounded-none">
                                Sort by <ChevronDown className="w-4 h-4 ml-2 group-hover:-rotate-180 transition-transform duration-300" />
                            </button>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row gap-16 lg:gap-24 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>

                    {/* Sidebar */}
                    <aside className="hidden md:block w-72 flex-shrink-0 space-y-12">
                        {/* Category Filter */}
                        <div className="pb-8 border-b border-foreground/10">
                            <h3 className="text-sm uppercase tracking-[0.2em] font-bold mb-6 text-foreground/60">Category</h3>
                            <ul className="space-y-4">
                                {CATEGORIES.map(category => (
                                    <li key={category}>
                                        <button
                                            onClick={() => setActiveCategory(category)}
                                            className={`text-sm tracking-wide flex items-center w-full transition-all duration-300 ${activeCategory === category ? "text-foreground font-semibold translate-x-1" : "text-foreground/60 hover:text-foreground hover:translate-x-1"}`}
                                        >
                                            <span className={`w-1 h-1 rounded-full mr-3 transition-colors ${activeCategory === category ? "bg-foreground" : "bg-transparent group-hover:bg-foreground/30"}`}></span>
                                            {category}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Skin Concern Filter Tracker */}
                        <div className="pt-2">
                            <h3 className="text-sm uppercase tracking-[0.2em] font-bold mb-6 text-foreground/60">Skin Concern</h3>
                            <ul className="space-y-4">
                                {CONCERNS.map(concern => (
                                    <li key={concern} className="flex items-center group">
                                        <input
                                            type="checkbox"
                                            id={`concern-${concern}`}
                                            className="w-5 h-5 rounded-md border-2 border-accent-light text-accent-dark focus:ring-accent-dark focus:ring-offset-0 bg-transparent appearance-none checked:bg-accent-dark checked:border-transparent transition-all cursor-pointer shadow-sm relative checked:after:content-['✓'] checked:after:absolute checked:after:text-white checked:after:text-xs checked:after:left-[3px] checked:after:-top-[1px]"
                                        />
                                        <label htmlFor={`concern-${concern}`} className="ml-4 text-base text-foreground/70 cursor-pointer group-hover:text-foreground transition-colors select-none">
                                            {concern}
                                        </label>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </aside>

                    {/* Product Grid */}
                    <div className="flex-1">
                        <motion.div
                            layout
                            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12"
                        >
                            <AnimatePresence mode="popLayout">
                                {filteredProducts.map((product, index) => (
                                    <motion.div
                                        key={product.id}
                                        layout
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, scale: 0.9 }}
                                        transition={{ duration: 0.4, delay: index * 0.05 }}
                                    >
                                        <ProductCard {...product} />
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </motion.div>

                        {/* Pagination Placeholder */}
                        <div className="mt-24 flex justify-center border-t border-foreground/10 pt-8">
                            <nav className="flex items-center space-x-2">
                                <button className="px-4 py-2 text-sm font-medium text-foreground/40 hover:text-foreground transition-all uppercase tracking-widest disabled:opacity-50" disabled>
                                    Prev
                                </button>
                                <button className="w-10 h-10 flex items-center justify-center bg-foreground text-background font-medium hover:bg-black/80 transition-colors rounded-none">
                                    1
                                </button>
                                <button className="w-10 h-10 flex items-center justify-center text-foreground hover:bg-foreground/5 font-medium transition-colors rounded-none">
                                    2
                                </button>
                                <button className="w-10 h-10 flex items-center justify-center text-foreground hover:bg-foreground/5 font-medium transition-colors rounded-none">
                                    3
                                </button>
                                <button className="px-4 py-2 text-sm font-medium text-foreground/40 hover:text-foreground transition-all uppercase tracking-widest disabled:opacity-50">
                                    Next
                                </button>
                            </nav>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
