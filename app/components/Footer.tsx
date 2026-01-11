"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socials = [
    { icon: Github, href: "https://github.com/ciara-gospel", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/ologuie-arlette-078397355/", label: "LinkedIn" },
    { icon: Mail, href: "mailto:arletteologuie@gmail.com", label: "Email" },
  ]

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Certificates", href: "#certificates"},
    {name: "Contact", href: "#contact"},
  ]

  return (
    <footer className="bg-card border-t border-border mt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-6 py-12 text-center"
      >
        <h3 className="text-3xl font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent mb-3">
          Portfolio
        </h3>
        <p className="text-muted-foreground mb-8">
          Passionate digital creator focused on innovation and user experience.
        </p>

        <div className="flex flex-wrap justify-center gap-6 mb-8">
          {navLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              whileHover={{ scale: 1.1, y: -2 }}
              className="text-sm text-muted-foreground hover:text-accent transition-colors"
            >
              {link.name}
            </motion.a>
          ))}
        </div>

        <div className="flex justify-center gap-5 mb-8">
          {socials.map(({ icon: Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="w-10 h-10 flex items-center justify-center rounded-full border border-border bg-background hover:border-accent/60 hover:bg-accent/10 transition-all group"
              title={label}
            >
              <Icon className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors" />
            </motion.a>
          ))}
        </div>

        <div className="border-t border-border pt-6">
          <p className="text-muted-foreground text-sm">
            © {currentYear} <span className="text-accent font-medium">Portfolio</span>. All rights reserved.
          </p>
        </div>
      </motion.div>
    </footer>
  )
}
