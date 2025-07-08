"use client"

import { motion } from "framer-motion"
import { useState } from "react"

export default function Achievements() {
  const [selectedAchievement, setSelectedAchievement] = useState(null)

  const achievements = [
    {
      title: "INNOVENTURES Winner",
      icon: "🏆",
      color: "from-yellow-400 to-orange-500",
      place: "1st Place",
      event: "INNOVENTURES at Kongu Engineering College",
      project: "MENTOR CONNECT",
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
      color: "from-purple-400 to-pink-500",
      place: "1st Place",
      event: "30-Hour Hackathon",
      project: "Innovative Solution",
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
      color: "from-blue-400 to-cyan-500",
      place: "3rd Place",
      event: "Paper Presentation at Kongu Engineering College",
      project: "DEVOPS",
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
      color: "from-green-400 to-emerald-500",
      place: "Selected",
      event: "Smart India Hackathon 2024 (Inter-college)",
      project: "National Level Competition",
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
      color: "from-indigo-400 to-purple-500",
      place: "Presenter",
      event: "SAMHITA'24 at MIT Chennai",
      project: "Technical Paper",
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
      color: "from-teal-400 to-blue-500",
      place: "Participant",
      event: "SRISHTI2k24 at PSG College of Technology",
      project: "Hackathon Challenge",
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
      color: "from-orange-400 to-yellow-500",
    },
    {
      name: "MongoDB Associate Developer",
      icon: "🍃",
      issuer: "MongoDB University",
      color: "from-green-400 to-emerald-500",
    },
  ]

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
                transition={{ duration: 18, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-600 rounded-2xl blur-lg opacity-30"
              />
              <div className="relative bg-slate-800/90 backdrop-blur-sm px-6 py-3 rounded-2xl border border-yellow-500/30">
                <span className="text-yellow-400 font-semibold">◆ Accomplishments</span>
              </div>
            </div>
          </motion.div>

          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-white">Awards &</span>
            <br />
            <motion.span
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY }}
              className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent bg-300%"
              style={{ backgroundSize: "300% 300%" }}
            >
              Recognition
            </motion.span>
          </h2>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Awards, competitions, and recognitions that showcase my dedication to excellence
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
              <div className="relative bg-slate-800/50 backdrop-blur-sm p-8 rounded-3xl border border-slate-700/50 hover:border-yellow-500/50 transition-all duration-500 overflow-hidden">
                {/* Glow Effect */}
                <motion.div
                  animate={{
                    opacity: [0, 0.1, 0],
                    scale: [1, 1.05, 1],
                  }}
                  transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                  className={`absolute inset-0 bg-gradient-to-br ${achievement.color} rounded-3xl blur-xl`}
                />

                <div className="relative z-10">
                  {/* Header */}
                  <div className="mb-6">
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${achievement.color} rounded-2xl text-white text-2xl mb-4 shadow-lg`}
                    >
                      {achievement.icon}
                    </motion.div>

                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-bold text-white group-hover:text-yellow-400 transition-colors">
                        {achievement.title}
                      </h3>
                      <span
                        className={`px-3 py-1 bg-gradient-to-r ${achievement.color} text-white text-sm rounded-full font-semibold shadow-lg`}
                      >
                        {achievement.place}
                      </span>
                    </div>

                    <div className="space-y-1">
                      <p className="text-sm text-gray-400">{achievement.event}</p>
                      <p className="text-sm font-medium text-cyan-400">{achievement.project}</p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 leading-relaxed mb-6 text-sm">{achievement.description}</p>

                  {/* Toggle Button */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedAchievement(selectedAchievement === index ? null : index)}
                    className="w-full bg-slate-700/50 hover:bg-slate-600/50 text-gray-300 hover:text-white py-3 rounded-xl font-medium transition-all duration-300 flex items-center justify-center group"
                  >
                    <span>{selectedAchievement === index ? "Show Less" : "View Details"}</span>
                    <motion.span
                      animate={{ rotate: selectedAchievement === index ? 180 : 0 }}
                      className="ml-2 group-hover:translate-x-1 transition-transform"
                    >
                      ↓
                    </motion.span>
                  </motion.button>

                  {/* Expandable Details */}
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={selectedAchievement === index ? { opacity: 1, height: "auto" } : { opacity: 0, height: 0 }}
                    transition={{ duration: 0.5 }}
                    className="overflow-hidden"
                  >
                    <div className="pt-6 border-t border-slate-700/50 mt-4">
                      <h4 className="font-bold text-white mb-3 flex items-center">
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
                            className="text-gray-300 text-sm flex items-start"
                          >
                            <span className="text-green-400 mr-2 mt-1 flex-shrink-0">✓</span>
                            <span>{detail}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-center mb-16"
        >
          <h3 className="text-3xl font-bold text-white mb-8">Professional Certifications</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="relative bg-slate-800/50 backdrop-blur-sm p-8 rounded-3xl border border-slate-700/50 hover:border-orange-500/50 transition-all duration-300 overflow-hidden group"
              >
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.1, 0.2, 0.1],
                  }}
                  transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: index }}
                  className={`absolute inset-0 bg-gradient-to-br ${cert.color} rounded-3xl`}
                />

                <div className="relative z-10">
                  <motion.div whileHover={{ scale: 1.2, rotate: 10 }} className="text-4xl mb-4">
                    {cert.icon}
                  </motion.div>
                  <h4 className="text-xl font-bold text-white mb-2 group-hover:text-orange-400 transition-colors">
                    {cert.name}
                  </h4>
                  <p className="text-gray-400">{cert.issuer}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { number: "6+", label: "Achievements", icon: "🏆", color: "from-yellow-400 to-orange-500" },
            { number: "2", label: "First Prizes", icon: "🥇", color: "from-green-400 to-emerald-500" },
            { number: "2", label: "Certifications", icon: "☁️", color: "from-blue-400 to-cyan-500" },
            { number: "4+", label: "Competitions", icon: "🎯", color: "from-purple-400 to-pink-500" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 + 0.9 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="relative bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl text-center border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 group overflow-hidden"
            >
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.1, 0.2, 0.1],
                }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: index }}
                className={`absolute inset-0 bg-gradient-to-br ${stat.color} rounded-2xl`}
              />

              <div className="relative z-10">
                <motion.div whileHover={{ scale: 1.2, rotate: 10 }} className="text-3xl mb-2">
                  {stat.icon}
                </motion.div>
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
