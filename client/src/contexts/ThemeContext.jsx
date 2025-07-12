"use client"

import { createContext, useContext, useState, useEffect } from "react"

const ThemeContext = createContext()

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}

export const ThemeProvider = ({ children }) => {
  // Use lazy initializer to read localStorage only once
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("portfolio-theme") || "dark"
  })

  useEffect(() => {
    localStorage.setItem("portfolio-theme", theme)
    document.documentElement.setAttribute("data-theme", theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"))
  }

  const getThemeClasses = () => {
    if (theme === "light") {
      return {
        bg: "bg-gradient-to-br from-gray-50 via-blue-50 to-gray-100",
        cardBg: "bg-white/90",
        text: "text-gray-900",
        textSecondary: "text-gray-700",
        textMuted: "text-gray-600",
        border: "border-gray-300",
        borderHover: "hover:border-blue-500",
        accent: "text-blue-600",
        accentHover: "hover:text-blue-700",
        shadow: "shadow-xl shadow-blue-200/30",
        glowBg: "bg-blue-500/20",
        navBg: "bg-white/95",
        inputBg: "bg-white",
        inputBorder: "border-gray-300",
        buttonPrimary: "bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700",
        buttonSecondary: "bg-gray-200 hover:bg-gray-300 text-gray-800 border-gray-400",
        // Additional classes for better light theme visibility
        headingText: "text-gray-900",
        bodyText: "text-gray-800",
        mutedText: "text-gray-600",
        linkText: "text-blue-600",
        skillBadge: "bg-blue-100 text-blue-800 border-blue-200",
        projectCard: "bg-white/95 border-gray-200 hover:border-blue-300",
        achievementCard: "bg-white/95 border-gray-200 hover:border-yellow-400",
        educationCard: "bg-white/95 border-gray-200 hover:border-green-400",
        contactCard: "bg-white/95 border-gray-200 hover:border-purple-400",
      }
    }
    return {
      bg: "bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900",
      cardBg: "bg-slate-800/50",
      text: "text-white",
      textSecondary: "text-gray-300",
      textMuted: "text-gray-400",
      border: "border-slate-700/50",
      borderHover: "hover:border-cyan-500/50",
      accent: "text-cyan-400",
      accentHover: "hover:text-cyan-300",
      shadow: "shadow-2xl shadow-cyan-500/10",
      glowBg: "bg-cyan-500/10",
      navBg: "bg-slate-900/80",
      inputBg: "bg-slate-700/50",
      inputBorder: "border-slate-600/50",
      buttonPrimary: "bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700",
      buttonSecondary: "bg-slate-800/50 hover:bg-slate-700/50 text-cyan-400 border-cyan-500/30",
      // Keep existing dark theme classes
      headingText: "text-white",
      bodyText: "text-gray-300",
      mutedText: "text-gray-400",
      linkText: "text-cyan-400",
      skillBadge: "bg-slate-800/50 text-cyan-400 border-cyan-500/30",
      projectCard: "bg-slate-800/50 border-slate-700/50 hover:border-purple-500/50",
      achievementCard: "bg-slate-800/50 border-slate-700/50 hover:border-yellow-500/50",
      educationCard: "bg-slate-800/50 border-slate-700/50 hover:border-green-500/50",
      contactCard: "bg-slate-800/50 border-slate-700/50 hover:border-cyan-500/50",
    }
  }

  return <ThemeContext.Provider value={{ theme, toggleTheme, getThemeClasses }}>{children}</ThemeContext.Provider>
}
