"use client"

import { useEffect, useState } from "react"
import { Sun, Moon } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light")

  useEffect(() => {
    // Vérifie le thème sauvegardé
    const savedTheme = localStorage.getItem("theme")
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark")
      setTheme("dark")
    } else {
      document.documentElement.classList.remove("dark")
      setTheme("light")
    }
  }, [])

  const toggleTheme = () => {
    if (theme === "light") {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
      setTheme("dark")
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
      setTheme("light")
    }
  }

  return (
    <motion.button
      onClick={toggleTheme}
      whileTap={{ scale: 0.9 }}
      className="w-10 h-10 flex items-center justify-center rounded-full border border-border bg-card hover:bg-accent/10 transition-all"
      aria-label="Toggle theme"
    >
      <AnimatePresence mode="wait" initial={false}>
        {theme === "light" ? (
          <motion.div
            key="sun"
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 90, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Sun className="w-5 h-5 text-foreground" />
          </motion.div>
        ) : (
          <motion.div
            key="moon"
            initial={{ rotate: 90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: -90, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Moon className="w-5 h-5 text-foreground" />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  )
}
