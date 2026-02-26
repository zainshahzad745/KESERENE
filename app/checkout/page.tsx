"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { CheckCircle2 } from "lucide-react";
import { useCartStore } from "@/store/cartStore";

export default function CheckoutPage() {
    const [isOrderPlaced, setIsOrderPlaced] = useState(false);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    const cartItems = useCartStore(state => state.items);
    const clearCart = useCartStore(state => state.clearCart);

    const subtotal = cartItems.reduce((sum, item) => sum + (item?.price || 0) * (item?.quantity || 1), 0);
    const shipping = 250;
    const total = subtotal + shipping;

    const handlePlaceOrder = (e: React.FormEvent) => {
        e.preventDefault();
        setIsOrderPlaced(true);
        clearCart();
    };

    if (isOrderPlaced) {
        return (
            <div className="bg-background min-h-[70vh] flex flex-col items-center justify-center py-20 px-4">
                <div className="w-20 h-20 border border-foreground/20 flex items-center justify-center text-foreground mb-6">
                    <CheckCircle2 className="w-10 h-10 stroke-[1]" />
                </div>
                <h1 className="text-3xl font-medium tracking-tight text-foreground mb-4">Thank you for your order!</h1>
                <p className="text-foreground/60 font-light mb-8 text-center max-w-md">
                    We've received your order and will begin processing it shortly. You will receive an email confirmation with tracking details.
                </p>
                <Link
                    href="/"
                    className="px-8 py-4 bg-foreground text-background text-sm font-medium tracking-[0.2em] uppercase hover:bg-black/80 transition-all duration-300"
                >
                    Return Home
                </Link>
            </div>
        );
    }

    return (
        <div className="bg-background min-h-screen py-10 md:py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="mb-10 text-xs font-semibold tracking-[0.2em] uppercase text-foreground/50">
                    <Link href="/cart" className="hover:text-foreground transition-colors">Cart</Link>
                    <span className="mx-3">/</span>
                    <span className="text-foreground">Checkout</span>
                </div>

                <h1 className="text-4xl lg:text-5xl font-medium tracking-tight mb-12">Checkout</h1>

                <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">

                    {/* Main Form Area */}
                    <div className="w-full lg:w-3/5">
                        <form onSubmit={handlePlaceOrder} className="space-y-12">

                            {/* Contact Info */}
                            <section>
                                <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-foreground/60 border-b border-foreground/10 pb-4 mb-6">Contact Information</h2>
                                <div className="space-y-4">
                                    <div>
                                        <label htmlFor="email" className="sr-only">Email Address</label>
                                        <input type="email" id="email" required className="w-full px-4 py-4 bg-transparent border border-foreground/20 focus:outline-none focus:border-foreground transition-all placeholder:text-foreground/40 text-foreground rounded-none" placeholder="Email Address" />
                                    </div>
                                </div>
                            </section>

                            {/* Shipping Address */}
                            <section>
                                <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-foreground/60 border-b border-foreground/10 pb-4 mb-6 pt-4">Shipping Address</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="firstName" className="sr-only">First Name</label>
                                        <input type="text" id="firstName" required className="w-full px-4 py-4 bg-transparent border border-foreground/20 focus:outline-none focus:border-foreground transition-all placeholder:text-foreground/40 text-foreground rounded-none" placeholder="First Name" />
                                    </div>
                                    <div>
                                        <label htmlFor="lastName" className="sr-only">Last Name</label>
                                        <input type="text" id="lastName" required className="w-full px-4 py-4 bg-transparent border border-foreground/20 focus:outline-none focus:border-foreground transition-all placeholder:text-foreground/40 text-foreground rounded-none" placeholder="Last Name" />
                                    </div>
                                    <div className="md:col-span-2">
                                        <label htmlFor="address" className="sr-only">Address</label>
                                        <input type="text" id="address" required className="w-full px-4 py-4 bg-transparent border border-foreground/20 focus:outline-none focus:border-foreground transition-all placeholder:text-foreground/40 text-foreground rounded-none" placeholder="House number and street name" />
                                    </div>
                                    <div>
                                        <label htmlFor="city" className="sr-only">City</label>
                                        <input type="text" id="city" required className="w-full px-4 py-4 bg-transparent border border-foreground/20 focus:outline-none focus:border-foreground transition-all placeholder:text-foreground/40 text-foreground rounded-none" placeholder="City" />
                                    </div>
                                    <div>
                                        <label htmlFor="postalCode" className="sr-only">Postal Code</label>
                                        <input type="text" id="postalCode" required className="w-full px-4 py-4 bg-transparent border border-foreground/20 focus:outline-none focus:border-foreground transition-all placeholder:text-foreground/40 text-foreground rounded-none" placeholder="Postal Code" />
                                    </div>
                                </div>
                            </section>

                            {/* Payment Placeholder */}
                            <section>
                                <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-foreground/60 border-b border-foreground/10 pb-4 mb-6 pt-4">Payment Method</h2>
                                <div className="border border-foreground/20 p-6">
                                    <div className="flex items-center space-x-3 mb-2">
                                        <div className="w-4 h-4 rounded-full border-4 border-foreground bg-white" />
                                        <p className="text-foreground tracking-wide font-medium">Cash on Delivery (COD)</p>
                                    </div>
                                    <p className="text-sm text-foreground/50 font-light ml-7 mt-2">Available across all standard shipping zones.</p>
                                </div>
                            </section>

                            <button
                                type="submit"
                                className="w-full py-5 bg-foreground text-background text-sm font-medium tracking-[0.2em] uppercase hover:bg-black/80 transition-all duration-300 mt-8"
                            >
                                Place Order
                            </button>
                        </form>
                    </div>

                    {/* Order Summary Sidebar */}
                    <div className="w-full lg:w-2/5 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
                        <div className="bg-transparent border border-foreground/10 p-8 sticky top-32">
                            <h2 className="text-xl font-medium tracking-tight mb-8">Order Summary</h2>

                            <div className="space-y-6 mb-8 max-h-[40vh] overflow-y-auto pr-2 custom-scrollbar">
                                {isClient && cartItems.map((item) => (
                                    <div key={item.id} className="flex gap-4 items-center">
                                        <div className="relative w-16 h-20 bg-accent-light/10 border border-foreground/10 flex-shrink-0">
                                            <Image src={item.image} alt={item.name} fill className="object-cover" />
                                            <div className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-foreground text-background text-[10px] rounded-full flex items-center justify-center font-bold z-10">
                                                {item.quantity}
                                            </div>
                                        </div>
                                        <div className="flex-grow flex flex-col justify-center">
                                            <h4 className="text-sm font-medium text-foreground line-clamp-2 leading-snug">{item.name}</h4>
                                            <p className="text-xs text-foreground/60 mt-1 uppercase tracking-widest">Rs. {(item?.price || 0).toLocaleString()}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="border-t border-foreground/10 pt-8 space-y-4 mb-8 text-sm text-foreground/70 font-light">
                                <div className="flex justify-between items-center">
                                    <span>Subtotal</span>
                                    <span className="font-medium text-foreground">Rs. {subtotal.toLocaleString()}</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span>Shipping</span>
                                    <span className="font-medium text-foreground">Rs. {shipping.toLocaleString()}</span>
                                </div>
                            </div>

                            <div className="border-t border-foreground/10 pt-6 flex justify-between items-end">
                                <span className="text-xs font-semibold text-foreground uppercase tracking-[0.2em]">Total</span>
                                <span className="text-2xl font-medium text-foreground">Rs. {total.toLocaleString()}</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
