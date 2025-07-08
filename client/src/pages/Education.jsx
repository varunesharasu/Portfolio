"use client"

import { motion } from "framer-motion"
import { useState } from "react"

export default function Education() {
  const [selectedEducation, setSelectedEducation] = useState(null)

  const education = [
    {
      degree: "Bachelor of Information Technology",
      institution: "Kongu Engineering College",
      year: "2022 - 2026",
      description:
        "Currently pursuing Bachelor of Information Technology with focus on modern software development, web technologies, and system design.",
      icon: "🎓",
      color: "from-cyan-400 to-blue-500",
      gpa: "7.41/10",
      location: "Perundurai, Tamil Nadu",
      achievements: [
        "First place in INNOVENTURES competition",
        "Third place in Paper Presentation",
        "Selected for Smart India Hackathon 2024",
        "Active member of technical clubs",
      ],
      subjects: [
        "Data Structures & Algorithms",
        "Web Development",
        "Database Management Systems",
        "Software Engineering",
        "Computer Networks",
        "Operating Systems",
      ],
      projects: 6,
      certifications: 1,
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "The Optimus Public School",
      year: "2021 - 2022",
      description:
        "Completed higher secondary education with focus on Mathematics, Physics, and Chemistry, building strong analytical foundation.",
      icon: "📚",
      color: "from-purple-400 to-pink-500",
      gpa: "67.4%",
      location: "Erode, Tamil Nadu",
      achievements: [
        "Strong performance in Mathematics",
        "Consistent academic progress",
        "Active participation in school activities",
        "Foundation for engineering studies",
      ],
      subjects: ["Mathematics", "Physics", "Chemistry", "Computer Science", "English"],
      projects: 2,
      certifications: 0,
    },
    {
      degree: "Secondary School Leaving Certificate (SSLC)",
      institution: "The Optimus Public School",
      year: "2019 - 2020",
      description:
        "Completed secondary education with good grades, developing strong foundation in core subjects and discovering interest in technology.",
      icon: "🏫",
      color: "from-green-400 to-teal-500",
      gpa: "67.8%",
      location: "Erode, Tamil Nadu",
      achievements: [
        "Good academic performance",
        "Developed interest in computer science",
        "Strong foundation in mathematics",
        "Prepared for higher secondary studies",
      ],
      subjects: ["Mathematics", "Science", "Social Studies", "English", "Computer Applications"],
      projects: 1,
      certifications: 0,
    },
  ]

  return (
    <section className="py-20 px-6 relative overflow-hidden">
      <div className="container mx-auto max-w-6xl">
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
                transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                className="absolute inset-0 bg-gradient-to-r from-green-400 to-cyan-600 rounded-2xl blur-lg opacity-30"
              />
              <div className="relative bg-slate-800/90 backdrop-blur-sm px-6 py-3 rounded-2xl border border-green-500/30">
                <span className="text-green-400 font-semibold">◎ Academic Journey</span>
              </div>
            </div>
          </motion.div>

          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-white">Education &</span>
            <br />
            <motion.span
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY }}
              className="bg-gradient-to-r from-green-400 via-cyan-500 to-blue-500 bg-clip-text text-transparent bg-300%"
              style={{ backgroundSize: "300% 300%" }}
            >
              Background
            </motion.span>
          </h2>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            My academic foundation that shaped my passion for technology and innovation
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-400 via-purple-500 to-green-400 rounded-full hidden md:block">
            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              className="absolute top-0 w-4 h-4 bg-cyan-400 rounded-full -left-1.5 shadow-lg shadow-cyan-400/50"
            />
          </div>

          <div className="space-y-16">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -100 }}
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
                  className={`absolute left-6 top-8 w-10 h-10 bg-gradient-to-r ${edu.color} rounded-full shadow-xl hidden md:flex items-center justify-center z-10 cursor-pointer border-2 border-slate-900`}
                  onClick={() => setSelectedEducation(selectedEducation === index ? null : index)}
                >
                  <span className="text-white text-lg">{edu.icon}</span>
                </motion.div>

                {/* Content Card */}
                <motion.div
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="relative bg-slate-800/50 backdrop-blur-sm p-8 rounded-3xl border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-500 group"
                >
                  {/* Glow Effect */}
                  <motion.div
                    animate={{ opacity: [0, 0.1, 0] }}
                    transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                    className={`absolute inset-0 bg-gradient-to-r ${edu.color} rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                  />

                  <div className="relative z-10">
                    {/* Header */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.2 + 0.4 }}
                      className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6"
                    >
                      <div className="flex-1">
                        <div className="flex items-center gap-4 mb-4 md:hidden">
                          <div
                            className={`w-12 h-12 bg-gradient-to-r ${edu.color} rounded-2xl flex items-center justify-center text-xl`}
                          >
                            {edu.icon}
                          </div>
                          <motion.span
                            whileHover={{ scale: 1.05 }}
                            className={`px-4 py-2 bg-gradient-to-r ${edu.color} text-white rounded-full text-sm font-semibold`}
                          >
                            {edu.year}
                          </motion.span>
                        </div>

                        <h3 className="text-2xl lg:text-3xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                          {edu.degree}
                        </h3>

                        <div className="space-y-2 mb-4">
                          <div className="flex items-center text-gray-300">
                            <span className="text-lg mr-3">🏛️</span>
                            <span className="font-semibold">{edu.institution}</span>
                          </div>
                          <div className="flex items-center text-gray-400 text-sm">
                            <span className="mr-3">📍</span>
                            <span>{edu.location}</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col items-end mt-4 lg:mt-0">
                        <motion.span
                          whileHover={{ scale: 1.05 }}
                          className={`hidden md:block px-4 py-2 bg-gradient-to-r ${edu.color} text-white rounded-full text-sm font-semibold shadow-lg mb-3`}
                        >
                          {edu.year}
                        </motion.span>
                        <div className="text-right">
                          <div className="text-sm text-gray-400">Grade</div>
                          <div className="text-xl font-bold text-white">{edu.gpa}</div>
                        </div>
                      </div>
                    </motion.div>

                    {/* Stats */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.2 + 0.5 }}
                      className="grid grid-cols-3 gap-4 mb-6"
                    >
                      <div className="text-center p-4 bg-slate-700/30 rounded-xl border border-slate-600/30">
                        <div className="text-2xl font-bold text-cyan-400">{edu.projects}</div>
                        <div className="text-xs text-gray-400">Projects</div>
                      </div>
                      <div className="text-center p-4 bg-slate-700/30 rounded-xl border border-slate-600/30">
                        <div className="text-2xl font-bold text-purple-400">{edu.certifications}</div>
                        <div className="text-xs text-gray-400">Certificates</div>
                      </div>
                      <div className="text-center p-4 bg-slate-700/30 rounded-xl border border-slate-600/30">
                        <div className="text-2xl font-bold text-green-400">{edu.subjects.length}</div>
                        <div className="text-xs text-gray-400">Subjects</div>
                      </div>
                    </motion.div>

                    {/* Description */}
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.2 + 0.6 }}
                      className="text-gray-300 leading-relaxed mb-6 border-t border-slate-700/50 pt-6"
                    >
                      {edu.description}
                    </motion.p>

                    {/* Expandable Details */}
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={selectedEducation === index ? { opacity: 1, height: "auto" } : { opacity: 0, height: 0 }}
                      transition={{ duration: 0.5 }}
                      className="overflow-hidden"
                    >
                      <div className="grid md:grid-cols-2 gap-6 pt-6 border-t border-slate-700/50">
                        {/* Achievements */}
                        <div>
                          <h4 className="font-bold text-white mb-4 flex items-center">
                            <span className="mr-2">🏆</span>
                            Achievements
                          </h4>
                          <ul className="space-y-3">
                            {edu.achievements.map((achievement, idx) => (
                              <motion.li
                                key={idx}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                className="text-gray-300 text-sm flex items-start"
                              >
                                <span className="text-green-400 mr-3 mt-1">✓</span>
                                {achievement}
                              </motion.li>
                            ))}
                          </ul>
                        </div>

                        {/* Key Subjects */}
                        <div>
                          <h4 className="font-bold text-white mb-4 flex items-center">
                            <span className="mr-2">📖</span>
                            Key Subjects
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {edu.subjects.map((subject, idx) => (
                              <motion.span
                                key={idx}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: idx * 0.1 }}
                                whileHover={{ scale: 1.05 }}
                                className={`px-3 py-1 bg-gradient-to-r ${edu.color} text-white text-xs rounded-full font-medium`}
                              >
                                {subject}
                              </motion.span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>

                    {/* Toggle Button */}
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setSelectedEducation(selectedEducation === index ? null : index)}
                      className="mt-6 text-cyan-400 hover:text-white font-medium text-sm flex items-center transition-colors group"
                    >
                      <span>{selectedEducation === index ? "Show Less" : "Show More"}</span>
                      <motion.span
                        animate={{ rotate: selectedEducation === index ? 180 : 0 }}
                        className="ml-2 group-hover:translate-x-1 transition-transform"
                      >
                        ↓
                      </motion.span>
                    </motion.button>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
