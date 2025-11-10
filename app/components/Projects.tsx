"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { ExternalLink, Github } from "lucide-react"

export default function Projects() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })

  const projects = [
    {
      title: "Image Browser and Downloader",
      description: "An image browsing platform with search and download features.",
      tags: ["React", "HTML", "CSS", "JavaScript", "API", "UI Design", "Animation"],
      image: "/ImageBrowser.png",
      links: { 
        live: "https://snapshop-eta.vercel.app/", 
        github: "https://github.com/ciara-gospel/snapshop/tree/main"
      },
    },
    {
      title: "File Upload Service",
      description: "A service where you can upload your files and store it online.",
      tags: ["TypeScript", "AWS", "React", "Node.js"],
      image: "/FileUpload.png",
      links: { 
        live: "https://your-fileupload-app.netlify.app", 
        github: "https://github.com/ciara-gospel/file-storage-frontend"
      },
    },
    {
      title: "MovieApp Design",
      description: "A mobile app for managing movies and exploring content.",
      tags: ["UI Design", "Animation", "JavaScript"],
      image: "/MovieDb.png",
      links: { 
        live: "https://movie-db-js-git-development-arletteologuies-projects.vercel.app/", 
        github: "https://github.com/ciara-gospel/movie-db-js"
      },
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }

  return (
    <section id="projects" ref={ref} className="relative py-20 md:py-32 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent to-primary rounded-full" />
        </motion.div>

        <motion.div
          className="grid md:grid-cols-1 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="group overflow-hidden rounded-xl border border-border bg-card hover:border-accent/50 transition-all duration-300 hover:shadow-xl hover:shadow-accent/10"
            >
              <div className="relative overflow-hidden h-48 bg-muted">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors">{project.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-block px-3 py-1 text-xs font-medium bg-accent/10 text-accent border border-accent/20 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  {/* Live project link */}
                  <motion.a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-2 text-sm font-medium text-accent hover:text-primary transition-colors"
                  >
                    View Project <ExternalLink size={16} />
                  </motion.a>

                  {/* GitHub repo link */}
                  <motion.a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-2 text-sm font-medium text-foreground hover:text-accent transition-colors"
                  >
                    Code <Github size={16} />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
