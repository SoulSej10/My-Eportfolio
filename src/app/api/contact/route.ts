// /src/app/api/contact/route.ts
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  console.log('[API] Contact POST triggered');

  const body = await req.json();
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
  } catch (error: any) {
    console.error('[API] Error sending email:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
