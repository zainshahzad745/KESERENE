"use client";

import Image from "next/image";
import Link from "next/link";
import { Trash2, ShoppingBag } from "lucide-react";
import { useCartStore, CartItem } from "@/store/cartStore";

export default function CartPage() {
    const cartItems = useCartStore(state => state.items);
    const updateQuantity = useCartStore(state => state.updateQuantity);
    const removeItem = useCartStore(state => state.removeItem);

    const subtotal = cartItems.reduce((sum, item) => sum + (item?.price || 0) * (item?.quantity || 1), 0);

    if (cartItems.length === 0) {
        return (
            <div className="bg-background min-h-[70vh] flex flex-col items-center justify-center py-20 px-4">
                <div className="w-24 h-24 border border-foreground/10 flex items-center justify-center text-foreground mb-8">
                    <ShoppingBag className="w-10 h-10 stroke-[1]" />
                </div>
                <h1 className="text-4xl lg:text-5xl font-medium tracking-tight mb-4">Your Cart is Empty</h1>
                <p className="text-foreground/70 font-light mb-10 text-center max-w-md text-lg">
                    Discover our collection of premium Korean skincare and find your new everyday essentials.
                </p>
                <Link
                    href="/shop"
                    className="px-8 py-4 bg-foreground text-background text-sm font-medium tracking-[0.2em] uppercase hover:bg-black/80 transition-all duration-300"
                >
                    Explore Collection
                </Link>
            </div>
        );
    }

    return (
        <div className="bg-background min-h-screen py-10 md:py-20 animate-fade-in-up">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <h1 className="text-4xl md:text-5xl font-medium tracking-tight mb-16">Your Cart</h1>

                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">

                    {/* Cart Items */}
                    <div className="w-full lg:w-3/5">
                        <div className="border-t border-accent-light/40">
                            {cartItems.map((item) => (
                                <div key={item.id} className="flex flex-col sm:flex-row items-start sm:items-center py-10 border-b border-accent-light/40 gap-8 group">

                                    {/* Item Image */}
                                    <Link href={`/product/${item.id}`} className="relative w-28 h-36 flex-shrink-0 bg-accent-light/10 border border-foreground/10 group-hover:border-foreground/30 transition-all duration-300">
                                        <Image src={item.image} alt={item.name} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                                    </Link>

                                    {/* Item Details */}
                                    <div className="flex-grow flex flex-col space-y-2">
                                        <Link href={`/product/${item.id}`} className="text-xl font-medium text-foreground hover:text-foreground/70 transition-colors">
                                            {item.name}
                                        </Link>
                                        <span className="text-foreground/60 text-sm font-light tracking-wide">Rs. {(item?.price || 0).toLocaleString()}</span>
                                    </div>

                                    {/* Settings / Actions */}
                                    <div className="flex items-center justify-between w-full sm:w-auto mt-6 sm:mt-0 gap-8">
                                        <div className="flex items-center border border-foreground/20 bg-transparent">
                                            <button
                                                onClick={() => updateQuantity(item.id, -1)}
                                                className="px-4 py-2 text-foreground/70 hover:bg-foreground hover:text-background transition-colors"
                                            >
                                                -
                                            </button>
                                            <span className="px-4 py-2 min-w-[3rem] text-center text-sm font-medium">{item.quantity}</span>
                                            <button
                                                onClick={() => updateQuantity(item.id, 1)}
                                                className="px-4 py-2 text-foreground/70 hover:bg-foreground hover:text-background transition-colors"
                                            >
                                                +
                                            </button>
                                        </div>

                                        <div className="text-right min-w-[6rem] font-medium text-lg text-foreground">
                                            Rs. {((item?.price || 0) * (item?.quantity || 1)).toLocaleString()}
                                        </div>

                                        <button
                                            onClick={() => removeItem(item.id)}
                                            className="p-2 text-foreground/40 hover:text-foreground transition-colors ml-2"
                                            aria-label="Remove item"
                                        >
                                            <Trash2 className="w-5 h-5 stroke-[1]" />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Order Summary */}
                    <div className="w-full lg:w-2/5 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
                        <div className="bg-transparent border border-foreground/10 p-8 sticky top-32">
                            <h2 className="text-2xl font-medium tracking-tight mb-8">Order Summary</h2>

                            <div className="space-y-5 mb-8 text-base font-light text-foreground/80">
                                <div className="flex justify-between items-center">
                                    <span>Subtotal</span>
                                    <span className="font-medium text-foreground">Rs. {subtotal.toLocaleString()}</span>
                                </div>
                                <div className="flex justify-between items-center text-sm">
                                    <span>Shipping</span>
                                    <span className="text-foreground/60 italic">Calculated at checkout</span>
                                </div>
                            </div>

                            <div className="border-t border-foreground/10 pt-8 mb-10 flex justify-between items-end">
                                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground/60">Total</span>
                                <span className="text-3xl font-medium text-foreground">Rs. {subtotal.toLocaleString()}</span>
                            </div>

                            <Link
                                href="/checkout"
                                className="w-full inline-flex items-center justify-center py-4 bg-foreground text-background text-sm font-medium tracking-[0.2em] uppercase hover:bg-black/80 transition-all duration-300"
                            >
                                Proceed to Checkout
                            </Link>

                            <div className="mt-6 text-center">
                                <Link href="/shop" className="text-sm text-accent-dark hover:text-foreground border-b border-transparent hover:border-foreground/30 transition-all font-medium pb-1">
                                    Continue Shopping
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
