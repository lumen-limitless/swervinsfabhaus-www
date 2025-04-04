"use client"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { EMAIL_ADDRESS, LOCATION, PHONE_NUMBER } from "@/lib/constants"
import {
  contactFormSchema,
  ContactFormValues,
} from "@/lib/schemas/contact-schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { Mail, MapPin, Phone, Send } from "lucide-react"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { toast } from "sonner"

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  })

  async function onSubmit(data: ContactFormValues) {
    try {
      // Set loading state
      setIsSubmitting(true)

      // Send the form data to our API route
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || "Failed to send message")
      }

      // Show success message
      toast.success("Thank you for your message! We'll get back to you soon.")
      form.reset()
    } catch (error) {
      // Show error message
      toast.error(
        error instanceof Error
          ? error.message
          : "Failed to send message. Please try again."
      )
      console.error("Contact form error:", error)
    } finally {
      // Reset loading state
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="bg-zinc-950 py-20">
      <div className="container">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Contact Us</h2>
          <p className="mx-auto max-w-2xl text-zinc-400">
            Ready to bring your ideas to life? Get in touch with our team to
            discuss your project.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-8">
            <h3 className="mb-6 text-2xl font-bold">Send Us a Message</h3>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Your Name"
                          className="border-zinc-700 bg-zinc-800"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="Your Email"
                          className="border-zinc-700 bg-zinc-800"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone (Optional)</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Your Phone"
                          className="border-zinc-700 bg-zinc-800"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Tell us about your project"
                          className="min-h-[150px] border-zinc-700 bg-zinc-800"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-linear-to-r from-accent to-[#61367a] text-white hover:brightness-90"
                >
                  {isSubmitting ? (
                    <>Sending...</>
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>
            </Form>
          </div>

          <div>
            <h3 className="mb-6 text-2xl font-bold">Get in Touch</h3>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="rounded-lg bg-accent/20 p-3">
                  <MapPin className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h4 className="mb-1 text-lg font-semibold">Our Location</h4>
                  <p className="text-zinc-400">{LOCATION}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="rounded-lg bg-accent/20 p-3">
                  <Phone className="h-6 w-6 text-accent-foreground" />
                </div>
                <div>
                  <h4 className="mb-1 text-lg font-semibold">Phone Number</h4>
                  <p className="text-zinc-400">{PHONE_NUMBER}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="rounded-lg bg-accent/20 p-3">
                  <Mail className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h4 className="mb-1 text-lg font-semibold">Email Address</h4>
                  <p className="text-zinc-400">{EMAIL_ADDRESS}</p>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <h3 className="mb-6 text-2xl font-bold">Business Hours</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span>10:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday:</span>
                  <span>Closed</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday:</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
