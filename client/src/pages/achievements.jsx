"use client"

import { motion } from "framer-motion"
import { useState } from "react"

export default function Achievements() {
  const [selectedAchievement, setSelectedAchievement] = useState(null)

  const achievements = [
    {
      title: "INNOVENTURES Winner",
      icon: "🏆",
      color: "from-yellow-500 to-orange-400",
      place: "1st Place",
      event: "INNOVENTURES at Kongu Engineering College",
      project: "MENTOR CONNECT",
      year: "2023",
      description: "Secured First place in INNOVENTURES competition for innovative project 'MENTOR CONNECT'.",
      details: [
        "Developed a comprehensive mentoring platform",
        "Connected students with industry professionals",
        "Implemented real-time communication features",
        "Created user-friendly interface for seamless interaction",
      ],
    },
    {
      title: "30-Hour Hackathon Champion",
      icon: "⚡",
      color: "from-purple-500 to-pink-400",
      place: "1st Place",
      event: "30-Hour Hackathon",
      project: "Innovative Solution",
      year: "2023",
      description:
        "Won first prize in an intensive 30-hour hackathon, demonstrating exceptional problem-solving skills and teamwork.",
      details: [
        "Developed complete solution in 30 hours",
        "Led team of developers effectively",
        "Implemented cutting-edge technologies",
        "Delivered working prototype with presentation",
      ],
    },
    {
      title: "Paper Presentation Excellence",
      icon: "📄",
      color: "from-blue-500 to-cyan-400",
      place: "3rd Place",
      event: "Paper Presentation at Kongu Engineering College",
      project: "DEVOPS",
      year: "2023",
      description:
        "Secured Third place in Paper Presentation competition for comprehensive research on DevOps practices.",
      details: [
        "Researched modern DevOps methodologies",
        "Presented innovative automation strategies",
        "Demonstrated practical implementation",
        "Received recognition from industry experts",
      ],
    },
    {
      title: "Smart India Hackathon Selection",
      icon: "🇮🇳",
      color: "from-green-500 to-emerald-400",
      place: "Selected",
      event: "Smart India Hackathon 2024 (Inter-college)",
      project: "National Level Competition",
      year: "2024",
      description:
        "Got selected in Smart India Hackathon 2024 at inter-college level, representing Kongu Engineering College.",
      details: [
        "Selected among thousands of participants",
        "Represented college at national level",
        "Worked on government problem statements",
        "Collaborated with diverse team members",
      ],
    },
    {
      title: "SAMHITA'24 Presenter",
      icon: "🎓",
      color: "from-indigo-500 to-purple-400",
      place: "Presenter",
      event: "SAMHITA'24 at MIT Chennai",
      project: "Technical Paper",
      year: "2024",
      description: "Presented a technical paper at SAMHITA'24, hosted by Madras Institute of Technology, Chennai.",
      details: [
        "Presented at prestigious MIT Chennai",
        "Shared innovative research findings",
        "Networked with academic professionals",
        "Gained valuable presentation experience",
      ],
    },
    {
      title: "SRISHTI2k24 Participant",
      icon: "💡",
      color: "from-teal-500 to-blue-400",
      place: "Participant",
      event: "SRISHTI2k24 at PSG College of Technology",
      project: "Hackathon Challenge",
      year: "2024",
      description: "Participated in hackathon at SRISHTI2k24, hosted by PSG College of Technology, Coimbatore.",
      details: [
        "Competed with top engineering students",
        "Developed innovative technical solution",
        "Enhanced problem-solving skills",
        "Built valuable industry connections",
      ],
    },
  ]

  const certifications = [
    {
      name: "AWS Cloud Practitioner",
      icon: "☁️",
      issuer: "Amazon Web Services",
      color: "from-orange-500 to-yellow-400",
      link: "https://www.credly.com/badges/your-certificate-link", // Replace with your actual certificate link
    },
  ]

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-white via-purple-50 to-pink-50 relative overflow-hidden">
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
            className="inline-block px-6 py-3 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800 rounded-full text-sm font-medium mb-6 shadow-lg backdrop-blur-sm border border-white/50"
          >
            🏆 My Accomplishments
          </motion.span>
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-800 mb-6">
            Achievements &{" "}
            <motion.span
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
              className="bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 bg-clip-text text-transparent bg-300%"
              style={{ backgroundSize: "300% 300%" }}
            >
              Recognition
            </motion.span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Awards, competitions, and recognitions that showcase my dedication to excellence and innovation
          </p>
        </motion.div>

        {/* Achievements Grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative"
            >
              <div className="bg-white/90 backdrop-blur-lg p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/50 relative overflow-hidden">
                {/* Gradient Background */}
                <motion.div
                  animate={{
                    opacity: [0.05, 0.1, 0.05],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                  className={`absolute inset-0 bg-gradient-to-br ${achievement.color} rounded-3xl`}
                />

                {/* Header */}
                <div className="relative z-10 mb-6">
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${achievement.color} rounded-2xl text-white text-2xl mb-4 shadow-lg`}
                  >
                    {achievement.icon}
                  </motion.div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-gray-800">{achievement.title}</h3>
                    <span
                      className={`px-3 py-1 bg-gradient-to-r ${achievement.color} text-white text-sm rounded-full font-semibold`}
                    >
                      {achievement.place}
                    </span>
                  </div>
                  <div className="flex items-center text-xs text-gray-500 mb-1">
                    <span>{achievement.year}</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">{achievement.event}</p>
                  <p className="text-sm font-medium text-blue-600">{achievement.project}</p>
                </div>

                {/* Description */}
                <p className="relative z-10 text-gray-600 leading-relaxed mb-6">{achievement.description}</p>

                {/* Toggle Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedAchievement(selectedAchievement === index ? null : index)}
                  aria-expanded={selectedAchievement === index}
                  className="relative z-10 w-full bg-gradient-to-r from-gray-100 to-gray-200 hover:from-gray-200 hover:to-gray-300 text-gray-700 py-3 rounded-xl font-medium transition-all duration-300 flex items-center justify-center"
                >
                  {selectedAchievement === index ? "Show Less" : "View Details"}
                  <motion.span animate={{ rotate: selectedAchievement === index ? 180 : 0 }} className="ml-2">
                    ↓
                  </motion.span>
                </motion.button>

                {/* Expandable Details */}
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={selectedAchievement === index ? { opacity: 1, height: "auto" } : { opacity: 0, height: 0 }}
                  transition={{ duration: 0.5 }}
                  className="overflow-hidden relative z-10"
                >
                  <div className="pt-6 border-t border-gray-200 mt-4">
                    <h4 className="font-bold text-gray-800 mb-3 flex items-center">
                      <span className="mr-2">✨</span>
                      Key Highlights
                    </h4>
                    <ul className="space-y-2">
                      {achievement.details.map((detail, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          className="text-gray-600 text-sm flex items-start"
                        >
                          <span className="text-green-500 mr-2 mt-1">✓</span>
                          {detail}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl font-bold text-gray-800 mb-8">Professional Certifications</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {certifications.map((cert, index) => (
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
                  className={`absolute inset-0 bg-gradient-to-br ${cert.color} rounded-3xl`}
                />
                <motion.div whileHover={{ scale: 1.2, rotate: 10 }} className="text-4xl mb-4 relative z-10">
                  {cert.icon}
                </motion.div>
                <h4 className="text-xl font-bold text-gray-800 mb-2 relative z-10">{cert.name}</h4>
                <p className="text-gray-600 relative z-10">{cert.issuer}</p>
                {cert.link && (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-3 px-4 py-2 bg-gradient-to-r from-orange-400 to-yellow-400 text-white rounded-full font-semibold shadow hover:shadow-lg transition"
                  >
                    View Certificate
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { number: "6+", label: "Achievements", icon: "🏆", color: "from-yellow-500 to-orange-400" },
            { number: "2", label: "First Prizes", icon: "🥇", color: "from-green-500 to-emerald-400" },
            { number: "1", label: "AWS Certification", icon: "☁️", color: "from-blue-500 to-cyan-400" },
            { number: "4+", label: "Competitions", icon: "🎯", color: "from-purple-500 to-pink-400" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 + 0.9 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white/90 backdrop-blur-lg p-6 rounded-2xl text-center shadow-lg hover:shadow-xl transition-all duration-300 border border-white/50 relative overflow-hidden group"
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
      </div>
    </section>
  )
}
