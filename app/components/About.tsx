"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function About() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 })

  const skills = ["React", "TypeScript", "Next.js", "Tailwind CSS", "NodeJs", "UI/UX Design", "NestJs", "Figma", "React Native", "HTML & CSS", "JavaScript", "Git & GitHub", "Cloud Services", "Robotic"]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  return (
    <section id="about" ref={ref} className="relative py-20 md:py-32 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent to-primary rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Passionate about creating engaging digital experiences, I combine design and development to
              build innovative solutions.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              With one year of experience in the field, I strive to turn challenges into opportunities
              for innovation.
            </p>

            <div>
              <h3 className="text-xl font-semibold mb-6">Key Skills</h3>
              <motion.div
                className="grid grid-cols-2 gap-4"
                variants={containerVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
              >
                {skills.map((skill) => (
                  <motion.div
                    key={skill}
                    whileHover={{ x: 10 }}
                    className="flex items-center gap-3 p-3 bg-accent/10 border border-accent/20 rounded-lg hover:border-accent/50 transition-all cursor-pointer"
                  >
                    <div className="w-2 h-2 bg-accent rounded-full" />
                    <span className="font-medium">{skill}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* Right content - Stat cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 gap-6"
          >
            {[
              { number: "50%", label: "Completed Projects" },
              { number: "1", label: "Year of Experience" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                className="p-8 bg-card border border-border rounded-xl text-center hover:border-accent/30 transition-all"
              >
                <div className="text-3xl md:text-4xl font-bold text-accent mb-2">{stat.number}</div>
                <p className="text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
