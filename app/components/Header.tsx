"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import ThemeToggle from "./ThemeToggle"

interface HeaderProps {
  isScrolled: boolean
}

export default function Header({ isScrolled }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false)
  const navItems = ["About", "Projects", "Experience", "Certificates", "Contact"]

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-lg border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
          >
            OLOGUIE Arlette
          </motion.a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ color: "var(--accent)" }}
                className="text-sm font-medium hover:text-accent transition-colors cursor-pointer dark:text-white"
              >
                {item}
              </motion.a>
            ))}
            <ThemeToggle />
          </nav>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToContact}
            className="bg-accent text-accent-foreground px-6 py-2 rounded-lg font-medium text-sm hover:shadow-lg transition-shadow hidden md:block"
          >
            Get in touch
          </motion.button>

          <motion.button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2" whileTap={{ scale: 0.95 }}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        <motion.nav
          initial={{ opacity: 0, height: 0 }}
          animate={isOpen ? { opacity: 1, height: "auto" } : { opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden pb-4 space-y-2"
        >
          {navItems.map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setIsOpen(false)}
              whileHover={{ x: 8 }}
              className="block text-foreground font-medium py-2 px-4 hover:text-accent transition-colors"
            >
              {item}
            </motion.a>
          ))}

          <motion.button
            onClick={() => {
              scrollToContact()
              setIsOpen(false)
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-accent text-accent-foreground px-4 py-2 rounded-lg font-medium text-sm hover:shadow-lg transition-shadow mt-2"
          >
            Get in touch
          </motion.button>
        </motion.nav>
      </div>
    </motion.header>
  )
}
