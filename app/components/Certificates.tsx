"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from "next/image"

export default function Certificates() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 })

  const certificates = [
    {
      title: "React Basic",
      issuer: "HackerRank",
      date: "2025",
      description: "Advanced React patterns and performance optimization.",
      skills: ["React", "Performance", "State Management"],
      image: "/react.png",
    },
    {
      title: "Node.js Basic",
      issuer: "HackerRank",
      date: "2025",
      description: "Mastering the fundamentals of Node.js with app router and API routes.",
      skills: ["Node.js", "Databases"],
      image: "/node-basic.png",
    },
    {
      title: "JavaScript Basic",
      issuer: "HackerRank",
      date: "2025",
      description: "Code implementation, API calls, and logical problem solving.",
      skills: ["API", "Code Implementation", "Logic"],
      image: "/javascript-basic.png",
    },
    {
      title: "JavaScript Intermediate",
      issuer: "HackerRank",
      date: "2025",
      description: "Mastery of modern JavaScript features and asynchronous programming.",
      skills: ["JavaScript", "API", "Async"],
      image: "/js-intermediate.png",
    },
  ]

  return (
    <section id="certificates" ref={ref} className="relative py-20 md:py-32 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Certificates</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent to-primary rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="h-full bg-card border border-border rounded-xl overflow-hidden hover:border-accent/50 transition-all">
                <div className="relative w-full h-40 overflow-hidden bg-muted">
                  <Image
                    src={cert.image || "/placeholder.svg"}
                    alt={cert.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-foreground mb-1">{cert.title}</h3>
                      <p className="text-accent font-semibold text-sm">{cert.issuer}</p>
                    </div>
                    <span className="text-xs text-muted-foreground whitespace-nowrap ml-2 px-3 py-1 bg-accent/10 rounded-full">
                      {cert.date}
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm mb-4">{cert.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="inline-block px-2.5 py-1 text-xs font-medium bg-accent/10 text-accent rounded-full border border-accent/20"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
