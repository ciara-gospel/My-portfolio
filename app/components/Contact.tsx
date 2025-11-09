"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Mail, Linkedin, Github, Send } from "lucide-react"

export default function Contact() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormState({ name: "", email: "", message: "" })
    }, 2500)
  }

  const socialLinks = [
    { icon: Mail, label: "Email", href: "mailto:arletteologuie@gmail.com" },
    { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/ologuie-arlette-078397355/" },
    { icon: Github, label: "GitHub", href: "https://github.com/ciara-gospel" },
  ]

  return (
    <section
      id="contact"
      className="relative py-16 md:py-24 px-4 bg-background text-foreground"
    >
      {/* Header */}
      <div className="relative max-w-3xl mx-auto text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-3 text-primary">Contact Me</h2>
        <p className="text-muted-foreground">
          Got a question? Send me a message, and I’ll get back to you soon.
        </p>
      </div>

      {/* Glass Card */}
      <div className="relative max-w-lg mx-auto bg-card/40 border border-border/50 rounded-2xl p-8 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.2)] hover:shadow-[0_12px_40px_rgb(0,0,0,0.3)] transition-all duration-500">
        <h3 className="text-2xl font-semibold mb-2 text-accent text-left">Get in Touch</h3>
        <p className="text-sm text-muted-foreground mb-6 text-left">
          Have something to discuss? Send me a message and let's talk.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            value={formState.name}
            onChange={(e) => setFormState({ ...formState, name: e.target.value })}
            required
            className="w-full bg-transparent border border-border rounded-lg px-4 py-3 text-sm placeholder-muted-foreground focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/40 transition-all"
          />
          <input
            type="email"
            placeholder="Your Email"
            value={formState.email}
            onChange={(e) => setFormState({ ...formState, email: e.target.value })}
            required
            className="w-full bg-transparent border border-border rounded-lg px-4 py-3 text-sm placeholder-muted-foreground focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/40 transition-all"
          />
          <textarea
            placeholder="Your Message"
            rows={4}
            value={formState.message}
            onChange={(e) => setFormState({ ...formState, message: e.target.value })}
            required
            className="w-full bg-transparent border border-border rounded-lg px-4 py-3 text-sm placeholder-muted-foreground focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/40 transition-all resize-none"
          />

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-accent text-accent-foreground font-medium py-3 rounded-lg shadow-md hover:shadow-[0_0_20px_var(--accent)/40] transition-all"
          >
            <Send className="w-4 h-4" />
            {submitted ? "Message Sent!" : "Send Message"}
          </motion.button>
        </form>

        {/* Divider */}
        <div className="border-t border-border/50 my-6" />

        {/* Social Links */}
        <div className="text-left">
          <h4 className="text-accent font-medium mb-4">Connect With Me</h4>
          <div className="flex gap-4">
            {socialLinks.map(({ icon: Icon, label, href }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3, scale: 1.05 }}
                className="w-10 h-10 rounded-lg flex items-center justify-center border border-border hover:border-accent hover:bg-accent/10 transition-all"
              >
                <Icon className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
