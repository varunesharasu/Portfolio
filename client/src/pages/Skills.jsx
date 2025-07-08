"use client"

import { motion } from "framer-motion"
import { useState } from "react"

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [hoveredSkill, setHoveredSkill] = useState(null)

  const skillCategories = [
    { name: "All", icon: "◉" },
    { name: "Frontend", icon: "◈" },
    { name: "Backend", icon: "◇" },
    { name: "Database", icon: "◆" },
    { name: "Tools", icon: "◎" },
  ]

  const skills = [
    // Frontend
    { name: "React.js", level: 90, category: "Frontend", icon: "⚛️", color: "from-cyan-400 to-blue-500" },
    { name: "JavaScript", level: 88, category: "Frontend", icon: "🟨", color: "from-yellow-400 to-orange-500" },
    { name: "HTML5", level: 95, category: "Frontend", icon: "🌐", color: "from-orange-400 to-red-500" },
    { name: "CSS3", level: 85, category: "Frontend", icon: "🎨", color: "from-blue-400 to-purple-500" },
    { name: "Tailwind", level: 90, category: "Frontend", icon: "💨", color: "from-teal-400 to-cyan-500" },

    // Backend
    { name: "Node.js", level: 85, category: "Backend", icon: "🟢", color: "from-green-400 to-emerald-500" },
    { name: "Express.js", level: 82, category: "Backend", icon: "🚂", color: "from-gray-400 to-slate-600" },
    { name: "Python", level: 88, category: "Backend", icon: "🐍", color: "from-blue-500 to-yellow-500" },
    { name: "C", level: 85, category: "Backend", icon: "⚙️", color: "from-blue-600 to-indigo-600" },

    // Database
    { name: "MongoDB", level: 85, category: "Database", icon: "🍃", color: "from-green-500 to-teal-500" },
    { name: "MySQL", level: 80, category: "Database", icon: "🗄️", color: "from-blue-500 to-cyan-500" },

    // Tools
    { name: "Git", level: 90, category: "Tools", icon: "📚", color: "from-orange-500 to-red-500" },
    { name: "GitHub", level: 88, category: "Tools", icon: "🐙", color: "from-gray-600 to-black" },
    { name: "Figma", level: 75, category: "Tools", icon: "🎯", color: "from-purple-500 to-pink-500" },
  ]

  const filteredSkills =
    selectedCategory === "All" ? skills : skills.filter((skill) => skill.category === selectedCategory)

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
                transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-2xl blur-lg opacity-30"
              />
              <div className="relative bg-slate-800/90 backdrop-blur-sm px-6 py-3 rounded-2xl border border-cyan-500/30">
                <span className="text-cyan-400 font-semibold">◈ Technical Arsenal</span>
              </div>
            </div>
          </motion.div>

          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-white">Skills &</span>
            <br />
            <motion.span
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY }}
              className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent bg-300%"
              style={{ backgroundSize: "300% 300%" }}
            >
              Expertise
            </motion.span>
          </h2>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Technologies and tools I use to craft exceptional digital experiences
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {skillCategories.map((category, index) => (
            <motion.button
              key={category.name}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category.name)}
              className={`relative px-6 py-3 rounded-full font-medium transition-all duration-500 ${
                selectedCategory === category.name ? "text-cyan-400" : "text-gray-400 hover:text-white"
              }`}
            >
              {selectedCategory === category.name && (
                <motion.div
                  layoutId="categoryBg"
                  className="absolute inset-0 bg-slate-800/90 backdrop-blur-sm rounded-full border border-cyan-500/30"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10 flex items-center space-x-2">
                <span>{category.icon}</span>
                <span>{category.name}</span>
              </span>
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div layout className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              layout
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                delay: index * 0.1,
                type: "spring",
                bounce: 0.4,
                duration: 0.8,
              }}
              whileHover={{
                scale: 1.05,
                y: -10,
                transition: { duration: 0.2 },
              }}
              onHoverStart={() => setHoveredSkill(index)}
              onHoverEnd={() => setHoveredSkill(null)}
              className="group relative"
            >
              <div className="relative bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-500 h-40 flex flex-col items-center justify-center text-center">
                {/* Glow Effect */}
                <motion.div
                  animate={hoveredSkill === index ? { opacity: 0.3 } : { opacity: 0 }}
                  className={`absolute inset-0 bg-gradient-to-r ${skill.color} rounded-2xl blur-xl`}
                />

                {/* Progress Ring */}
                <div className="absolute top-2 right-2 w-8 h-8">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                    <path
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="rgba(148, 163, 184, 0.2)"
                      strokeWidth="2"
                    />
                    <motion.path
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="url(#gradient)"
                      strokeWidth="2"
                      strokeDasharray={`${skill.level}, 100`}
                      initial={{ strokeDasharray: "0, 100" }}
                      whileInView={{ strokeDasharray: `${skill.level}, 100` }}
                      transition={{ delay: index * 0.1, duration: 1 }}
                    />
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#06b6d4" />
                        <stop offset="100%" stopColor="#8b5cf6" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>

                {/* Icon */}
                <motion.div
                  animate={
                    hoveredSkill === index
                      ? {
                          scale: [1, 1.3, 1],
                          rotate: [0, 10, -10, 0],
                        }
                      : {}
                  }
                  transition={{ duration: 0.6 }}
                  className="text-4xl mb-3 relative z-10"
                >
                  {skill.icon}
                </motion.div>

                {/* Name */}
                <h3 className="text-lg font-bold text-white mb-2 relative z-10">{skill.name}</h3>

                {/* Level */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={hoveredSkill === index ? { opacity: 1 } : { opacity: 0 }}
                  className="text-sm text-cyan-400 font-semibold relative z-10"
                >
                  {skill.level}%
                </motion.div>

                {/* Category Badge */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={hoveredSkill === index ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  className="absolute bottom-2 left-2 px-2 py-1 bg-slate-700/80 backdrop-blur-sm rounded-lg text-xs text-gray-300"
                >
                  {skill.category}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { number: "10+", label: "Technologies", icon: "⚡" },
            { number: "3+", label: "Years Learning", icon: "📚" },
            { number: "15+", label: "Projects Built", icon: "🚀" },
            { number: "100%", label: "Passion", icon: "❤️" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 + 0.6 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="relative bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 text-center group"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />

              <div className="relative z-10">
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-bold text-white mb-1">{stat.number}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
