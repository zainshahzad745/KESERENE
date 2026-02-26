import { NextResponse } from "next/server";

export async function GET(
    request: Request,
    { params }: { params: { id: string } }
) {
    // Placeholder returned since no real DB is configured
    return NextResponse.json({
        success: true,
        data: { id: params.id, status: "Processing", items: [] },
    });
}
