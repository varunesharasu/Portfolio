"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { useTheme } from "../contexts/ThemeContext"

export default function Achievements() {
  const [selectedAchievement, setSelectedAchievement] = useState(null)
  const [selectedCertification, setSelectedCertification] = useState(null)
  const { getThemeClasses } = useTheme()
  const themeClasses = getThemeClasses()

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
      date: "2024",
      credentialId: "AWS-CCP-2024-001",
      description: "Foundational certification demonstrating cloud computing knowledge and AWS services understanding.",
      skills: [
        "AWS Core Services",
        "Cloud Architecture Basics",
        "Security & Compliance",
        "Billing & Pricing",
        "Support Plans",
      ],
      details: [
        "Comprehensive understanding of AWS Cloud concepts",
        "Knowledge of AWS services and their use cases",
        "Understanding of AWS security and compliance",
        "Familiarity with AWS pricing and support models",
        "Foundation for advanced AWS certifications",
      ],
      validUntil: "2027",
      verificationUrl: "#",
    },
    {
      name: "MongoDB Associate Developer",
      icon: "🍃",
      issuer: "MongoDB University",
      color: "from-green-400 to-emerald-500",
      date: "2024",
      credentialId: "MDB-DEV-2024-002",
      description: "Professional certification validating MongoDB database development and administration skills.",
      skills: [
        "MongoDB CRUD Operations",
        "Data Modeling",
        "Indexing Strategies",
        "Aggregation Framework",
        "Database Administration",
      ],
      details: [
        "Proficient in MongoDB database operations",
        "Advanced querying and data manipulation",
        "Performance optimization techniques",
        "Schema design and data modeling",
        "Integration with modern applications",
      ],
      validUntil: "2027",
      verificationUrl: "#",
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
              <div
                className={`relative ${themeClasses.cardBg} backdrop-blur-sm px-6 py-3 rounded-2xl border border-yellow-500/30`}
              >
                <span className="text-yellow-400 font-semibold">◆ Accomplishments</span>
              </div>
            </div>
          </motion.div>

          <h2 className={`text-5xl md:text-7xl font-bold mb-6 ${themeClasses.headingText}`}>
            <span>Awards &</span>
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

          <p className={`text-xl ${themeClasses.textSecondary} max-w-3xl mx-auto leading-relaxed`}>
            Awards, competitions, and recognitions that showcase my dedication to excellence
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-20">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative"
            >
              <div
                className={`relative ${themeClasses.achievementCard} backdrop-blur-sm p-8 rounded-3xl border transition-all duration-500 overflow-hidden`}
              >
                <motion.div
                  animate={{
                    opacity: [0, 0.1, 0],
                    scale: [1, 1.05, 1],
                  }}
                  transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                  className={`absolute inset-0 bg-gradient-to-br ${achievement.color} rounded-3xl blur-xl`}
                />

                <div className="relative z-10">
                  <div className="mb-6">
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${achievement.color} rounded-2xl text-white text-2xl mb-4 shadow-lg`}
                    >
                      {achievement.icon}
                    </motion.div>

                    <div className="flex items-center justify-between mb-3">
                      <h3
                        className={`text-xl font-bold ${themeClasses.headingText} group-hover:text-yellow-400 transition-colors`}
                      >
                        {achievement.title}
                      </h3>
                      <span
                        className={`px-3 py-1 bg-gradient-to-r ${achievement.color} text-white text-sm rounded-full font-semibold shadow-lg`}
                      >
                        {achievement.place}
                      </span>
                    </div>

                    <div className="space-y-1">
                      <p className={`text-sm ${themeClasses.textMuted}`}>{achievement.event}</p>
                      <p className="text-sm font-medium text-cyan-400">{achievement.project}</p>
                    </div>
                  </div>

                  <p className={`${themeClasses.textSecondary} leading-relaxed mb-6 text-sm`}>
                    {achievement.description}
                  </p>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedAchievement(selectedAchievement === index ? null : index)}
                    className={`w-full ${themeClasses.buttonSecondary} py-3 rounded-xl font-medium transition-all duration-300 flex items-center justify-center group`}
                  >
                    <span>{selectedAchievement === index ? "Show Less" : "View Details"}</span>
                    <motion.span
                      animate={{ rotate: selectedAchievement === index ? 180 : 0 }}
                      className="ml-2 group-hover:translate-x-1 transition-transform"
                    >
                      ↓
                    </motion.span>
                  </motion.button>

                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={selectedAchievement === index ? { opacity: 1, height: "auto" } : { opacity: 0, height: 0 }}
                    transition={{ duration: 0.5 }}
                    className="overflow-hidden"
                  >
                    <div className={`pt-6 border-t ${themeClasses.border} mt-4`}>
                      <h4 className={`font-bold ${themeClasses.headingText} mb-3 flex items-center`}>
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
                            className={`${themeClasses.textSecondary} text-sm flex items-start`}
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

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h3 className={`text-4xl font-bold ${themeClasses.headingText} mb-4`}>Professional Certifications</h3>
            <p className={`text-lg ${themeClasses.textSecondary} max-w-2xl mx-auto`}>
              Industry-recognized certifications validating technical expertise and professional skills
            </p>
          </div>

          <div className="flex justify-center">
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl w-full">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="relative group cursor-pointer"
                  onClick={() => setSelectedCertification(selectedCertification === index ? null : index)}
                >
                  <div
                    className={`relative ${themeClasses.cardBg} backdrop-blur-sm p-8 rounded-3xl border ${themeClasses.border} hover:border-orange-500/50 transition-all duration-300 overflow-hidden`}
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
                      <div className="flex items-center justify-between mb-4">
                        <motion.div whileHover={{ scale: 1.2, rotate: 10 }} className="text-4xl">
                          {cert.icon}
                        </motion.div>
                        <span
                          className={`px-3 py-1 bg-gradient-to-r ${cert.color} text-white text-xs rounded-full font-semibold`}
                        >
                          {cert.date}
                        </span>
                      </div>

                      <h4
                        className={`text-xl font-bold ${themeClasses.headingText} mb-2 group-hover:text-orange-400 transition-colors`}
                      >
                        {cert.name}
                      </h4>
                      <p className={`${themeClasses.textMuted} mb-4`}>{cert.issuer}</p>
                      <p className={`${themeClasses.textSecondary} text-sm leading-relaxed`}>{cert.description}</p>

                      <motion.div className="mt-4 text-center">
                        <span className={`text-sm ${themeClasses.accent} font-medium`}>
                          {selectedCertification === index ? "Click to collapse" : "Click for details"}
                        </span>
                      </motion.div>
                    </div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={
                      selectedCertification === index ? { opacity: 1, height: "auto" } : { opacity: 0, height: 0 }
                    }
                    transition={{ duration: 0.5 }}
                    className="overflow-hidden mt-4"
                  >
                    <div
                      className={`${themeClasses.cardBg} backdrop-blur-sm p-6 rounded-2xl border ${themeClasses.border}`}
                    >
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h5 className={`font-bold ${themeClasses.headingText} mb-3 flex items-center`}>
                            <span className="mr-2">📋</span>
                            Certification Details
                          </h5>
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                              <span className={themeClasses.textMuted}>Credential ID:</span>
                              <span className={themeClasses.textSecondary}>{cert.credentialId}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className={themeClasses.textMuted}>Valid Until:</span>
                              <span className={themeClasses.textSecondary}>{cert.validUntil}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className={themeClasses.textMuted}>Issuer:</span>
                              <span className={themeClasses.textSecondary}>{cert.issuer}</span>
                            </div>
                          </div>

                          <motion.a
                            href={cert.verificationUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={`inline-block mt-4 px-4 py-2 ${themeClasses.buttonPrimary} text-white rounded-lg text-sm font-medium transition-all duration-300`}
                          >
                            Verify Certificate →
                          </motion.a>
                        </div>

                        <div>
                          <h5 className={`font-bold ${themeClasses.headingText} mb-3 flex items-center`}>
                            <span className="mr-2">🎯</span>
                            Skills Covered
                          </h5>
                          <div className="flex flex-wrap gap-2 mb-4">
                            {cert.skills.map((skill, idx) => (
                              <motion.span
                                key={idx}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: idx * 0.1 }}
                                whileHover={{ scale: 1.05 }}
                                className={`px-3 py-1 bg-gradient-to-r ${cert.color} text-white text-xs rounded-full font-medium`}
                              >
                                {skill}
                              </motion.span>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className={`mt-6 pt-6 border-t ${themeClasses.border}`}>
                        <h5 className={`font-bold ${themeClasses.headingText} mb-3 flex items-center`}>
                          <span className="mr-2">💡</span>
                          Key Learnings & Achievements
                        </h5>
                        <ul className="space-y-2">
                          {cert.details.map((detail, idx) => (
                            <motion.li
                              key={idx}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: idx * 0.1 }}
                              className={`${themeClasses.textSecondary} text-sm flex items-start`}
                            >
                              <span className="text-green-400 mr-2 mt-1 flex-shrink-0">✓</span>
                              <span>{detail}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

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
              className={`relative ${themeClasses.cardBg} backdrop-blur-sm p-6 rounded-2xl text-center border ${themeClasses.border} ${themeClasses.borderHover} transition-all duration-300 group overflow-hidden`}
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
                <div className={`text-3xl font-bold ${themeClasses.headingText} mb-1`}>{stat.number}</div>
                <div className={`${themeClasses.textMuted} text-sm`}>{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
