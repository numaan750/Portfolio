import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: NextRequest) {
  try {
    const { name, email, subject, message } = await req.json()
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Required fields missing' },
        { status: 400 }
      )
    }
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    })
    const emailHtml = `
      <html>
        <head>
          <style>
            body { margin: 0; padding: 0; font-family: Arial, sans-serif; background: #f9f9f9; color: #333; }
            .email-container { max-width: 600px; margin: 0 auto; padding: 20px; background: #f9f9f9; border-radius: 10px; }
            .email-heading { color: #6366f1; border-bottom: 2px solid #6366f1; padding-bottom: 10px; margin: 0 0 18px; font-size: 1.2rem; }
            .email-table { width: 100%; border-collapse: collapse; }
            .email-label { padding: 8px 0; color: #666; font-weight: bold; width: 90px; vertical-align: top; }
            .email-value { padding: 8px 0; color: #333; }
            .email-link { color: #6366f1; text-decoration: none; }
            .email-note { margin-top: 15px; padding: 15px; background: #fff; border-left: 4px solid #6366f1; border-radius: 4px; }
            .email-note-title { color: #666; font-weight: bold; margin: 0 0 8px; }
            .email-note-text { color: #333; margin: 0; line-height: 1.6; }
          </style>
        </head>
        <body>
          <div class="email-container">
            <h2 class="email-heading">New Contact Form Message</h2>
            <table class="email-table">
              <tr>
                <td class="email-label">Name:</td>
                <td class="email-value">${name}</td>
              </tr>
              <tr>
                <td class="email-label">Email:</td>
                <td class="email-value email-link"><a href="mailto:${email}">${email}</a></td>
              </tr>
              <tr>
                <td class="email-label">Subject:</td>
                <td class="email-value">${subject || 'N/A'}</td>
              </tr>
            </table>
            <div class="email-note">
              <p class="email-note-title">Message:</p>
              <p class="email-note-text">${message.replace(/\n/g, '<br>')}</p>
            </div>
          </div>
        </body>
      </html>
    `;

    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.GMAIL_USER}>`,
      to: process.env.CONTACT_RECEIVER,
      replyTo: email,
      subject: subject || `New message from ${name}`,
      html: emailHtml,
    })

    return NextResponse.json({ success: true })

  } catch (error) {
    console.error('Email error:', error)
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    )
  }
}
