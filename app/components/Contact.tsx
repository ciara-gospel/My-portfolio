"use client"

import { motion } from "framer-motion"
import { Mail, Linkedin, Github } from "lucide-react"

export default function Contact() {
  const socialLinks = [
    { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/ologuie-arlette-078397355/" },
    { icon: Github, label: "GitHub", href: "https://github.com/ciara-gospel" },
  ]

  return (
    <section id="contact" className="relative py-16 md:py-24 px-4 bg-background text-foreground">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-3 text-primary">Contact Me</h2>
        <p className="text-muted-foreground">
          Got a question or want to work together? Let’s connect below.
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-lg mx-auto bg-card/40 border border-border/50 rounded-2xl p-8 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.2)] hover:shadow-[0_12px_40px_rgb(0,0,0,0.3)] transition-all duration-500 text-center"
      >
        <h3 className="text-2xl font-semibold mb-2 text-accent">Get in Touch</h3>
        <p className="text-sm text-muted-foreground mb-6">
          I’d love to hear from you! Click below to send me an email directly.
        </p>

        <motion.a
          href="mailto:arletteologuie@gmail.com"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:shadow-[0_0_20px_var(--accent)/40] transition-all"
        >
          <Mail className="w-5 h-5" />
          Send Email
        </motion.a>

        <div className="border-t border-border/50 my-8" />

        <div>
          <h4 className="text-accent font-medium mb-4">Connect With Me</h4>
          <div className="flex justify-center gap-4">
            {socialLinks.map(({ icon: Icon, label, href }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3, scale: 1.05 }}
                className="w-10 h-10 rounded-lg flex items-center justify-center border border-border hover:border-accent hover:bg-accent/10 transition-all"
              >
                <Icon className="w-5 h-5 text-muted-foreground hover:text-accent transition-colors" />
              </motion.a>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
