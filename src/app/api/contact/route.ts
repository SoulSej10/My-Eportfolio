import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export async function POST(req: Request) {
  console.log('[API] Contact POST triggered');

  const body: ContactFormData = await req.json();
  console.log('[API] Request body:', body);

  const { name, email, message } = body;

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    console.log('[API] Transporter created');

    await transporter.sendMail({
      from: email,
      to: process.env.MAIL_USER,
      subject: `Portfolio Contact from ${name}`,
      text: message,
      html: `
        <h3>Message from ${name}</h3>
        <p><strong>Email:</strong> ${email}</p>
        <p>${message}</p>
      `,
    });

    console.log('[API] Email sent successfully');

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error: unknown) {
    console.error('[API] Error sending email:', error);

    if (error instanceof Error) {
      return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: false, error: 'Unknown error' }, { status: 500 });
  }
}
