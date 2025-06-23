"use client"

import { motion } from "framer-motion"

export default function Education() {
  const education = [
    {
      degree: "Bachelor of Technology in Information Technology",
      institution: "Kongu Engineering College",
      year: "2022 - 2026",
      description: "Specialized in Web Technologies and Distributed Systems. Thesis on React Performance Optimization.",
      icon: "🎓",
      color: "from-blue-500 to-cyan-500",
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "The Optimus Public School",
      year: "2021 - 2022",
      description: "Graduated with honors. Coursework included Algorithms, Database Systems, and Web Development.",
      icon: "📚",
      color: "from-green-500 to-emerald-500",
    },
    {
      degree: "Secondary School Leaving Certificate (SSLC)",
      institution: "The Optimus Public School",
      year: "2019 - 2020",
      description: "Focus on Mathematics and Physics. Participated in programming competitions and science fairs.",
      icon: "🏫",
      color: "from-purple-500 to-pink-500",
    },
  ]

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-white via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-r from-blue-200/20 to-purple-200/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-20 left-20 w-64 h-64 bg-gradient-to-r from-cyan-200/20 to-blue-200/20 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto max-w-5xl relative z-10">
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
            🎓 My Journey
          </motion.span>
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-800 mb-6">
            Education &{" "}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent relative">
              Background
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="absolute bottom-2 left-0 w-full h-2 bg-gradient-to-r from-blue-400/30 to-purple-400/30 rounded-full"
              />
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            My academic journey and the foundation that shaped my passion for technology
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-indigo-500 rounded-full hidden md:block" />

          <div className="space-y-12">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                className="relative pl-0 md:pl-20 group"
              >
                {/* Timeline Dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: index * 0.2 + 0.3, type: "spring", bounce: 0.5 }}
                  whileHover={{ scale: 1.2 }}
                  className={`absolute left-6 top-8 w-6 h-6 bg-gradient-to-br ${edu.color} rounded-full shadow-lg hidden md:block z-10`}
                >
                  <div className="absolute inset-1 bg-white rounded-full" />
                  <div className={`absolute inset-2 bg-gradient-to-br ${edu.color} rounded-full`} />
                </motion.div>

                {/* Floating Icon */}
                <motion.div
                  initial={{ opacity: 0, scale: 0, rotate: -180 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ delay: index * 0.2 + 0.5, type: "spring", bounce: 0.6 }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="absolute -left-2 top-4 bg-white rounded-full p-3 shadow-lg hidden md:block z-20"
                >
                  <span className="text-2xl">{edu.icon}</span>
                </motion.div>

                {/* Content Card */}
                <motion.div
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-white/80 backdrop-blur-lg p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/50 relative overflow-hidden group-hover:border-blue-200"
                >
                  {/* Gradient Background */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${edu.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`}
                  />

                  <div className="relative z-10">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.2 + 0.4 }}
                      className="flex flex-col md:flex-row md:items-center md:justify-between mb-4"
                    >
                      <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-2 md:mb-0 group-hover:text-blue-600 transition-colors">
                        {edu.degree}
                      </h3>
                      <motion.span
                        whileHover={{ scale: 1.05 }}
                        className={`inline-block bg-gradient-to-r ${edu.color} text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg`}
                      >
                        {edu.year}
                      </motion.span>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.2 + 0.5 }}
                      className="flex items-center text-gray-600 mb-4"
                    >
                      <span className="text-lg mr-2">🏛️</span>
                      <span className="font-semibold text-lg">{edu.institution}</span>
                    </motion.div>

                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.2 + 0.6 }}
                      className="text-gray-600 leading-relaxed text-lg border-t border-gray-100 pt-4"
                    >
                      {edu.description}
                    </motion.p>
                  </div>

                  {/* Decorative Elements */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                    className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full"
                  />
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                    className="absolute -bottom-2 -left-2 w-6 h-6 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-full"
                  />

                  {/* Hover Effect Lines */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${edu.color} origin-left`}
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Achievement Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { number: "4+", label: "Years of Study", icon: "📖" },
            { number: "95%", label: "Average Grade", icon: "⭐" },
            { number: "10+", label: "Projects Completed", icon: "🚀" },
            { number: "5+", label: "Certifications", icon: "🏆" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 + 0.9 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white/70 backdrop-blur-lg p-6 rounded-2xl text-center shadow-lg hover:shadow-xl transition-all duration-300 border border-white/50"
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-3xl font-bold text-gray-800 mb-1">{stat.number}</div>
              <div className="text-gray-600 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
