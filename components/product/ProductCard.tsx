"use client";

import Image from "next/image";
import Link from "next/link";
import { Plus } from "lucide-react";
import { useCartStore } from "@/store/cartStore";

interface ProductCardProps {
    id: string;
    name: string;
    price: number;
    image: string;
    category: string;
}

export default function ProductCard({ id, name, price, image, category }: ProductCardProps) {
    return (
        <div className="group flex flex-col space-y-4 relative">
            <div className="relative block aspect-[4/5] overflow-hidden bg-accent-light/50 transition-all duration-500 ease-out">

                <Link href={`/product/${id}`} className="absolute inset-0 z-10">
                    <Image
                        src={image}
                        alt={name}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                    />
                </Link>

                {/* Quick Add Action - Minimal Slide Up */}
                <button
                    className="absolute bottom-0 left-0 w-full translate-y-full group-hover:translate-y-0 z-30 flex items-center justify-center space-x-2 bg-foreground text-background py-3.5 font-medium tracking-widest text-xs uppercase transition-transform duration-300 hover:bg-black/90"
                    onClick={(e) => {
                        e.preventDefault();
                        useCartStore.getState().addItem({
                            id,
                            name,
                            price,
                            image,
                            quantity: 1
                        });
                    }}
                >
                    <Plus className="w-4 h-4" />
                    <span>Quick Add</span>
                </button>
            </div>

            <div className="flex flex-col items-start px-1 space-y-1">
                <span className="text-[10px] uppercase tracking-[0.2em] text-foreground/50 font-semibold mb-1">
                    {category}
                </span>
                <Link href={`/product/${id}`} className="text-lg font-medium tracking-tight text-foreground hover:text-foreground/70 transition-colors line-clamp-1">
                    {name}
                </Link>
                <div className="pt-0.5 text-sm text-foreground/80 font-medium">
                    Rs. {price.toLocaleString()}
                </div>
            </div>
        </div>
    );
}
