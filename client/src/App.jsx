"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Header from "./components/header"
import Footer from "./components/footer"
import Intro from "./pages/intro"
import Skills from "./pages/skills"
import Projects from "./pages/projects"
import Education from "./pages/education"
import Contact from "./pages/contact"
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
  const contactRef = useRef(null)

  const sectionRefs = {
    intro: introRef,
    skills: skillsRef,
    projects: projectsRef,
    education: educationRef,
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
              <div ref={contactRef}>
                <Contact />
              </div>
            </motion.div>
          </AnimatePresence>
        </main>

        <Footer />
      </motion.div>

      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-600 z-50 origin-left"
        style={{
          scaleX: scrollY / (document.documentElement.scrollHeight - window.innerHeight),
        }}
      />
    </div>
  )
}

export default App
