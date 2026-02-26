import { NextResponse } from "next/server";
import { PRODUCTS } from "@/lib/db";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');

    let filtered = PRODUCTS;
    if (category && category !== 'All') {
        filtered = PRODUCTS.filter(p => p.category.toLowerCase() === category.toLowerCase());
    }

    return NextResponse.json({
        success: true,
        data: filtered
    });
}
