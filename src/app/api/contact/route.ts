import { NextResponse } from "next/server";
import { Resend } from "resend";
import { siteConfig } from "@/data/site";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { name, email, message, company } = (body ?? {}) as Record<string, unknown>;

  // Honeypot: real visitors never fill this hidden field.
  if (typeof company === "string" && company.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  if (typeof name !== "string" || name.trim().length < 2 || name.trim().length > 100) {
    return NextResponse.json({ error: "Please enter a valid name." }, { status: 400 });
  }

  if (typeof email !== "string" || !EMAIL_RE.test(email.trim()) || email.trim().length > 200) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 }
    );
  }

  if (
    typeof message !== "string" ||
    message.trim().length < 10 ||
    message.trim().length > 5000
  ) {
    return NextResponse.json(
      { error: "Message must be between 10 and 5000 characters." },
      { status: 400 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not set.");
    return NextResponse.json(
      { error: "Contact form is not configured yet. Please email me directly." },
      { status: 503 }
    );
  }

  const resend = new Resend(apiKey);

  const { error } = await resend.emails.send({
    from: "Portfolio Contact <onboarding@resend.dev>",
    to: siteConfig.email,
    replyTo: email.trim(),
    subject: `New message from ${name.trim()}`,
    text: `From: ${name.trim()} <${email.trim()}>\n\n${message.trim()}`,
  });

  if (error) {
    console.error("Resend send failed:", error);
    return NextResponse.json(
      { error: "Something went wrong sending your message. Please try again." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
