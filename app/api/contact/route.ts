import "dotenv/config";
import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json()

    // Validate form inputs
    if (!name || !email || !message) {
      return NextResponse.json({ error: "Name, email, and message are required" }, { status: 400 })
    }

    console.log("Environment Variables:")
    console.log("EMAIL_USER:", process.env.EMAIL_USER)
    console.log("EMAIL_PASSWORD exists:", !!process.env.EMAIL_PASSWORD)
    console.log("EMAIL_PASSWORD length:", process.env.EMAIL_PASSWORD?.length)

    // Create a transporter
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    })

    // Test the connection
    try {
      await transporter.verify()
      console.log("SMTP connection verified successfully")
    } catch (verifyError) {
      console.error("SMTP connection verification failed:", verifyError)
      throw verifyError
    }

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "nabdmasr.team@gmail.com",
      subject: `New Contact Form Submission from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        
        Message:
        ${message}
      `,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <h4>Message:</h4>
        <p>${message}</p>
      `,
    }

    // Send email
    const info = await transporter.sendMail(mailOptions)
    console.log("Email sent successfully:", info.response)

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error sending email:", error);
    const message = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json({ error: "Failed to send email", details: message }, { status: 500 });
  }  
}

