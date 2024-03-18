// import { EmailTemplate } from '../../../components/EmailTemplate';
import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  try {
    const data = await resend.emails.send({
      from: 'Shirin <shirinsadeghi@live.com>',
      to: ['shirinsadeghi@live.com'],
      subject: 'Hello world',
      react: (
        <>
            <p>Email Body</p>
        </>
      )
      
    });

    return NextResponseResponse.json(data);
  } catch (error) {
    return NextResponseResponse.json({ error });
  }
}