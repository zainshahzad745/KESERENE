import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const body = await request.json();
        return NextResponse.json({
            success: true,
            data: { orderId: "ORD-" + Math.floor(Math.random() * 10000), details: body },
        });
    } catch (e) {
        return NextResponse.json(
            { success: false, error: "Invalid request payload" },
            { status: 400 }
        );
    }
}
