import { NextResponse } from "next/server";
import { PRODUCTS } from "@/lib/db";

export async function GET(
    request: Request,
    { params }: { params: { id: string } }
) {
    const product = PRODUCTS.find((p) => p.id === params.id);

    if (!product) {
        return NextResponse.json(
            { success: false, error: "Product not found" },
            { status: 404 }
        );
    }

    return NextResponse.json({
        success: true,
        data: product,
    });
}
