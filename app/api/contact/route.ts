import { NextResponse } from 'next/server';
import { z } from 'zod';

const DISCORD_WEBHOOK_URL =
  'https://discord.com/api/webhooks/1454233929815949372/Q7LtfClNGcc-CtaERfpWmxD5BWt-ADOGVoKTEa2zyV_OAHEMyU7BWld5KEpSeH88ZEld';

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

    // Send to Discord webhook
    const discordResponse = await fetch(DISCORD_WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        embeds: [
          {
            title: '📬 Nuevo mensaje de contacto',
            color: 0xf84733, // Aurora33 brand color
            fields: [
              {
                name: '👤 Nombre',
                value: validatedData.name,
                inline: true,
              },
              {
                name: '📧 Email',
                value: validatedData.email,
                inline: true,
              },
              {
                name: '💬 Mensaje',
                value: validatedData.message,
                inline: false,
              },
            ],
            footer: {
              text: 'Aurora33.dev',
            },
            timestamp: new Date().toISOString(),
          },
        ],
      }),
    });

    if (!discordResponse.ok) {
      const errorText = await discordResponse.text();
      console.error('Discord webhook error:', errorText);
      return NextResponse.json(
        { error: 'Failed to send notification' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: 'Message sent successfully' },
      { status: 200 }
    );
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
