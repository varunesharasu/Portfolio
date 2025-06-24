"use client"

import { motion } from "framer-motion"
import { useState } from "react"

export default function Education() {
  const [selectedEducation, setSelectedEducation] = useState(null)

  const education = [
    {
      degree: "Bachelor of Technology in Information Technology",
      institution: "Kongu Engineering College",
      year: "2022 - 2026",
      description:
        "A four-year undergraduate program focused on engineering and technology with specialization in modern software development practices.",
      icon: "🎓",
      color: "from-blue-500 to-cyan-500",
      gpa: "8.5/10",
      location: "Perundurai, Tamil Nadu",
      achievements: [
        "Dean's List for Academic Excellence",
        "Active member of Coding Club",
        "Participated in multiple hackathons",
        "Led team projects in web development",
      ],
      subjects: [
        "Data Structures",
        "Web Development",
        "Database Management",
        "Software Engineering",
        "Computer Networks",
      ],
      projects: 12,
      certifications: 5,
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "The Optimus Public School",
      year: "2021 - 2022",
      description:
        "Completed higher secondary education with focus on Mathematics, Physics, and Chemistry, building strong analytical and problem-solving foundation.",
      icon: "📚",
      color: "from-green-500 to-emerald-500",
      gpa: "85%",
      location: "Erode, Tamil Nadu",
      achievements: [
        "School Topper in Computer Science",
        "Mathematics Olympiad Participant",
        "Science Fair Winner",
        "Student Council Member",
      ],
      subjects: ["Mathematics", "Physics", "Chemistry", "Computer Science", "English"],
      projects: 3,
      certifications: 2,
    },
    {
      degree: "Secondary School Leaving Certificate (SSLC)",
      institution: "The Optimus Public School",
      year: "2019 - 2020",
      description:
        "Completed secondary education with excellent grades, developing strong foundation in core subjects and discovering passion for technology.",
      icon: "🏫",
      color: "from-purple-500 to-pink-500",
      gpa: "92%",
      location: "Erode, Tamil Nadu",
      achievements: [
        "Class Valedictorian",
        "Best Student in Computer Science",
        "Inter-school Quiz Competition Winner",
        "Perfect Attendance Award",
      ],
      subjects: ["Mathematics", "Science", "Social Studies", "English", "Computer Applications"],
      projects: 2,
      certifications: 1,
    },
  ]

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-white via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-r from-blue-200/20 to-purple-200/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
            rotate: [360, 180, 0],
          }}
          transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-20 left-20 w-64 h-64 bg-gradient-to-r from-cyan-200/20 to-blue-200/20 rounded-full blur-3xl"
        />

        {/* New floating academic elements */}
        <motion.div
          animate={{
            y: [0, -40, 0],
            x: [0, 20, 0],
            rotate: [0, 15, 0],
          }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          className="absolute top-1/3 right-1/3 w-20 h-20 bg-gradient-to-br from-yellow-300/20 to-orange-300/20 rounded-lg blur-sm"
        />
        <motion.div
          animate={{
            y: [0, 30, 0],
            x: [0, -15, 0],
            rotate: [0, -20, 0],
          }}
          transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 3 }}
          className="absolute bottom-1/3 right-1/4 w-16 h-16 bg-gradient-to-br from-pink-300/20 to-purple-300/20 rounded-full blur-sm"
        />
      </div>

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
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="absolute bottom-2 left-0 w-full h-2 bg-gradient-to-r from-blue-400/30 to-purple-400/30 rounded-full"
              />
            </motion.span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            My academic journey and the foundation that shaped my passion for technology and innovation
          </p>
        </motion.div>

        <div className="relative">
          {/* Enhanced Timeline Line */}
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
                {/* Enhanced Timeline Dot */}
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
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                    className={`absolute inset-0 bg-gradient-to-br ${edu.color} rounded-full opacity-30`}
                  />
                </motion.div>

                {/* Enhanced Floating Icon */}
                <motion.div
                  initial={{ opacity: 0, scale: 0, rotate: -180 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ delay: index * 0.2 + 0.5, type: "spring", bounce: 0.6 }}
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  className="absolute -left-4 top-2 bg-white rounded-full p-4 shadow-xl hidden md:block z-20 border-2 border-gray-100"
                >
                  <span className="text-3xl">{edu.icon}</span>
                </motion.div>

                {/* Enhanced Content Card */}
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="bg-white/90 backdrop-blur-lg p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/50 relative overflow-hidden group-hover:border-blue-200"
                >
                  {/* Animated Gradient Background */}
                  <motion.div
                    animate={{
                      opacity: [0, 0.05, 0],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                    className={`absolute inset-0 bg-gradient-to-br ${edu.color} rounded-3xl`}
                  />

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

                  {/* Enhanced Decorative Elements */}
                  <motion.div
                    animate={{ rotate: 360, scale: [1, 1.2, 1] }}
                    transition={{
                      rotate: { duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                      scale: { duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
                    }}
                    className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-blue-400/30 to-purple-400/30 rounded-full"
                  />
                  <motion.div
                    animate={{ rotate: -360, scale: [1, 0.8, 1] }}
                    transition={{
                      rotate: { duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
                      scale: { duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
                    }}
                    className="absolute -bottom-2 -left-2 w-6 h-6 bg-gradient-to-r from-cyan-400/30 to-blue-400/30 rounded-full"
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

        {/* Enhanced Achievement Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { number: "4+", label: "Years of Study", icon: "📖", color: "from-blue-500 to-cyan-500" },
            { number: "85%", label: "Average Grade", icon: "⭐", color: "from-yellow-500 to-orange-500" },
            { number: "17+", label: "Projects Completed", icon: "🚀", color: "from-green-500 to-emerald-500" },
            { number: "8+", label: "Certifications", icon: "🏆", color: "from-purple-500 to-pink-500" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 + 0.9 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white/80 backdrop-blur-lg p-6 rounded-2xl text-center shadow-lg hover:shadow-xl transition-all duration-300 border border-white/50 relative overflow-hidden group"
            >
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.1, 0.2, 0.1],
                }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: index }}
                className={`absolute inset-0 bg-gradient-to-br ${stat.color} rounded-2xl`}
              />
              <motion.div whileHover={{ scale: 1.2, rotate: 10 }} className="text-3xl mb-2 relative z-10">
                {stat.icon}
              </motion.div>
              <div className="text-3xl font-bold text-gray-800 mb-1 relative z-10">{stat.number}</div>
              <div className="text-gray-600 text-sm relative z-10">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Academic Timeline Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mt-16 text-center"
        >
          <div className="bg-white/80 backdrop-blur-lg p-8 rounded-3xl shadow-xl border border-white/50 relative overflow-hidden">
            <motion.div
              animate={{
                scale: [1, 1.05, 1],
                opacity: [0.1, 0.15, 0.1],
              }}
              transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              className="absolute inset-0 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-3xl"
            />
            <h3 className="text-2xl font-bold text-gray-800 mb-4 relative z-10">Academic Excellence Journey</h3>
            <p className="text-gray-600 leading-relaxed relative z-10">
              From foundational learning in secondary school to specialized technical education in college, my academic
              journey has been marked by consistent excellence, active participation in extracurricular activities, and
              a growing passion for technology and innovation.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
