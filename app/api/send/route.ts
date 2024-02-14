import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req: Request, res: Response) {
  const postData = await req.json();
  const { email, subject, message } = postData;
  console.log(postData)
  try {
    const data = await resend.emails.send({
      from: fromEmail,
      to: postData.email,
      subject: subject,
      text:message,
    });
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}


