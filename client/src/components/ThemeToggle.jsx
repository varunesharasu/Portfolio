"use client"

import { motion } from "framer-motion"
import { useTheme } from "../contexts/ThemeContext"

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <motion.button
      onClick={toggleTheme}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`relative w-16 h-8 rounded-full p-1 transition-all duration-300 ${
        theme === "dark" ? "bg-slate-700 border border-cyan-500/30" : "bg-gray-200 border border-blue-300"
      }`}
    >
      <motion.div
        animate={{
          x: theme === "dark" ? 0 : 32,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
        className={`w-6 h-6 rounded-full flex items-center justify-center text-sm ${
          theme === "dark"
            ? "bg-gradient-to-r from-cyan-400 to-blue-500 text-white"
            : "bg-gradient-to-r from-yellow-400 to-orange-500 text-white"
        }`}
      >
        {theme === "dark" ? "🌙" : "☀️"}
      </motion.div>
    </motion.button>
  )
}
