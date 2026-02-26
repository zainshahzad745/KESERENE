import { NextResponse } from "next/server";
import { CART } from "@/lib/db";

export async function GET() {
    return NextResponse.json({
        success: true,
        data: CART,
    });
}

export async function POST(request: Request) {
    try {
        const body = await request.json();
        return NextResponse.json({
            success: true,
            data: { message: "Added to cart placeholder", item: body },
        });
    } catch (e) {
        return NextResponse.json(
            { success: false, error: "Invalid request payload" },
            { status: 400 }
        );
    }
}

export async function DELETE(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const id = searchParams.get('id');
        return NextResponse.json({
            success: true,
            data: { message: `Removed item ${id} from cart placeholder` },
        });
    } catch (e) {
        return NextResponse.json(
            { success: false, error: "Invalid request payload" },
            { status: 400 }
        );
    }
}
