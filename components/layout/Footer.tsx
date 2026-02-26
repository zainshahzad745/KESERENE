import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-foreground text-background py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">

                    {/* Brand */}
                    <div className="space-y-4">
                        <h3 className="text-3xl font-semibold tracking-[0.2em] uppercase">KSERENE</h3>
                        <p className="text-background/60 text-sm font-light leading-relaxed max-w-xs">
                            Curating the finest Korean skincare to bring out your natural, radiant glow. Simple, effective, and beautiful.
                        </p>
                    </div>

                    {/* Shop */}
                    <div>
                        <h4 className="text-sm font-semibold uppercase tracking-[0.2em] mb-6 text-background/50">Shop</h4>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/shop" className="text-background/70 hover:text-background text-sm font-light transition-colors">
                                    All Products
                                </Link>
                            </li>
                            <li>
                                <Link href="/shop?category=cleansers" className="text-background/70 hover:text-background text-sm font-light transition-colors">
                                    Cleansers
                                </Link>
                            </li>
                            <li>
                                <Link href="/shop?category=serums" className="text-background/70 hover:text-background text-sm font-light transition-colors">
                                    Serums
                                </Link>
                            </li>
                            <li>
                                <Link href="/shop?category=moisturizers" className="text-background/70 hover:text-background text-sm font-light transition-colors">
                                    Moisturizers
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Info */}
                    <div>
                        <h4 className="text-sm font-semibold uppercase tracking-[0.2em] mb-6 text-background/50">Information</h4>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/about" className="text-background/70 hover:text-background text-sm font-light transition-colors">
                                    Our Story
                                </Link>
                            </li>
                            <li>
                                <Link href="/faq" className="text-background/70 hover:text-background text-sm font-light transition-colors">
                                    FAQ
                                </Link>
                            </li>
                            <li>
                                <Link href="/shipping" className="text-background/70 hover:text-background text-sm font-light transition-colors">
                                    Shipping & Returns
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-background/70 hover:text-background text-sm font-light transition-colors">
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Social */}
                    <div>
                        <h4 className="text-sm font-semibold uppercase tracking-[0.2em] mb-6 text-background/50">Connect</h4>
                        <ul className="space-y-3">
                            <li>
                                <a href="#" className="text-background/70 hover:text-background text-sm font-light transition-colors">
                                    Instagram
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-background/70 hover:text-background text-sm font-light transition-colors">
                                    TikTok
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-background/70 hover:text-background text-sm font-light transition-colors">
                                    Pinterest
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-16 pt-8 border-t border-background/20 text-center">
                    <p className="text-background/40 text-[10px] tracking-[0.2em] uppercase">
                        &copy; {new Date().getFullYear()} KSerene Skincare. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
