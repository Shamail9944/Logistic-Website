import { NextResponse } from "next/server";

export async function POST(request) {
  const { email } = await request.json();
  console.log(email)
  if (!email) {
    return res.status(400).json({ error: "Email is required" });
  }

  const MailchimpKey = "85f7736b841f6fa55fc50978c8f381cb-us21";
  const MailchimpServer = "";
  const MailchimpAudience = "3646426271";
  // const MailchimpKey = process.env.MAILCHIMP_API_KEY;
  // const MailchimpServer = process.env.MAILCHIMP_API_SERVER;
  // const MailchimpAudience = process.env.MAILCHIMP_AUDIENCE_ID;

  const customUrl = `https://${MailchimpServer}.api.mailchimp.com/3.0/lists/${MailchimpAudience}/members`;

  const response = await fetch(customUrl, {
    method: "POST",
    headers: {
      Authorization: `apikey ${MailchimpKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email_address: email,
      status: "subscribed",
    }),
  });
  const received = await response.json();
  return NextResponse.json(received);
}