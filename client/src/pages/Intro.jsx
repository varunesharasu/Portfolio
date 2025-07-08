"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"

export default function Intro() {
  const [currentRole, setCurrentRole] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  const roles = ["Full Stack Developer", "MERN Stack Specialist", "Problem Solver", "Tech Innovator"]

  const skills = ["React", "Node.js", "MongoDB", "Express", "JavaScript", "Python"]

  useEffect(() => {
    setIsVisible(true)
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-24 pb-12 relative overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -100 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="space-y-8"
          >
            {/* Greeting */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-4"
            >
              <motion.span
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                className="inline-block px-6 py-3 bg-slate-800/50 backdrop-blur-sm rounded-full border border-cyan-500/30 text-cyan-400 font-medium"
              >
                ◉ Available for opportunities
              </motion.span>

              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
                <span className="text-white">Hello, I'm</span>
                <br />
                <motion.span
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY }}
                  className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent bg-300%"
                  style={{ backgroundSize: "300% 300%" }}
                >
                  VARUNESH
                </motion.span>
              </h1>
            </motion.div>

            {/* Dynamic Role */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="h-16 flex items-center"
            >
              <span className="text-2xl md:text-3xl text-gray-300 mr-4">I'm a</span>
              <motion.span
                key={currentRole}
                initial={{ opacity: 0, y: 20, rotateX: -90 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                exit={{ opacity: 0, y: -20, rotateX: 90 }}
                transition={{ duration: 0.5 }}
                className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"
              >
                {roles[currentRole]}
              </motion.span>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="text-xl text-gray-300 leading-relaxed max-w-2xl"
            >
              Passionate about creating innovative digital solutions and building exceptional user experiences. I
              transform ideas into reality through clean code and modern technologies.
            </motion.p>

            {/* Skills Tags */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="flex flex-wrap gap-3"
            >
              {skills.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1 + index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="px-4 py-2 bg-slate-800/50 backdrop-blur-sm rounded-full border border-cyan-500/30 text-cyan-400 text-sm font-medium"
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <motion.a
                href="https://www.linkedin.com/in/varunesht/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="relative group px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full font-semibold text-white overflow-hidden"
              >
                <motion.div
                  animate={{ x: [-100, 100] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
                />
                <span className="relative z-10 flex items-center justify-center space-x-2">
                  <span>Let's Connect</span>
                  <span>→</span>
                </span>
              </motion.a>

              <motion.a
                href="/22ITR113_VARUNESH_T.pdf"
                download="Varunesh_T_Resume.pdf"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-slate-800/50 backdrop-blur-sm rounded-full border border-cyan-500/30 text-cyan-400 font-semibold hover:bg-slate-700/50 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Download CV</span>
                <span>↓</span>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Content - 3D Profile */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 100 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Main Image Container */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                className="relative"
              >
                <div className="w-80 h-80 md:w-96 md:h-96 relative">
                  {/* Rotating Border */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 p-1"
                  >
                    <div className="w-full h-full rounded-full bg-slate-900" />
                  </motion.div>

                  {/* Profile Image */}
                  <div className="absolute inset-2 rounded-full overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900">
                    <img
                      src="/me.jpg?height=400&width=400"
                      alt="VARUNESH T"
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                </div>
              </motion.div>

              {/* Floating Elements */}
              <motion.div
                animate={{
                  y: [0, -15, 0],
                  rotate: [0, 10, 0],
                }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, delay: 0.5 }}
                className="absolute -top-4 -right-4 w-16 h-16 bg-slate-800/90 backdrop-blur-sm rounded-2xl border border-cyan-500/30 flex items-center justify-center text-2xl"
              >
                ⚛️
              </motion.div>

              <motion.div
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, -10, 0],
                }}
                transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-slate-800/90 backdrop-blur-sm rounded-2xl border border-purple-500/30 flex items-center justify-center text-2xl"
              >
                💻
              </motion.div>

              <motion.div
                animate={{
                  y: [0, -12, 0],
                  rotate: [0, 5, 0],
                }}
                transition={{ duration: 3.5, repeat: Number.POSITIVE_INFINITY, delay: 1.5 }}
                className="absolute top-1/2 -right-8 w-12 h-12 bg-slate-800/90 backdrop-blur-sm rounded-xl border border-pink-500/30 flex items-center justify-center text-lg"
              >
                🚀
              </motion.div>

              <motion.div
                animate={{
                  y: [0, -8, 0],
                  rotate: [0, -5, 0],
                }}
                transition={{ duration: 4.5, repeat: Number.POSITIVE_INFINITY, delay: 2 }}
                className="absolute top-1/4 -left-8 w-12 h-12 bg-slate-800/90 backdrop-blur-sm rounded-xl border border-cyan-500/30 flex items-center justify-center text-lg"
              >
                🎨
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
