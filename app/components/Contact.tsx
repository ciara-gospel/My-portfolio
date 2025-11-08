"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Mail, Linkedin, Github } from "lucide-react"
import { useState } from "react"

export default function Contact() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 })
  const [formState, setFormState] = useState({ name: "", email: "", message: "" })
  const [submitted, setSubmitted] = useState(false)

  // ✅ Replace these links with your real profiles
  const socialLinks = [
    { icon: Mail, label: "Email", href: "mailto:arletteologuie@gmail.com" },
    { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/ologuie-arlette-078397355/" },
    { icon: Github, label: "GitHub", href: "https://github.com/ciara-gospel" },
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Contact form submitted:", formState)
    setSubmitted(true)
    setTimeout(() => {
      setFormState({ name: "", email: "", message: "" })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <section id="contact" ref={ref} className="relative py-20 md:py-32 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to collaborate?</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            I’d love to hear about your projects and ideas. Feel free to reach out!
          </p>
        </motion.div>

        {/* Contact form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-card border border-border p-8 md:p-12 rounded-2xl mb-12 space-y-6"
        >
          <h3 className="text-2xl font-bold">Send me a message</h3>

          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Your name"
              value={formState.name}
              onChange={(e) => setFormState({ ...formState, name: e.target.value })}
              required
              className="bg-background border border-border rounded-lg px-4 py-3 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all"
            />
            <input
              type="email"
              placeholder="Your email"
              value={formState.email}
              onChange={(e) => setFormState({ ...formState, email: e.target.value })}
              required
              className="bg-background border border-border rounded-lg px-4 py-3 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all"
            />
          </div>

          <textarea
            placeholder="Your message"
            value={formState.message}
            onChange={(e) => setFormState({ ...formState, message: e.target.value })}
            required
            rows={5}
            className="w-full bg-background border border-border rounded-lg px-4 py-3 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all resize-none"
          />

          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-accent text-accent-foreground py-3 rounded-lg font-semibold hover:shadow-lg transition-all"
          >
            {submitted ? "Message sent!" : "Send"}
          </motion.button>
        </motion.form>

        {/* ✅ Social Links with your real profiles */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex justify-center gap-6"
        >
          {socialLinks.map(({ icon: Icon, label, href }, index) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5, scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 + index * 0.1 }}
              className="w-12 h-12 bg-card border border-border rounded-full flex items-center justify-center hover:border-accent/50 hover:bg-accent/10 transition-all group"
              title={label}
            >
              <Icon className="w-5 h-5 group-hover:text-accent transition-colors" />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
