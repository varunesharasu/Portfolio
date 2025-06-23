import { useState, useRef } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Intro from './pages/Intro'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import Education from './pages/Education'
import Contact from './pages/Contact'

function App() {
  const [activeSection, setActiveSection] = useState('intro')

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

  const handleSectionChange = (section) => {
    setActiveSection(section)
    sectionRefs[section]?.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header activeSection={activeSection} setActiveSection={handleSectionChange} />
      
      <main className="flex-grow">
        <div ref={introRef}><Intro /></div>
        <div ref={skillsRef}><Skills /></div>
        <div ref={projectsRef}><Projects /></div>
        <div ref={educationRef}><Education /></div>
        <div ref={contactRef}><Contact /></div>
      </main>
      
      <Footer />
    </div>
  )
}

export default App