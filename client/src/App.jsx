"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ThemeProvider } from "./contexts/ThemeContext"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Intro from "./pages/Intro"
import Skills from "./pages/Skills"
import Projects from "./pages/Projects"
import Education from "./pages/Education"
import Achievements from "./pages/achievements"
import Contact from "./pages/Contact"
import LoadingScreen from "./components/loading-screen"
import BackgroundEffects from "./components/background-effects"
import MusicPlayer from "./components/MusicPlayer"
import { useTheme } from "./contexts/ThemeContext"

function AppContent() {
  const [activeSection, setActiveSection] = useState("intro")
  const [isLoading, setIsLoading] = useState(true)
  const [scrollY, setScrollY] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [notification, setNotification] = useState(null)
  const { getThemeClasses } = useTheme()
  const themeClasses = getThemeClasses()

  const introRef = useRef(null)
  const skillsRef = useRef(null)
  const projectsRef = useRef(null)
  const educationRef = useRef(null)
  const achievementsRef = useRef(null)
  const contactRef = useRef(null)

  const sectionRefs = {
    intro: introRef,
    skills: skillsRef,
    projects: projectsRef,
    education: educationRef,
    achievements: achievementsRef,
    contact: contactRef,
  }

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3000)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    const handleMouseMove = (e) => setMousePosition({ x: e.clientX, y: e.clientY })

    window.addEventListener("scroll", handleScroll)
    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  const handleSectionChange = (section) => {
    setActiveSection(section)
    sectionRefs[section]?.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  }

  const showNotification = (message, type = "success") => {
    setNotification({ message, type })
    setTimeout(() => setNotification(null), 5000)
  }

  if (isLoading) {
    return <LoadingScreen />
  }

  return (
    <div className={`min-h-screen ${themeClasses.bg} relative overflow-x-hidden transition-all duration-500`}>
      <BackgroundEffects mousePosition={mousePosition} />

      {/* Cursor follower */}
      <motion.div
        className="fixed w-6 h-6 bg-cyan-400 rounded-full pointer-events-none z-50 mix-blend-difference"
        animate={{
          x: mousePosition.x - 12,
          y: mousePosition.y - 12,
        }}
        transition={{
          type: "spring",
          damping: 30,
          stiffness: 200,
        }}
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10"
      >
        <Header activeSection={activeSection} setActiveSection={handleSectionChange} />

        <main className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key="content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, staggerChildren: 0.2 }}
            >
              <div ref={introRef}>
                <Intro />
              </div>
              <div ref={skillsRef}>
                <Skills />
              </div>
              <div ref={projectsRef}>
                <Projects />
              </div>
              <div ref={educationRef}>
                <Education />
              </div>
              <div ref={achievementsRef}>
                <Achievements />
              </div>
              <div ref={contactRef}>
                <Contact showNotification={showNotification} />
              </div>
            </motion.div>
          </AnimatePresence>
        </main>

        <Footer />
      </motion.div>

      {/* Scroll Progress */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 z-50 origin-left"
        style={{
          scaleX: scrollY / (document.documentElement.scrollHeight - window.innerHeight),
        }}
      />

      {/* Floating Action Button - Back to original position */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: scrollY > 100 ? 1 : 0, scale: scrollY > 100 ? 1 : 0 }}
        className="fixed bottom-8 right-8 z-40"
      >
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className={`w-14 h-14 ${themeClasses.buttonPrimary} rounded-full flex items-center justify-center text-white shadow-2xl backdrop-blur-sm border border-white/20`}
        >
          <span className="text-xl">↑</span>
        </motion.button>
      </motion.div>

      {/* Success Notification */}
      {notification && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.9 }}
          className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 max-w-sm"
        >
          <div
            className={`p-4 rounded-2xl backdrop-blur-sm border shadow-2xl ${
              notification.type === "success"
                ? "bg-green-500/90 border-green-400/50 text-white"
                : "bg-red-500/90 border-red-400/50 text-white"
            }`}
          >
            <div className="flex items-center space-x-3">
              <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 0.5 }} className="text-2xl">
                {notification.type === "success" ? "✅" : "❌"}
              </motion.div>
              <div>
                <p className="font-semibold text-sm">{notification.message}</p>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Music Player */}
      <MusicPlayer />
    </div>
  )
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  )
}

export default App
