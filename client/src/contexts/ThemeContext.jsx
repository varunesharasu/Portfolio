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
  const [theme, setTheme] = useState("dark")

  useEffect(() => {
    const savedTheme = localStorage.getItem("portfolio-theme")
    if (savedTheme) {
      setTheme(savedTheme)
    }
  }, [])

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
        cardBg: "bg-white/80",
        text: "text-gray-900",
        textSecondary: "text-gray-600",
        textMuted: "text-gray-500",
        border: "border-gray-200",
        borderHover: "hover:border-blue-400",
        accent: "text-blue-600",
        accentHover: "hover:text-blue-700",
        shadow: "shadow-lg shadow-blue-100/50",
        glowBg: "bg-blue-500/10",
        navBg: "bg-white/90",
        inputBg: "bg-gray-50",
        inputBorder: "border-gray-300",
        buttonPrimary: "bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700",
        buttonSecondary: "bg-gray-100 hover:bg-gray-200 text-gray-700 border-gray-300",
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
    }
  }

  return <ThemeContext.Provider value={{ theme, toggleTheme, getThemeClasses }}>{children}</ThemeContext.Provider>
}
