import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Intro from './pages/Intro'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import Education from './pages/Education'
import Contact from './pages/Contact'

function App() {
  const [activeSection, setActiveSection] = useState('intro')

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <main className="flex-grow">
        <Intro/>
        <Skills />
        <Projects />
        <Education />
        <Contact /> 
      </main>
      
      <Footer />
    </div>
  )
}

export default App