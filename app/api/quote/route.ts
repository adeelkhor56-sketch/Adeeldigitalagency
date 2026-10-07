import { NextResponse } from 'next/server';
import { quoteFormSchema } from '@/lib/validations';

// In-memory rate limiting map (IP -> timestamps)
const rateLimitMap = new Map<string, number[]>();

export async function POST(request: Request) {
  try {
    const ip = request.headers.get('x-forwarded-for') || '127.0.0.1';
    const now = Date.now();
    const windowMs = 60 * 1000; // 1 minute window
    const maxRequests = 5;

    // Rate Limiting check
    const timestamps = rateLimitMap.get(ip) || [];
    const validTimestamps = timestamps.filter((t) => now - t < windowMs);

    if (validTimestamps.length >= maxRequests) {
      return NextResponse.json(
        { error: 'Too many submissions. Please wait a minute or WhatsApp us directly.' },
        { status: 429 }
      );
    }

    validTimestamps.push(now);
    rateLimitMap.set(ip, validTimestamps);

    const body = await request.json();

    // Honeypot spam trap
    if (body.websiteUrl) {
      // Quietly reject bots without alerting them
      return NextResponse.json({ success: true, message: 'Received' });
    }

    // Zod validation on server
    const validation = quoteFormSchema.safeParse(body);
    if (!validation.success) {
      return NextResponse.json(
        { error: 'Validation failed', details: validation.error.format() },
        { status: 400 }
      );
    }

    const { name, email, phone, service, budget, message } = validation.data;

    // Email delivery logic:
    // If RESEND_API_KEY is configured in .env, send via Resend API
    const resendApiKey = process.env.RESEND_API_KEY;
    const recipientEmail = 'adeeldigitalagency@gmail.com';

    if (resendApiKey) {
      const emailRes = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${resendApiKey}`,
        },
        body: JSON.stringify({
          from: 'Adeel Digital Agency Leads <onboarding@resend.dev>',
          to: [recipientEmail],
          reply_to: email,
          subject: `⚡ New Growth Lead: ${name} (${service})`,
          html: `
            <h2>New Inquiry for Adeel Digital Agency</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone / WhatsApp:</strong> ${phone}</p>
            <p><strong>Service Requested:</strong> ${service}</p>
            <p><strong>Budget Range:</strong> ${budget}</p>
            <hr />
            <p><strong>Message / Project Description:</strong></p>
            <p style="white-space: pre-wrap;">${message}</p>
          `,
        }),
      });

      if (!emailRes.ok) {
        console.error('Resend API response error:', await emailRes.text());
      }
    } else {
      // In development or when RESEND_API_KEY is not yet populated, log formatted lead to console
      console.log('--- [NEW LEAD RECEIVED - ADEEL DIGITAL AGENCY] ---');
      console.log({ name, email, phone, service, budget, message, receivedAt: new Date().toISOString() });
    }

    return NextResponse.json({
      success: true,
      message: 'Lead received successfully. Adeel will get in touch shortly.',
    });
  } catch (error: any) {
    console.error('API /api/quote error:', error);
    return NextResponse.json(
      { error: 'Internal server error processing inquiry.' },
      { status: 500 }
    );
  }
}
