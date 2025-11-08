"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function Experience() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 })

  const experiences = [
    {
      role: "Frontend Developer",
      period: "2024 - Présent",
      description: "Développement d'interfaces complexes et optimisation des performances.",
      highlights: ["React", "TypeScript", "Performance"],
    },
    {
      role: "Full Stack Developer",
      period: "2024 - 2025",
      description: "Création de solutions web complètes du frontend au backend.",
      highlights: ["Next.js", "Node.js", "Databases"],
    },
    {
      role: "Junior Developer",
      period: "2024 - 2025",
      description: "Apprentissage et contribution à des projets innovants.",
      highlights: ["JavaScript", "React", "Problem Solving"],
    },
  ]

  return (
    <section id="experience" ref={ref} className="relative py-20 md:py-32 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Expérience</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent to-primary rounded-full" />
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-accent via-primary to-accent transform md:-translate-x-1/2" />

          {/* Experience items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`relative md:grid md:grid-cols-2 gap-8 ${index % 2 === 1 ? "md:direction-rtl" : ""}`}
              >
                {/* Timeline dot */}
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  className="absolute left-0 md:left-1/2 top-0 w-4 h-4 bg-accent border-4 border-background rounded-full transform md:-translate-x-1/2 -translate-x-1.5 z-10"
                />

                {/* Content */}
                <motion.div
                  whileHover={{ x: index % 2 === 0 ? 10 : -10 }}
                  className={`pt-2 pl-8 md:pl-0 ${index % 2 === 1 ? "md:text-right" : ""}`}
                >
                  <div className="bg-card border border-border p-6 rounded-xl hover:border-accent/50 transition-all">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="text-xl font-bold text-foreground">{exp.role}</h3>
                      </div>
                      <span className="text-sm text-muted-foreground whitespace-nowrap ml-4">{exp.period}</span>
                    </div>
                    <p className="text-muted-foreground mb-4">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.highlights.map((highlight) => (
                        <span
                          key={highlight}
                          className="inline-block px-3 py-1 text-xs font-medium bg-accent/10 text-accent rounded-full border border-accent/20"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* Empty space for odd items */}
                <div className="hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
