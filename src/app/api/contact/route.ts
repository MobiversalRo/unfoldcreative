import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { name, surname, firm, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email and message are required." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("[contact] RESEND_API_KEY is not set");
      return NextResponse.json(
        { error: "Server configuration error." },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);

    const { error } = await resend.emails.send({
      from: "UnfoldCreative Contact <onboarding@resend.dev>", // replace with your verified domain e.g. noreply@unfoldcreative.com
      to: [process.env.NODE_ENV === "development" ? "roxana.dan@mobiversal.com" : "info@unfoldcreative-design.com"],
      replyTo: email,
      subject: `New contact from ${name} ${surname}${firm ? ` — ${firm}` : ""}`,
      text: `Name: ${name} ${surname}\nFirm: ${firm || "—"}\nEmail: ${email}\n\nMessage:\n${message}`,
    });

    if (error) {
      console.error("[contact] Resend error:", error);
      return NextResponse.json(
        { error: error.message ?? "Failed to send message. Please try again." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[contact] unexpected error:", err);
    return NextResponse.json(
      { error: "Failed to send message. Please try again." },
      { status: 500 }
    );
  }
}
