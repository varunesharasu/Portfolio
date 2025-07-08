"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"

export default function Header({ activeSection, setActiveSection }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navItems = [
    { id: "intro", label: "Home", icon: "◉" },
    { id: "skills", label: "Skills", icon: "◈" },
    { id: "projects", label: "Projects", icon: "◇" },
    { id: "achievements", label: "Awards", icon: "◆" },
    { id: "education", label: "Education", icon: "◎" },
    { id: "contact", label: "Contact", icon: "◐" },
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
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-700 ${
        isScrolled ? "bg-slate-900/80 backdrop-blur-xl border-b border-cyan-500/30 shadow-2xl" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-6 py-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.div whileHover={{ scale: 1.05 }} className="relative">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-lg blur-sm opacity-30"
            />
            <div className="relative bg-slate-800/90 backdrop-blur-sm px-6 py-3 rounded-lg border border-cyan-500/30">
              <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                VARUNESH.DEV
              </span>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-2">
            {navItems.map((item, index) => (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.5 }}
                onClick={() => setActiveSection(item.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`relative px-6 py-3 rounded-full font-medium transition-all duration-500 group ${
                  activeSection === item.id ? "text-cyan-400" : "text-gray-300 hover:text-white"
                }`}
              >
                {/* Background glow */}
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeNavBg"
                    className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 rounded-full backdrop-blur-sm border border-cyan-500/30"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}

                <span className="relative z-10 flex items-center space-x-2">
                  <span className="text-lg">{item.icon}</span>
                  <span>{item.label}</span>
                </span>

                {/* Hover effect */}
                <motion.div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-600/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden relative w-12 h-12 bg-slate-800/90 backdrop-blur-sm rounded-lg border border-cyan-500/30 flex items-center justify-center"
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <motion.div
                animate={isMobileMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                className="w-full h-0.5 bg-cyan-400 rounded-full"
              />
              <motion.div
                animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                className="w-full h-0.5 bg-cyan-400 rounded-full"
              />
              <motion.div
                animate={isMobileMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                className="w-full h-0.5 bg-cyan-400 rounded-full"
              />
            </div>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={isMobileMenuOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
          className="lg:hidden overflow-hidden"
        >
          <motion.div
            initial={{ y: -20 }}
            animate={isMobileMenuOpen ? { y: 0 } : { y: -20 }}
            className="mt-6 bg-slate-800/90 backdrop-blur-xl rounded-2xl border border-cyan-500/30 p-6"
          >
            <div className="space-y-4">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isMobileMenuOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => {
                    setActiveSection(item.id)
                    setIsMobileMenuOpen(false)
                  }}
                  className={`w-full text-left px-6 py-4 rounded-xl transition-all duration-300 flex items-center space-x-3 ${
                    activeSection === item.id
                      ? "bg-gradient-to-r from-cyan-500/20 to-purple-600/20 text-cyan-400 border border-cyan-500/30"
                      : "text-gray-300 hover:text-white hover:bg-slate-700/50"
                  }`}
                >
                  <span className="text-lg">{item.icon}</span>
                  <span>{item.label}</span>
                </motion.button>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </nav>
    </motion.header>
  )
}
