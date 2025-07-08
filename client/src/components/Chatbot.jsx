"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useRef, useEffect } from "react"
import { useTheme } from "../contexts/ThemeContext"

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    {
      type: "bot",
      content: "Hi! I'm Varunesh's AI assistant. How can I help you today?",
      timestamp: new Date(),
    },
  ])
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef(null)
  const { theme, getThemeClasses } = useTheme()
  const themeClasses = getThemeClasses()

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const predefinedResponses = {
    greeting: [
      "Hello! Welcome to Varunesh's portfolio. What would you like to know?",
      "Hi there! I'm here to help you learn more about Varunesh's work and skills.",
      "Hey! Thanks for visiting. How can I assist you today?",
    ],
    skills: [
      "Varunesh is skilled in React.js, Node.js, MongoDB, Express.js, JavaScript, Python, and C. He's also experienced with modern web technologies and frameworks.",
      "His technical stack includes MERN (MongoDB, Express, React, Node.js), along with strong foundations in algorithms and data structures.",
    ],
    projects: [
      "Varunesh has worked on several impressive projects including RateSync (a rating platform), Blog Platform, ResortEase (booking system), and more. Each project showcases different aspects of full-stack development.",
      "His featured projects demonstrate expertise in full-stack development, from database design to user interface creation. Check out the Projects section for detailed information!",
    ],
    education: [
      "Varunesh is currently pursuing Bachelor of Information Technology at Kongu Engineering College (2022-2026) with a CGPA of 7.41/10.",
      "He completed his higher secondary education at The Optimus Public School with strong performance in Mathematics and Science subjects.",
    ],
    achievements: [
      "Varunesh has won first place in INNOVENTURES competition, secured third place in Paper Presentation, and was selected for Smart India Hackathon 2024. He also has AWS and MongoDB certifications.",
      "His achievements include multiple hackathon wins, technical paper presentations, and professional certifications in cloud computing and database management.",
    ],
    contact: [
      "You can reach Varunesh at tvarunesharasu@gmail.com or call +91 93607 93223. He's also active on LinkedIn and GitHub.",
      "Feel free to connect with him through the contact form on this website, or reach out directly via email or phone. He's always open to discussing new opportunities!",
    ],
    default: [
      "That's an interesting question! For more specific information, I'd recommend checking out the relevant sections of the portfolio or contacting Varunesh directly.",
      "I'm still learning! For detailed information about that topic, please explore the portfolio sections or get in touch with Varunesh.",
      "Great question! You might find more detailed information in the portfolio sections, or feel free to contact Varunesh directly for specific inquiries.",
    ],
  }

  const getResponse = (input) => {
    const lowerInput = input.toLowerCase()

    if (lowerInput.includes("hello") || lowerInput.includes("hi") || lowerInput.includes("hey")) {
      return predefinedResponses.greeting[Math.floor(Math.random() * predefinedResponses.greeting.length)]
    } else if (lowerInput.includes("skill") || lowerInput.includes("technology") || lowerInput.includes("tech")) {
      return predefinedResponses.skills[Math.floor(Math.random() * predefinedResponses.skills.length)]
    } else if (lowerInput.includes("project") || lowerInput.includes("work") || lowerInput.includes("portfolio")) {
      return predefinedResponses.projects[Math.floor(Math.random() * predefinedResponses.projects.length)]
    } else if (lowerInput.includes("education") || lowerInput.includes("study") || lowerInput.includes("college")) {
      return predefinedResponses.education[Math.floor(Math.random() * predefinedResponses.education.length)]
    } else if (
      lowerInput.includes("achievement") ||
      lowerInput.includes("award") ||
      lowerInput.includes("certificate")
    ) {
      return predefinedResponses.achievements[Math.floor(Math.random() * predefinedResponses.achievements.length)]
    } else if (lowerInput.includes("contact") || lowerInput.includes("reach") || lowerInput.includes("email")) {
      return predefinedResponses.contact[Math.floor(Math.random() * predefinedResponses.contact.length)]
    } else {
      return predefinedResponses.default[Math.floor(Math.random() * predefinedResponses.default.length)]
    }
  }

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return

    const userMessage = {
      type: "user",
      content: inputValue,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue("")
    setIsTyping(true)

    // Simulate typing delay
    setTimeout(
      () => {
        const botResponse = {
          type: "bot",
          content: getResponse(inputValue),
          timestamp: new Date(),
        }
        setMessages((prev) => [...prev, botResponse])
        setIsTyping(false)
      },
      1000 + Math.random() * 1000,
    )
  }

  const quickQuestions = [
    "What are your skills?",
    "Tell me about your projects",
    "What are your achievements?",
    "How can I contact you?",
  ]

  return (
    <>
      {/* Chat Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className={`fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full ${themeClasses.buttonPrimary} text-white shadow-2xl flex items-center justify-center text-2xl`}
      >
        <motion.span animate={{ rotate: isOpen ? 45 : 0 }} transition={{ duration: 0.3 }}>
          {isOpen ? "✕" : "💬"}
        </motion.span>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            className={`fixed bottom-24 right-6 z-40 w-96 h-[500px] ${themeClasses.cardBg} backdrop-blur-xl rounded-3xl ${themeClasses.border} ${themeClasses.shadow} overflow-hidden`}
          >
            {/* Header */}
            <div className={`p-6 ${themeClasses.border} border-b`}>
              <div className="flex items-center space-x-3">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold"
                >
                  🤖
                </motion.div>
                <div>
                  <h3 className={`font-bold ${themeClasses.text}`}>AI Assistant</h3>
                  <p className={`text-sm ${themeClasses.textMuted}`}>Online</p>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 p-4 h-80 overflow-y-auto space-y-4">
              {messages.map((message, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-xs px-4 py-3 rounded-2xl ${
                      message.type === "user"
                        ? "bg-gradient-to-r from-cyan-500 to-purple-600 text-white"
                        : theme === "dark"
                          ? "bg-slate-700/50 text-gray-300"
                          : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    <p className="text-sm">{message.content}</p>
                  </div>
                </motion.div>
              ))}

              {isTyping && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-start">
                  <div className={`px-4 py-3 rounded-2xl ${theme === "dark" ? "bg-slate-700/50" : "bg-gray-100"}`}>
                    <div className="flex space-x-1">
                      {[0, 1, 2].map((i) => (
                        <motion.div
                          key={i}
                          animate={{ scale: [1, 1.5, 1] }}
                          transition={{ duration: 0.6, repeat: Number.POSITIVE_INFINITY, delay: i * 0.2 }}
                          className={`w-2 h-2 rounded-full ${theme === "dark" ? "bg-gray-400" : "bg-gray-600"}`}
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Questions */}
            <div className="p-4 border-t border-gray-200 dark:border-slate-700">
              <div className="flex flex-wrap gap-2 mb-4">
                {quickQuestions.map((question, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setInputValue(question)}
                    className={`px-3 py-1 text-xs rounded-full ${themeClasses.buttonSecondary} transition-all duration-200`}
                  >
                    {question}
                  </motion.button>
                ))}
              </div>

              {/* Input */}
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                  placeholder="Type your message..."
                  className={`flex-1 px-4 py-3 rounded-xl ${themeClasses.inputBg} ${themeClasses.inputBorder} border focus:outline-none focus:ring-2 focus:ring-cyan-500/20 ${themeClasses.text} placeholder-gray-400`}
                />
                <motion.button
                  onClick={handleSendMessage}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-xl font-medium"
                >
                  Send
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
