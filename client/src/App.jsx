"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Intro from "./pages/Intro"
import Skills from "./pages/Skills"
import Projects from "./pages/Projects"
import Education from "./pages/Education"
// import Achievements from "./pages/Achievements"
import Contact from "./pages/Contact"
import LoadingScreen from "./components/loading-screen"
import ParticleBackground from "./components/particle-background"

function App() {
  const [activeSection, setActiveSection] = useState("intro")
  const [isLoading, setIsLoading] = useState(true)
  const [scrollY, setScrollY] = useState(0)

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
    const timer = setTimeout(() => setIsLoading(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleSectionChange = (section) => {
    setActiveSection(section)
    sectionRefs[section]?.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  }

  if (isLoading) {
    return <LoadingScreen />
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-x-hidden">
      <ParticleBackground />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative z-10"
      >
        <Header activeSection={activeSection} setActiveSection={handleSectionChange} />

        <main className="flex-grow">
          <AnimatePresence mode="wait">
            <motion.div
              key="content"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, staggerChildren: 0.1 }}
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
                {/* <Achievements /> */}
              </div>
              <div ref={contactRef}>
                <Contact />
              </div>
            </motion.div>
          </AnimatePresence>
        </main>

        <Footer />
      </motion.div>

      {/* Enhanced Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-600 z-50 origin-left shadow-lg"
        style={{
          scaleX: scrollY / (document.documentElement.scrollHeight - window.innerHeight),
        }}
      />

      {/* Floating scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: scrollY > 100 ? 1 : 0 }}
        className="fixed bottom-8 right-8 z-40"
      >
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <span className="text-xl">↑</span>
        </motion.button>
      </motion.div>
    </div>
  )
}

export default App
