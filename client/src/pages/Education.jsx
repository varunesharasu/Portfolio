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
      color: "from-blue-500 to-cyan-500",
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
      projects: 3,
      certifications: 1,
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "The Optimus Public School",
      year: "2021 - 2022",
      description:
        "Completed higher secondary education with focus on Mathematics, Physics, and Chemistry, building strong analytical foundation.",
      icon: "📚",
      color: "from-green-500 to-emerald-500",
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
      color: "from-purple-500 to-pink-500",
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
    <section className="py-20 px-6 bg-gradient-to-br from-white via-blue-50 to-indigo-50 relative overflow-hidden">
      <div className="container mx-auto max-w-6xl relative z-10">
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
            🎓 My Academic Journey
          </motion.span>
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-800 mb-6">
            Education &{" "}
            <motion.span
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
              className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent relative bg-300%"
              style={{ backgroundSize: "300% 300%" }}
            >
              Background
            </motion.span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            My academic journey and the foundation that shaped my passion for technology and innovation
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-indigo-500 rounded-full hidden md:block">
            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              className="absolute top-0 w-3 h-3 bg-blue-500 rounded-full -left-1 shadow-lg"
            />
          </div>

          <div className="space-y-16">
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
                  whileHover={{ scale: 1.3 }}
                  className={`absolute left-6 top-8 w-8 h-8 bg-gradient-to-br ${edu.color} rounded-full shadow-xl hidden md:block z-10 cursor-pointer`}
                  onClick={() => setSelectedEducation(selectedEducation === index ? null : index)}
                >
                  <div className="absolute inset-1 bg-white rounded-full" />
                  <div className={`absolute inset-2 bg-gradient-to-br ${edu.color} rounded-full`} />
                </motion.div>

                {/* Floating Icon */}
                <motion.div
                  initial={{ opacity: 0, scale: 0, rotate: -180 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ delay: index * 0.2 + 0.5, type: "spring", bounce: 0.6 }}
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  className="absolute -left-4 top-2 bg-white rounded-full p-4 shadow-xl hidden md:block z-20 border-2 border-gray-100"
                >
                  <span className="text-3xl">{edu.icon}</span>
                </motion.div>

                {/* Content Card */}
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="bg-white/90 backdrop-blur-lg p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/50 relative overflow-hidden group-hover:border-blue-200"
                >
                  <div className="relative z-10">
                    {/* Header Section */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.2 + 0.4 }}
                      className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6"
                    >
                      <div className="flex-1">
                        <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                          {edu.degree}
                        </h3>
                        <div className="flex items-center text-gray-600 mb-2">
                          <span className="text-lg mr-2">🏛️</span>
                          <span className="font-semibold text-lg">{edu.institution}</span>
                        </div>
                        <div className="flex items-center text-gray-500 text-sm">
                          <span className="mr-2">📍</span>
                          <span>{edu.location}</span>
                        </div>
                      </div>
                      <div className="flex flex-col items-end mt-4 lg:mt-0">
                        <motion.span
                          whileHover={{ scale: 1.05 }}
                          className={`bg-gradient-to-r ${edu.color} text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg mb-2`}
                        >
                          {edu.year}
                        </motion.span>
                        <div className="text-right">
                          <div className="text-sm text-gray-500">Grade</div>
                          <div className="font-bold text-gray-800">{edu.gpa}</div>
                        </div>
                      </div>
                    </motion.div>

                    {/* Stats Section */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.2 + 0.5 }}
                      className="grid grid-cols-3 gap-4 mb-6"
                    >
                      <div className="text-center p-3 bg-white/50 rounded-xl">
                        <div className="text-2xl font-bold text-gray-800">{edu.projects}</div>
                        <div className="text-xs text-gray-600">Projects</div>
                      </div>
                      <div className="text-center p-3 bg-white/50 rounded-xl">
                        <div className="text-2xl font-bold text-gray-800">{edu.certifications}</div>
                        <div className="text-xs text-gray-600">Certificates</div>
                      </div>
                      <div className="text-center p-3 bg-white/50 rounded-xl">
                        <div className="text-2xl font-bold text-gray-800">{edu.subjects.length}</div>
                        <div className="text-xs text-gray-600">Subjects</div>
                      </div>
                    </motion.div>

                    {/* Description */}
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.2 + 0.6 }}
                      className="text-gray-600 leading-relaxed text-lg mb-6 border-t border-gray-100 pt-4"
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
                      <div className="grid md:grid-cols-2 gap-6 pt-4 border-t border-gray-100">
                        {/* Achievements */}
                        <div>
                          <h4 className="font-bold text-gray-800 mb-3 flex items-center">
                            <span className="mr-2">🏆</span>
                            Achievements
                          </h4>
                          <ul className="space-y-2">
                            {edu.achievements.map((achievement, idx) => (
                              <motion.li
                                key={idx}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                className="text-gray-600 text-sm flex items-start"
                              >
                                <span className="text-green-500 mr-2 mt-1">✓</span>
                                {achievement}
                              </motion.li>
                            ))}
                          </ul>
                        </div>

                        {/* Key Subjects */}
                        <div>
                          <h4 className="font-bold text-gray-800 mb-3 flex items-center">
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
                      className="mt-4 text-blue-600 hover:text-blue-800 font-medium text-sm flex items-center transition-colors"
                    >
                      {selectedEducation === index ? "Show Less" : "Show More"}
                      <motion.span animate={{ rotate: selectedEducation === index ? 180 : 0 }} className="ml-1">
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
