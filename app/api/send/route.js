import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req, res) {
  const {body} = await req.json();
  const {email, subject, message} = body
  try {
    const data = await resend.emails.send({
      from: fromEmail,
      to: ['shirinsadeghi@live.com', email],
      subject: subject,
      react: (
        <>
          <h1>{subject}</h1>
          <p>Thank you for contacting me!</p>
          <p>{message}</p>
        </>
      )
      
    });

    return NextResponseResponse.json(data);
  } catch (error) {
    return NextResponseResponse.json({ error });
  }
}