"use client"

import { motion } from "framer-motion"
import { useState } from "react"

export default function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState(null)
  const [selectedCategory, setSelectedCategory] = useState("All")

  const skills = [
    // Languages
    {
      name: "C",
      icon: "🔧",
      category: "Languages",
      color: "from-blue-500 to-cyan-400",
      description: "System programming",
      level: 85,
    },
    {
      name: "Python",
      icon: "🐍",
      category: "Languages",
      color: "from-green-500 to-emerald-400",
      description: "Data science & ML",
      level: 88,
    },

    // Frontend
    {
      name: "React.js",
      icon: "⚛️",
      category: "Frontend",
      color: "from-blue-400 to-cyan-300",
      description: "Building dynamic UIs",
      level: 90,
    },

    // Backend
    {
      name: "Node.js",
      icon: "🟢",
      category: "Backend",
      color: "from-green-400 to-emerald-300",
      description: "Server-side JavaScript",
      level: 85,
    },
    {
      name: "Express.js",
      icon: "🚂",
      category: "Backend",
      color: "from-gray-500 to-gray-300",
      description: "Web application framework",
      level: 82,
    },

    // Database
    {
      name: "MySQL",
      icon: "🗄️",
      category: "Database",
      color: "from-orange-500 to-red-400",
      description: "Relational database",
      level: 80,
    },
    {
      name: "MongoDB",
      icon: "🍃",
      category: "Database",
      color: "from-green-500 to-green-300",
      description: "NoSQL database",
      level: 85,
    },

    // Version Control
    {
      name: "Git",
      icon: "📚",
      category: "Version Control",
      color: "from-red-400 to-pink-300",
      description: "Version control",
      level: 90,
    },
    {
      name: "GitHub",
      icon: "🐙",
      category: "Version Control",
      color: "from-gray-600 to-gray-400",
      description: "Code collaboration",
      level: 88,
    },

    // Design
    {
      name: "Figma",
      icon: "🎨",
      category: "Design",
      color: "from-pink-500 to-purple-400",
      description: "UI/UX design tool",
      level: 75,
    },
  ]

  const interests = [
    {
      name: "Web Development",
      icon: "🌐",
      description: "Full-stack web applications",
      color: "from-blue-500 to-purple-500",
    },
    {
      name: "RDBMS",
      icon: "🗃️",
      description: "Database design & optimization",
      color: "from-green-500 to-teal-500",
    },
  ]

  const categories = ["All", "Languages", "Frontend", "Backend", "Database", "Version Control", "Design"]

  const filteredSkills =
    selectedCategory === "All" ? skills : skills.filter((skill) => skill.category === selectedCategory)

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-white via-blue-50 to-indigo-50 relative overflow-hidden">
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
            whileHover={{ scale: 1.05 }}
            className="inline-block px-6 py-3 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 rounded-full text-sm font-medium mb-6 shadow-lg backdrop-blur-sm border border-white/50"
          >
            ⚡ My Technical Skills
          </motion.span>
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-800 mb-6">
            Skills &{" "}
            <motion.span
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
              className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent relative bg-300%"
              style={{ backgroundSize: "300% 300%" }}
            >
              Expertise
            </motion.span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Technologies and tools I use to build amazing digital experiences
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg"
                  : "bg-white/70 text-gray-700 hover:bg-white/90 shadow-md"
              } backdrop-blur-sm border border-white/50`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mb-16"
        >
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
                transition: {
                  type: "spring",
                  bounce: 0.4,
                  duration: 0.8,
                  delay: index * 0.1,
                },
              }}
              whileHover={{
                scale: 1.1,
                y: -10,
              }}
              whileTap={{ scale: 0.95 }}
              onHoverStart={() => setHoveredSkill(index)}
              onHoverEnd={() => setHoveredSkill(null)}
              className="group relative"
            >
              <div className="bg-white/80 backdrop-blur-lg p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/50 relative overflow-hidden h-40 flex flex-col items-center justify-center text-center">
                {/* Skill Level Progress Bar */}
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ delay: index * 0.1, duration: 1 }}
                  className="absolute top-1 left-1 right-1 h-0.5 bg-gray-200 rounded-full overflow-hidden"
                >
                  <div className={`h-full bg-gradient-to-r ${skill.color} rounded-full`} />
                </motion.div>

                {/* Skill Icon */}
                <motion.div
                  animate={
                    hoveredSkill === index
                      ? {
                          scale: [1, 1.3, 1],
                          rotate: [0, 15, -15, 0],
                        }
                      : {}
                  }
                  transition={{ duration: 0.6, repeat: hoveredSkill === index ? Number.POSITIVE_INFINITY : 0 }}
                  className="text-3xl mb-3 relative z-10"
                >
                  {skill.icon}
                </motion.div>

                {/* Skill Name */}
                <h3 className="text-base font-bold text-gray-800 mb-2 relative z-10 group-hover:text-gray-900 transition-colors">
                  {skill.name}
                </h3>

                {/* Skill Level Percentage */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={hoveredSkill === index ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                  className="text-xs font-bold text-gray-600 mb-1 relative z-10"
                >
                  {skill.level}%
                </motion.div>

                {/* Skill Description */}
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={hoveredSkill === index ? { opacity: 1, height: "auto" } : { opacity: 0, height: 0 }}
                  className="text-xs text-gray-600 relative z-10 overflow-hidden text-center"
                >
                  {skill.description}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Interests Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl font-bold text-gray-800 mb-8">Areas of Interest</h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {interests.map((interest, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white/80 backdrop-blur-lg p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 border border-white/50 relative overflow-hidden"
              >
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.1, 0.2, 0.1],
                  }}
                  transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: index }}
                  className={`absolute inset-0 bg-gradient-to-br ${interest.color} rounded-3xl`}
                />
                <motion.div whileHover={{ scale: 1.2, rotate: 10 }} className="text-4xl mb-4 relative z-10">
                  {interest.icon}
                </motion.div>
                <h4 className="text-xl font-bold text-gray-800 mb-2 relative z-10">{interest.name}</h4>
                <p className="text-gray-600 relative z-10">{interest.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}