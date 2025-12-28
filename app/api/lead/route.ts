import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

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

        // Send email notification
        try {
            await resend.emails.send({
                from: "Strategy Hub <team@agencey.pro>", // Replace with your verified domain
                to: ["smartbraeen@gmail.com"], // Replace with your email
                subject: `New Lead: ${data.name} - ${data.service}`,
                html: `
                    <h2>New Lead Submission</h2>
                    <p><strong>Name:</strong> ${data.name}</p>
                    <p><strong>Email:</strong> ${data.email}</p>
                    <p><strong>Phone:</strong> ${data.phone || 'Not provided'}</p>
                    <p><strong>Company:</strong> ${data.company || 'Not provided'}</p>
                    <p><strong>Service:</strong> ${data.service}</p>
                    <p><strong>Source:</strong> ${data.source}</p>
                    <p><strong>Goals:</strong> ${data.goals || 'Not provided'}</p>
                    <p><strong>Timestamp:</strong> ${new Date().toISOString()}</p>
                `,
            });

            // Send auto-reply to sender
            const firstName = data.name.split(' ')[0]; // Extract first name
            await resend.emails.send({
                from: "Agencey Team. <team@agencey.pro>",
                to: [data.email],
                subject: "We got your message.",
                html: `
                    <p>Hi ${firstName},</p>
                    
                    <p>Thanks for reaching out to <b>Agencey</b>. We've received your message and a specialist is reviewing it now.</p>
                    
                    <p>If your project is urgent, feel free to reply to this email with any extra details.</p>
                    
                   
                    <p>Best,<br>Agencey Team</p>
                `,
            });
        } catch (emailError) {
            console.error("EMAIL SEND FAILED:", emailError);
            // Don't fail the request if email fails, but log it
        }

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
