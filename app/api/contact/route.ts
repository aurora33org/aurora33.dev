import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { z } from 'zod';

const resend = new Resend(process.env.RESEND_API_KEY);

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Validate input
    const validatedData = contactSchema.parse(body);

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: process.env.FROM_EMAIL || 'noreply@aurora33.dev',
      to: process.env.CONTACT_EMAIL || 'hello@aurora33.dev',
      subject: `New Contact Form Submission from ${validatedData.name}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: #F84733; color: white; padding: 20px; border-radius: 8px 8px 0 0; }
              .content { background: #f8f8f8; padding: 20px; border-radius: 0 0 8px 8px; }
              .field { margin-bottom: 15px; }
              .label { font-weight: bold; color: #191A1B; }
              .value { color: #838A8D; margin-top: 5px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h2 style="margin: 0;">New Contact Form Submission</h2>
                <p style="margin: 5px 0 0 0; opacity: 0.9;">Aurora33.dev</p>
              </div>
              <div class="content">
                <div class="field">
                  <p class="label">Name:</p>
                  <p class="value">${validatedData.name}</p>
                </div>
                <div class="field">
                  <p class="label">Email:</p>
                  <p class="value">${validatedData.email}</p>
                </div>
                <div class="field">
                  <p class="label">Message:</p>
                  <p class="value">${validatedData.message}</p>
                </div>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json({ success: true, data }, { status: 200 });
  } catch (error) {
    console.error('Contact API error:', error);

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Invalid form data', details: error.issues },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
