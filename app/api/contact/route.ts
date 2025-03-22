import { NextRequest, NextResponse } from "next/server"
import { contactFormSchema } from "@/lib/schemas/contact-schema"

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
    
    // Here you would typically integrate with an email service like SendGrid, Mailgun, etc.
    // For now, we'll just log the data and return a success response
    console.log("Contact form submission:", {
      name,
      email,
      phone,
      message,
    })
    
    // TODO: Replace with actual email sending logic
    // Example with a hypothetical email service:
    // await sendEmail({
    //   to: "your-business-email@example.com",
    //   from: "no-reply@your-domain.com",
    //   subject: `New contact form submission from ${name}`,
    //   text: `
    //     Name: ${name}
    //     Email: ${email}
    //     Phone: ${phone || "Not provided"}
    //     Message: ${message}
    //   `,
    // })
    
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
