"use client"

import { motion } from "framer-motion"
import { useState } from "react"

export default function Projects() {
  const [hoveredProject, setHoveredProject] = useState(null)
  const [visibleCount, setVisibleCount] = useState(3)

  const projects = [
    {
      title: "Blog Platform",
      description:
        "A User-Friendly Blog Services. Facilitates Creation, Management, and Interaction with blog platform.",
      technologies: ["MongoDB", "Express.js", "React.js", "Node.js"],
      image: "/blog.png?height=300&width=400",
      link: "#",
      github: "https://github.com/varunesharasu/Blog_Platform",
      status: "Live",
      category: "Full Stack",
      year: "2024",
    },
    {
      title: "RateSync",
      description:
        "A platform that allows users to rate and review various products and services, providing valuable insights and feedback.",
      technologies: ["MongoDB", "React.js", "Node.js", "API", "Bootstrap"],
      image: "/ratesync.png?height=300&width=400",
      link: "https://rate-sync-beta.vercel.app/",
      github: "https://github.com/varunesharasu/RateSync",
      status: "Live",
      category: "Full Stack",
      year: "2024",
    },
    {
      title: "RESORTEASE",
      description:
        "To make the process of booking a resort easier and more efficient, with proper admin management.",
      technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
      image: "/resort.png?height=300&width=400",
      link: "https://resort-zeta.vercel.app/",
      github: "https://github.com/varunesharasu/ResortEase",
      status: "Live",
      category: "Machine Learning",
      year: "2024",
    },
    {
      title: "Portfolio Website",
      description:
        "A personal portfolio website to showcase my skills, projects, and experience.",
      technologies: ["React.js", "Tailwind CSS", "Framer Motion"],
      image: "/portfolio.png?height=300&width=400",
      link: "https://varunesh-portfolio.vercel.app/",
      github: "https://github.com/varunesharasu/Portfolio",
      status: "Live",
      category: "Frontend",
      year: "2024",
    },
    {
      title: "Recipe Finder",
      description:
        "A simple and efficient recipe search app for discovering new dishes.",
      technologies: ["API's", "Node.js", "MongoDB"],
      image: "/recipe.png?height=300&width=400",
      link: "#",
      github: "https://github.com/varunesharasu/Recipe_Finder",
      status: "Live",
      category: "Full Stack",
      year: "2023",
    },
    {
      title: "Weather App",
      description:
        "A weather forecasting app providing real-time weather updates and forecasts.",
      technologies: ["React.js", "API", "Bootstrap"],
      image: "/weather.png?height=300&width=400",
      link: "#",
      github: "https://github.com/varunesharasu/WeatherApp",
      status: "Live",
      category: "Frontend",
      year: "2023",
    },
  ]

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
            className="inline-block px-6 py-3 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 rounded-full text-sm font-medium mb-6 shadow-lg backdrop-blur-sm border border-white/50"
          >
            🚀 My Projects
          </motion.span>
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-800 mb-6">
            Featured{" "}
            <motion.span
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
              className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent bg-300%"
              style={{ backgroundSize: "300% 300%" }}
            >
              Projects
            </motion.span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Here are some of my recent projects built with modern technologies and innovative solutions.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.slice(0, visibleCount).map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              onHoverStart={() => setHoveredProject(index)}
              onHoverEnd={() => setHoveredProject(null)}
              className="group relative"
            >
              <motion.div
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white/90 backdrop-blur-lg rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/50 relative"
              >
                {/* Project Image */}
                <div className="relative h-64 overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                  {/* Year Badge */}
                  <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-gray-700">
                    {project.year}
                  </div>

                  {/* Status Badge */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold ${
                      project.status === "Live" ? "bg-green-500 text-white" : "bg-yellow-500 text-white"
                    }`}
                  >
                    {project.status}
                  </motion.div>

                  {/* Category Badge */}
                  <div className="absolute bottom-4 left-4 px-3 py-1 bg-blue-500/90 backdrop-blur-sm rounded-full text-xs font-semibold text-white">
                    {project.category}
                  </div>

                  {/* Hover Overlay */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredProject === index ? 1 : 0 }}
                    className="absolute inset-0 bg-gradient-to-br from-blue-500/80 to-purple-500/80 flex items-center justify-center"
                  >
                    <div className="flex space-x-4">
                      <motion.a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="bg-white text-gray-800 px-4 py-2 rounded-full font-semibold flex items-center space-x-2 hover:bg-gray-100 transition-colors"
                      >
                        <span>View Live</span>
                        <span>🔗</span>
                      </motion.a>
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="bg-gray-800 text-white px-4 py-2 rounded-full font-semibold flex items-center space-x-2 hover:bg-gray-700 transition-colors"
                      >
                        <span>GitHub</span>
                        <span>📚</span>
                      </motion.a>
                    </div>
                  </motion.div>
                </div>

                {/* Project Content */}
                <div className="p-8">
                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors"
                  >
                    {project.title}
                  </motion.h3>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.1 }}
                    className="text-gray-600 mb-6 leading-relaxed"
                  >
                    {project.description}
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                    className="flex flex-wrap gap-2 mb-6"
                  >
                    {project.technologies.map((tech, idx) => (
                      <motion.span
                        key={idx}
                        whileHover={{ scale: 1.05 }}
                        className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 text-sm px-3 py-1 rounded-full font-medium hover:from-blue-200 hover:to-purple-200 transition-all cursor-default"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                    className="flex space-x-4"
                  >
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-center py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
                    >
                      View Project 🚀
                    </motion.a>
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-4 py-3 border-2 border-gray-300 text-gray-700 rounded-xl font-semibold hover:border-blue-500 hover:text-blue-600 transition-all duration-300"
                    >
                      📚
                    </motion.a>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-16 flex flex-col items-center gap-4"
        >
          <div className="flex flex-row justify-center gap-4">
            <motion.a
              href="https://github.com/varunesharasu"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              View All Projects on GitHub 📂
            </motion.a>
            {visibleCount < projects.length && (
              <motion.button
                onClick={() => setVisibleCount(visibleCount + 3)}
                whileHover={{ scale: 1.08, rotate: 2 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg border-4 border-transparent hover:border-white transition-all duration-300 animate-pulse"
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, #ec4899, #8b5cf6, #3b82f6)",
                }}
              >
                <span className="text-2xl">✨</span>
                <span>View More Projects</span>
                <span className="text-2xl">➕</span>
              </motion.button>
            )}
            {visibleCount >= projects.length && projects.length > 3 && (
              <motion.button
                onClick={() => setVisibleCount(3)}
                whileHover={{ scale: 1.08, rotate: -2 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-gray-400 via-gray-500 to-gray-700 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg border-4 border-transparent hover:border-white transition-all duration-300 animate-bounce"
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, #9ca3af, #6b7280, #374151)",
                }}
              >
                <span className="text-2xl">🔽</span>
                <span>View Less</span>
                <span className="text-2xl">🌙</span>
              </motion.button>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
