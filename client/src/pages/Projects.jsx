"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { useTheme } from "../contexts/ThemeContext"

export default function Projects() {
  const [hoveredProject, setHoveredProject] = useState(null)
  const [selectedFilter, setSelectedFilter] = useState("All")
  const { theme } = useTheme()

  const filters = ["All", "Full Stack", "Frontend", "Backend"]

  const projects = [
    {
      title: "Blog Platform",
      description:
        "A comprehensive blog platform with user authentication, content management, and real-time interactions.",
      technologies: ["MongoDB", "Express.js", "React.js", "Node.js"],
      image: "/blog.png?height=300&width=400",
      link: "https://blog-platform-nine-tau.vercel.app/",
      github: "https://github.com/varunesharasu/Blog_Platform",
      status: "Live",
      category: "Full Stack",
      year: "2024",
      featured: true,
    },
    {
      title: "RateSync",
      description:
        "A modern rating and review platform that provides valuable insights and feedback for products and services.",
      technologies: ["MongoDB", "React.js", "Node.js", "API", "Bootstrap"],
      image: "/ratesync.png?height=300&width=400",
      link: "https://rate-sync-beta.vercel.app/",
      github: "https://github.com/varunesharasu/RateSync",
      status: "Live",
      category: "Full Stack",
      year: "2024",
      featured: true,
    },
    {
      title: "RESORTEASE",
      description: "Streamlined resort booking system with admin management and seamless user experience.",
      technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
      image: "/resort.png?height=300&width=400",
      link: "https://resort-zeta.vercel.app/",
      github: "https://github.com/varunesharasu/ResortEase",
      status: "Live",
      category: "Full Stack",
      year: "2024",
      featured: false,
    },
    {
      title: "Portfolio Website",
      description: "A modern, responsive portfolio showcasing skills, projects, and professional experience.",
      technologies: ["React.js", "Tailwind CSS", "Framer Motion"],
      image: "/portfolio.png?height=300&width=400",
      link: "https://varunesh-portfolio.vercel.app/",
      github: "https://github.com/varunesharasu/Portfolio",
      status: "Live",
      category: "Frontend",
      year: "2024",
      featured: false,
    },
    {
      title: "Recipe Finder",
      description: "Discover new dishes with this intuitive recipe search application.",
      technologies: ["API's", "Node.js", "MongoDB"],
      image: "/recipe.png?height=300&width=400",
      link: "https://culinary-finder.vercel.app/",
      github: "https://github.com/varunesharasu/Recipe_Finder",
      status: "Live",
      category: "Backend",
      year: "2023",
      featured: false,
    },
    {
      title: "EMI Calculator",
      description: "Cross-platform mobile application for calculating loan EMIs with detailed breakdowns.",
      technologies: ["Flutter", "Dart", "Swift", "Java"],
      image: "/emi.png?height=300&width=400",
      link: "https://github.com/varunesharasu/EMI_Calculator",
      github: "https://github.com/varunesharasu/EMI_Calculator",
      status: "Live",
      category: "Frontend",
      year: "2023",
      featured: false,
    },
  ]

  const filteredProjects =
    selectedFilter === "All" ? projects : projects.filter((project) => project.category === selectedFilter)

  return (
    <section className="py-20 px-6 relative overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", bounce: 0.5 }}
            className="inline-block mb-6"
          >
            <div className="relative">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-600 rounded-2xl blur-lg opacity-30"
              />
              <div className="relative bg-slate-800/90 backdrop-blur-sm px-6 py-3 rounded-2xl border border-purple-500/30">
                <span className="text-purple-400 font-semibold">◇ Featured Work</span>
              </div>
            </div>
          </motion.div>

          <h2 className={`text-5xl md:text-7xl font-bold mb-6 ${theme === "light" ? "text-gray-900" : "text-white"}`}>
            <span className={theme === "light" ? "text-gray-900" : "text-white"}>My</span>
            <br />
            <motion.span
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY }}
              className="bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent bg-300%"
              style={{ backgroundSize: "300% 300%" }}
            >
              Projects
            </motion.span>
          </h2>

          <p className={`text-xl max-w-3xl mx-auto leading-relaxed ${theme === "light" ? "text-gray-700" : "text-gray-300"}`}>
            A collection of projects showcasing my skills in modern web development
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {filters.map((filter, index) => (
            <motion.button
              key={filter}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedFilter(filter)}
              className={`relative px-6 py-3 rounded-full font-medium transition-all duration-500 ${
                selectedFilter === filter
                  ? (theme === "light" ? "text-purple-600" : "text-purple-400")
                  : (theme === "light" ? "text-gray-500 hover:text-gray-900" : "text-gray-400 hover:text-white")
              }`}
            >
              {selectedFilter === filter && (
                <motion.div
                  layoutId="filterBg"
                  className="absolute inset-0 bg-slate-800/90 backdrop-blur-sm rounded-full border border-purple-500/30"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10">{filter}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              whileHover={{ y: -10 }}
              onHoverStart={() => setHoveredProject(index)}
              onHoverEnd={() => setHoveredProject(null)}
              className={`group relative ${project.featured ? "md:col-span-2 lg:col-span-1" : ""}`}
            >
              <div className={`relative rounded-3xl overflow-hidden border transition-all duration-500
                ${theme === "light"
                  ? "bg-white/90 border-gray-200 hover:border-purple-400"
                  : "bg-slate-800/50 backdrop-blur-sm border-slate-700/50 hover:border-purple-500/50"
                }`
              }>
                {/* Featured Badge */}
                {project.featured && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className={`absolute top-4 left-4 z-20 px-3 py-1 rounded-full text-xs font-semibold
                      ${theme === "light"
                        ? "bg-gradient-to-r from-purple-400 to-pink-400 text-white"
                        : "bg-gradient-to-r from-purple-500 to-pink-500 text-white"
                      }`
                    }
                  >
                    Featured
                  </motion.div>
                )}

                {/* Project Image */}
                <div className="relative h-64 overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    className="w-full h-full object-cover"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />

                  {/* Status & Year */}
                  <div className="absolute top-4 right-4 flex flex-col gap-2">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        project.status === "Live" ? "bg-green-500/90 text-white" : "bg-yellow-500/90 text-white"
                      }`}
                    >
                      {project.status}
                    </span>
                    <span className="px-3 py-1 bg-slate-800/90 backdrop-blur-sm rounded-full text-xs font-semibold text-gray-300">
                      {project.year}
                    </span>
                  </div>

                  {/* Hover Actions */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredProject === index ? 1 : 0 }}
                    className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm flex items-center justify-center gap-4"
                  >
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white font-semibold flex items-center space-x-2"
                    >
                      <span>View Live</span>
                      <span>→</span>
                    </motion.a>
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="px-6 py-3 bg-slate-800/90 backdrop-blur-sm rounded-full text-cyan-400 font-semibold border border-cyan-500/30"
                    >
                      Code
                    </motion.a>
                  </motion.div>
                </div>

                {/* Project Content */}
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className={`text-2xl font-bold group-hover:text-purple-400 transition-colors
                      ${theme === "light" ? "text-gray-900" : "text-white"}`}>
                      {project.title}
                    </h3>
                    <span className={`px-3 py-1 rounded-full text-xs
                      ${theme === "light" ? "bg-gray-200 text-gray-700" : "bg-slate-700/50 text-gray-400"}`}>
                      {project.category}
                    </span>
                  </div>

                  <p className={`mb-6 leading-relaxed
                    ${theme === "light" ? "text-gray-700" : "text-gray-300"}`}>
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, idx) => (
                      <motion.span
                        key={idx}
                        whileHover={{ scale: 1.05 }}
                        className={`px-3 py-1 rounded-full text-sm border
                          ${theme === "light"
                            ? "bg-blue-100 text-blue-800 border-blue-200"
                            : "bg-slate-700/50 backdrop-blur-sm text-cyan-400 border-cyan-500/20"
                          }`
                        }
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4">
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`flex-1 px-6 py-3 rounded-xl font-semibold text-center hover:shadow-lg transition-all duration-300
                        ${theme === "light"
                          ? "bg-gradient-to-r from-purple-400 to-pink-400 text-white"
                          : "bg-gradient-to-r from-purple-500 to-pink-500 text-white"
                        }`
                      }
                    >
                      View Project
                    </motion.a>
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`px-6 py-3 rounded-xl font-semibold border transition-all duration-300
                        ${theme === "light"
                          ? "bg-gray-200 text-blue-800 border-blue-300 hover:bg-gray-300"
                          : "bg-slate-700/50 backdrop-blur-sm text-cyan-400 border-cyan-500/30 hover:bg-slate-600/50"
                        }`
                      }
                    >
                      Code
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-20"
        >
          <motion.a
            href="https://github.com/varunesharasu"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className={`inline-flex items-center space-x-3 px-8 py-4 rounded-full font-semibold text-lg shadow-2xl
              ${theme === "light"
                ? "bg-gradient-to-r from-cyan-400 to-purple-400 text-white"
                : "bg-gradient-to-r from-cyan-500 to-purple-600 text-white"
              }`
            }
          >
            <span>View All Projects</span>
            <motion.span animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}>
              →
            </motion.span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
