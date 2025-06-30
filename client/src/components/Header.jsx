"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"

export default function Header({ activeSection, setActiveSection }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navItems = [
    { id: "intro", label: "Home", icon: "🏠" },
    { id: "skills", label: "Skills", icon: "⚡" },
    { id: "projects", label: "Projects", icon: "🚀" },
    { id: "achievements", label: "Achievements", icon: "🏆" },
    { id: "education", label: "Education", icon: "🎓" },
    { id: "contact", label: "Contact", icon: "📧" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        isScrolled ? "bg-white/90 backdrop-blur-xl shadow-xl border-b border-white/30" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          >
            VARUNESH T
          </motion.div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-2">
            {navItems.map((item, index) => (
              <motion.li
                key={item.id}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <motion.button
                  onClick={() => setActiveSection(item.id)}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`relative px-5 py-3 rounded-full font-medium transition-all duration-300 ${
                    activeSection === item.id
                      ? "text-white bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg"
                      : "text-gray-700 hover:text-blue-600 hover:bg-white/60 backdrop-blur-sm"
                  }`}
                >
                  <span className="mr-2">{item.icon}</span>
                  {item.label}
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full -z-10"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </motion.button>
              </motion.li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-3 rounded-xl bg-white/30 backdrop-blur-sm border border-white/40"
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <motion.div
                animate={isMobileMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                className="w-full h-0.5 bg-gray-700 transition-all rounded-full"
              />
              <motion.div
                animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                className="w-full h-0.5 bg-gray-700 transition-all rounded-full"
              />
              <motion.div
                animate={isMobileMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                className="w-full h-0.5 bg-gray-700 transition-all rounded-full"
              />
            </div>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={isMobileMenuOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
          className="md:hidden overflow-hidden bg-white/95 backdrop-blur-xl rounded-2xl mt-4 border border-white/40"
        >
          <ul className="py-4 space-y-2">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => {
                    setActiveSection(item.id)
                    setIsMobileMenuOpen(false)
                  }}
                  className={`w-full text-left px-6 py-4 rounded-xl transition-all duration-300 ${
                    activeSection === item.id
                      ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white"
                      : "text-gray-700 hover:bg-blue-50"
                  }`}
                >
                  <span className="mr-3">{item.icon}</span>
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </motion.div>
      </nav>
    </motion.header>
  )
}