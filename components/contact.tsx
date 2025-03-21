"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { EMAIL_ADDRESS, LOCATION, PHONE_NUMBER } from "@/lib/constants"
import { Mail, MapPin, Phone, Send } from "lucide-react"
import { useState } from "react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log(formData)
    alert("Thank you for your message! We'll get back to you soon.")
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    })
  }

  return (
    <section id="contact" className="bg-zinc-950 py-20">
      <div className="container mx-auto px-4">
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
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div>
                  <Input
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="border-zinc-700 bg-zinc-800"
                    required
                  />
                </div>
                <div>
                  <Input
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="border-zinc-700 bg-zinc-800"
                    required
                  />
                </div>
                <div>
                  <Input
                    name="phone"
                    placeholder="Your Phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="border-zinc-700 bg-zinc-800"
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder="Tell us about your project"
                    value={formData.message}
                    onChange={handleChange}
                    className="min-h-[150px] border-zinc-700 bg-zinc-800"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700"
                >
                  Send Message
                  <Send className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </form>
          </div>

          <div>
            <h3 className="mb-6 text-2xl font-bold">Get in Touch</h3>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-accent/20 rounded-lg p-3">
                  <MapPin className="text-accent h-6 w-6" />
                </div>
                <div>
                  <h4 className="mb-1 text-lg font-semibold">Our Location</h4>
                  <p className="text-zinc-400">{LOCATION}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-accent/20 rounded-lg p-3">
                  <Phone className="text-accent-foreground h-6 w-6" />
                </div>
                <div>
                  <h4 className="mb-1 text-lg font-semibold">Phone Number</h4>
                  <p className="text-zinc-400">{PHONE_NUMBER}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-accent/20 rounded-lg p-3">
                  <Mail className="text-accent h-6 w-6" />
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
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday:</span>
                  <span>10:00 AM - 4:00 PM</span>
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
