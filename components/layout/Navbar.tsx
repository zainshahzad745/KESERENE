"use client";

import Link from "next/link";
import { ShoppingBag, Menu, X, Search, User, LayoutDashboard, Sparkles, BookOpen, Leaf } from "lucide-react";
import { useState, useEffect } from "react";
import { useCartStore } from "@/store/cartStore";

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    const cartItems = useCartStore(state => state.items);
    const cartItemCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

    return (
        <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur-sm border-b border-foreground/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">

                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center">
                        <Link href="/" className="text-2xl font-semibold tracking-[0.2em] uppercase text-foreground">
                            KSerene
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex space-x-8">
                        <Link href="/shop" className="group flex items-center text-foreground/80 hover:text-foreground transition-colors text-sm uppercase tracking-wider">
                            <LayoutDashboard className="w-4 h-4 mr-2 opacity-50 group-hover:opacity-100 transition-opacity" />
                            Shop All
                        </Link>
                        <Link href="/shop?category=skincare" className="group flex items-center text-foreground/80 hover:text-foreground transition-colors text-sm uppercase tracking-wider">
                            <Sparkles className="w-4 h-4 mr-2 opacity-50 group-hover:opacity-100 transition-opacity" />
                            Skincare
                        </Link>
                        <Link href="/about" className="group flex items-center text-foreground/80 hover:text-foreground transition-colors text-sm uppercase tracking-wider">
                            <BookOpen className="w-4 h-4 mr-2 opacity-50 group-hover:opacity-100 transition-opacity" />
                            About
                        </Link>
                        <Link href="/why-korean-skincare" className="group flex items-center text-foreground/80 hover:text-foreground transition-colors text-sm uppercase tracking-wider">
                            <Leaf className="w-4 h-4 mr-2 opacity-50 group-hover:opacity-100 transition-opacity" />
                            Why K-Beauty?
                        </Link>
                    </nav>

                    {/* Icons */}
                    <div className="flex items-center space-x-2 md:space-x-4">
                        <button className="p-2 text-foreground/80 hover:text-foreground transition-colors hidden sm:block">
                            <Search className="w-5 h-5" />
                        </button>
                        <button className="p-2 text-foreground/80 hover:text-foreground transition-colors hidden sm:block">
                            <User className="w-5 h-5" />
                        </button>
                        <Link href="/cart" className="relative p-2 text-foreground/80 hover:text-foreground transition-colors">
                            <ShoppingBag className="w-5 h-5" />
                            {isClient && cartItemCount > 0 && (
                                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1.5 py-0.5 text-[10px] font-bold leading-none text-background bg-foreground rounded-full">
                                    {cartItemCount}
                                </span>
                            )}
                        </Link>

                        {/* Mobile menu button */}
                        <div className="md:hidden flex items-center">
                            <button
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className="p-2 text-foreground/80 hover:text-foreground focus:outline-none"
                            >
                                {isMobileMenuOpen ? (
                                    <X className="w-6 h-6" />
                                ) : (
                                    <Menu className="w-6 h-6" />
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Drawer */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-20 left-0 w-full bg-background border-b border-foreground/10 shadow-soft">
                    <div className="px-4 pt-2 pb-6 space-y-2">
                        <Link
                            href="/shop"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block px-3 py-3 text-base font-medium text-foreground hover:bg-accent-light/20 rounded-md"
                        >
                            Shop All
                        </Link>
                        <Link
                            href="/shop?category=skincare"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block px-3 py-3 text-base font-medium text-foreground hover:bg-accent-light/20 rounded-md"
                        >
                            Skincare
                        </Link>
                        <Link
                            href="/about"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block px-3 py-3 text-base font-medium text-foreground hover:bg-accent-light/20 rounded-md"
                        >
                            About
                        </Link>
                        <Link
                            href="/why-korean-skincare"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block px-3 py-3 text-base font-medium text-foreground hover:bg-accent-light/20 rounded-md bg-accent-light/10"
                        >
                            Why K-Beauty?
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
}
