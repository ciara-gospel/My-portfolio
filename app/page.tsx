"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Header from "./components/Header"
import Hero from "./components/Hero"
import About from "./components/About"
import Projects from "./components/Projects"
import Experience from "./components/Experience"
import Certificates from "./components/Certificates"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <main className="bg-background text-foreground overflow-hidden">
      <Header isScrolled={isScrolled} />
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Certificates/>
        <Contact />
        <Footer />
      </motion.div>
    </main>
  )
}
