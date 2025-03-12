"use client"

import type React from "react"
import { useState, type ChangeEvent, type FormEvent } from "react"
import { Shapes } from "@/components/ui/Shaps"

interface FormData {
  name: string
  email: string
  message: string
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({ name: "", email: "", message: "" })
  const [status, setStatus] = useState<string>("")
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value })
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    // Enhanced validation
    if (formData.name.length <= 3) {
      setStatus("Name must be more than 3 characters")
      return
    }

    if (!formData.email.includes("@") || !formData.email.endsWith(".com")) {
      setStatus("Invalid email address. Must contain '@' and end with '.com'")
      return
    }

    if (formData.message.length <= 10) {
      setStatus("Message must be more than 10 characters")
      return
    }

    setIsSubmitting(true)
    setStatus("Sending...")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setStatus("Message sent successfully! We'll get back to you soon.")
        setFormData({ name: "", email: "", message: "" })
      } else {
        setStatus(`Failed to send message: ${data.error || "Please try again"}`)
      }
    } catch (error) {
      console.error("Error sending message:", error)
      setStatus("An error occurred. Please try again later.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-transparent px-4">
      <div className="relative flex flex-col md:flex-row items-center justify-between w-full max-w-4xl gap-8 backdrop-blur-lg bg-white/10 p-8 rounded-2xl shadow-lg text-white">
        <div className="absolute -top-7 -right-7 sm:-top-8 sm:-right-8 opacity-80 z-[9999] pointer-events-none">
          <Shapes className="w-14 h-14 md:w-16 md:h-16" />
        </div>
        <div className="absolute -bottom-7 -left-7 sm:-bottom-8 sm:-left-8 opacity-80 z-[9999] pointer-events-none">
          <Shapes className="w-14 h-14 md:w-16 md:h-16" />
        </div>

        <div className="flex-1">
          <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
          <p className="text-lg text-gray-300 mb-6">
            We would love to hear from you! Whether you have questions, feedback, or just want to say hello, feel free
            to reach out to us using the form on the right.
          </p>
        </div>

        <div className="flex-1 max-w-sm w-full">
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <form className="space-y-3" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block mb-1">Name</label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-2 bg-transparent border border-white/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
                placeholder="Enter your name"
                disabled={isSubmitting}
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-1">Email</label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-2 bg-transparent border border-white/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
                placeholder="Enter your email"
                disabled={isSubmitting}
              />
            </div>
            <div>
              <label htmlFor="message" className="block mb-1">Message</label>
              <textarea
                id="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full p-2 bg-transparent border border-white/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
                placeholder="Enter your message"
                rows={4}
                disabled={isSubmitting}
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-2 bg-red-600/80 hover:bg-red-700/80 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Sending..." : "Send"}
            </button>
            {status && (
              <p
                className={`text-center mt-3 text-sm ${status.includes("success") ? "text-green-300" : "text-gray-300"}`}
              >
                {status}
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
