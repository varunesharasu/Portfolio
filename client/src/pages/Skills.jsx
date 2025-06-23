"use client"

import { motion } from "framer-motion"
import { useState } from "react"

export default function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState(null)

  const skills = [
    // Frontend Skills
    {
      name: "React",
      icon: "⚛️",
      category: "Frontend",
      color: "from-blue-500 to-cyan-400",
      description: "Building dynamic UIs",
    },
    {
      name: "JavaScript",
      icon: "🟨",
      category: "Frontend",
      color: "from-yellow-500 to-orange-400",
      description: "Modern ES6+ features",
    },
    {
      name: "HTML/CSS",
      icon: "🌐",
      category: "Frontend",
      color: "from-orange-500 to-red-400",
      description: "Semantic & responsive",
    },
    {
      name: "Tailwind CSS",
      icon: "💨",
      category: "Frontend",
      color: "from-teal-500 to-blue-400",
      description: "Utility-first styling",
    },
    {
      name: "Vite",
      icon: "⚡",
      category: "Frontend",
      color: "from-purple-500 to-pink-400",
      description: "Lightning fast builds",
    },

    // Backend Skills
    {
      name: "Node.js",
      icon: "🟢",
      category: "Backend",
      color: "from-green-500 to-emerald-400",
      description: "Server-side JavaScript",
    },
    {
      name: "Express",
      icon: "🚂",
      category: "Backend",
      color: "from-gray-600 to-gray-400",
      description: "Web application framework",
    },
    {
      name: "MongoDB",
      icon: "🍃",
      category: "Backend",
      color: "from-green-600 to-green-400",
      description: "NoSQL database",
    },
    {
      name: "REST APIs",
      icon: "🔗",
      category: "Backend",
      color: "from-indigo-500 to-purple-400",
      description: "RESTful services",
    },

    // Tools
    { name: "Git", icon: "📚", category: "Tools", color: "from-red-500 to-pink-400", description: "Version control" },
    {
      name: "VS Code",
      icon: "💙",
      category: "Tools",
      color: "from-blue-600 to-indigo-400",
      description: "Code editor",
    },
    { name: "Figma", icon: "🎨", category: "Tools", color: "from-pink-500 to-purple-400", description: "UI/UX design" },
    { name: "Postman", icon: "📮", category: "Tools", color: "from-orange-500 to-red-400", description: "API testing" },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const skillVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
  }

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-r from-blue-200/20 to-purple-200/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 40, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          className="absolute bottom-20 left-20 w-48 h-48 bg-gradient-to-r from-cyan-200/20 to-blue-200/20 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
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
            className="inline-block px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 rounded-full text-sm font-medium mb-4"
          >
            ⚡ My Expertise
          </motion.span>
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-800 mb-6">
            Technical{" "}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent relative">
              Skills
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="absolute bottom-2 left-0 w-full h-2 bg-gradient-to-r from-blue-400/30 to-purple-400/30 rounded-full"
              />
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Here are the technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={skillVariants}
              whileHover={{
                scale: 1.1,
                y: -10,
                rotateY: 10,
                rotateX: 5,
              }}
              whileTap={{ scale: 0.95 }}
              onHoverStart={() => setHoveredSkill(index)}
              onHoverEnd={() => setHoveredSkill(null)}
              className="group relative"
            >
              <div className="bg-white/70 backdrop-blur-lg p-6 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/50 relative overflow-hidden h-40 flex flex-col items-center justify-center text-center">
                {/* Gradient Background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`}
                />

                {/* Skill Icon */}
                <motion.div
                  animate={
                    hoveredSkill === index
                      ? {
                          scale: [1, 1.2, 1],
                          rotate: [0, 10, -10, 0],
                        }
                      : {}
                  }
                  transition={{ duration: 0.6, repeat: hoveredSkill === index ? Number.POSITIVE_INFINITY : 0 }}
                  className="text-4xl mb-3 relative z-10"
                >
                  {skill.icon}
                </motion.div>

                {/* Skill Name */}
                <h3 className="text-lg font-bold text-gray-800 mb-2 relative z-10 group-hover:text-gray-900 transition-colors">
                  {skill.name}
                </h3>

                {/* Skill Description */}
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={hoveredSkill === index ? { opacity: 1, height: "auto" } : { opacity: 0, height: 0 }}
                  className="text-xs text-gray-600 relative z-10 overflow-hidden"
                >
                  {skill.description}
                </motion.p>

                {/* Category Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={hoveredSkill === index ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                  className={`absolute top-2 right-2 px-2 py-1 bg-gradient-to-r ${skill.color} text-white text-xs rounded-full font-medium`}
                >
                  {skill.category}
                </motion.div>

                {/* Floating Particles */}
                <motion.div
                  animate={{
                    rotate: 360,
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    rotate: { duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                    scale: { duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
                  }}
                  className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-r from-blue-400/30 to-purple-400/30 rounded-full"
                />
                <motion.div
                  animate={{
                    rotate: -360,
                    scale: [1, 0.8, 1],
                  }}
                  transition={{
                    rotate: { duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                    scale: { duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
                  }}
                  className="absolute -bottom-1 -left-1 w-3 h-3 bg-gradient-to-r from-cyan-400/30 to-blue-400/30 rounded-full"
                />

                {/* Hover Glow Effect */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={hoveredSkill === index ? { opacity: 1 } : { opacity: 0 }}
                  className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-20 rounded-3xl blur-xl -z-10`}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Floating Skills Animation */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -20, 0],
                x: [0, 10, 0],
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 4 + i,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: i * 0.5,
              }}
              className={`absolute w-8 h-8 bg-gradient-to-r ${
                [
                  "from-blue-400/20 to-purple-400/20",
                  "from-green-400/20 to-blue-400/20",
                  "from-purple-400/20 to-pink-400/20",
                ][i % 3]
              } rounded-full blur-sm`}
              style={{
                left: `${10 + i * 15}%`,
                top: `${20 + i * 10}%`,
              }}
            />
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)",
              y: -5,
            }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden"
          >
            <motion.div
              animate={{ x: [-100, 100] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
            />
            <span className="relative z-10">Explore My Work 🚀</span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
