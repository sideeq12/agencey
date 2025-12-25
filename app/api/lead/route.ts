import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const data = await req.json();

        console.log("LEAD CAPTURED:", {
            name: data.name,
            email: data.email,
            service: data.service,
            source: data.source, // This will be the pSEO slug
            params: data.params || {},
            timestamp: new Date().toISOString(),
        });

        // In a real app, you would send this to a CRM or DB
        // e.g., await db.leads.create({ data })

        return NextResponse.json(
            { message: "Lead captured successfully", id: Math.random().toString(36).substring(7) },
            { status: 201 }
        );
    } catch (error) {
        console.error("LEAD CAPTURE FAILED:", error);
        return NextResponse.json(
            { message: "Failed to capture lead" },
            { status: 500 }
        );
    }
}
