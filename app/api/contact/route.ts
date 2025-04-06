import { contactFormSchema } from "@/lib/schemas/contact-schema"
import { NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

// Create a transporter object using SMTP transport
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || "smtp.example.com",
  port: parseInt(process.env.SMTP_PORT || "587"),
  secure: process.env.SMTP_SECURE === "true", // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER || "your-email@example.com",
    pass: process.env.SMTP_PASSWORD || "your-password",
  },
})

// Function to send email using Nodemailer
async function sendEmail({
  to,
  from,
  subject,
  text,
  html,
}: {
  to: string
  from: string
  subject: string
  text: string
  html?: string // Optional: HTML version of the message
}) {
  try {
    const info = await transporter.sendMail({
      from,
      to,
      subject,
      text,
      html, // Optional: HTML version of the message
    })

    console.log("Message sent: %s", info.messageId)
    return info
  } catch (error) {
    console.error("Error sending email:", error)
    throw error
  }
}

export async function POST(req: NextRequest) {
  try {
    // Parse the request body
    const body = await req.json()

    // Validate the form data
    const result = contactFormSchema.safeParse(body)

    if (!result.success) {
      // Return validation errors
      return NextResponse.json(
        { error: "Invalid form data", details: result.error.format() },
        { status: 400 }
      )
    }

    const { name, email, phone, message } = result.data

    // Send email using Nodemailer
    await sendEmail({
      to: process.env.CONTACT_EMAIL || "your-business-email@example.com",
      from: process.env.FROM_EMAIL || "no-reply@your-domain.com",
      subject: `New contact form submission from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone || "Not provided"}
        Message: ${message}
      `,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    })

    return NextResponse.json(
      { success: true, message: "Your message has been sent successfully!" },
      { status: 200 }
    )
  } catch (error) {
    console.error("Error processing contact form:", error)
    return NextResponse.json(
      { error: "Failed to send message. Please try again later." },
      { status: 500 }
    )
  }
}
