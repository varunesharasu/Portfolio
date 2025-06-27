"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"

export default function Intro() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [currentRole, setCurrentRole] = useState(0)

  const roles = ["Full Stack Developer", "MERN Stack Developer", "Problem Solver", "Tech Enthusiast"]

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="h-screen flex items-center justify-center px-6 pt-20 relative overflow-hidden">
      {/* Enhanced Floating Elements */}
      <motion.div
        animate={{
          x: mousePosition.x * 0.02,
          y: mousePosition.y * 0.02,
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          scale: { duration: 4, repeat: Number.POSITIVE_INFINITY },
          rotate: { duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
        }}
        className="absolute top-20 left-4 w-20 h-20 bg-gradient-to-r from-blue-300/30 to-purple-300/30 rounded-full blur-xl"
      />
      <motion.div
        animate={{
          x: mousePosition.x * -0.02,
          y: mousePosition.y * -0.02,
          scale: [1, 1.3, 1],
          rotate: [360, 180, 0],
        }}
        transition={{
          scale: { duration: 5, repeat: Number.POSITIVE_INFINITY },
          rotate: { duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "linear" },
        }}
        className="absolute bottom-20 right-4 w-32 h-32 bg-gradient-to-r from-purple-300/30 to-pink-300/30 rounded-full blur-xl"
      />

      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full lg:w-1/2 text-center lg:text-left order-2 lg:order-1"
        >
          {/* Keep all the text content the same */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-5xl lg:text-7xl font-bold text-gray-800 mb-6 leading-tight"
          >
            Hi, I'm{" "}
            <motion.span
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
              className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent bg-300%"
              style={{ backgroundSize: "300% 300%" }}
            >
              VARUNESH T
            </motion.span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl lg:text-3xl text-gray-600 mb-8 h-12"
          >
            <motion.span
              key={currentRole}
              initial={{ opacity: 0, y: 20, rotateX: -90 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              exit={{ opacity: 0, y: -20, rotateX: 90 }}
              transition={{ duration: 0.5 }}
              className="inline-block"
            >
              {roles[currentRole]}
            </motion.span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-gray-600 mb-10 text-base md:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0"
          >
            To obtain a challenging position in my dream company in order to expand my experience and skills and work
            towards the overall growth of the organisation. Passionate about web development and creating innovative
            solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <motion.a
              href="https://www.linkedin.com/in/varunesht/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(59, 130, 246, 0.4)",
                y: -2,
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-medium text-base md:text-lg shadow-lg transition-all duration-300 relative overflow-hidden group"
            >
              <motion.div
                animate={{ x: [-100, 100] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 group-hover:via-white/30"
              />
              <span className="relative z-10">Let's Connect 🚀</span>
            </motion.a>
            <motion.a
              href="/22ITR113_VARUNESH_T.pdf"
              download="Varunesh_T_Resume.pdf"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 30px rgba(59, 130, 246, 0.2)",
                y: -2,
              }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-blue-500 text-blue-600 hover:bg-blue-500 hover:text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-medium text-base md:text-lg flex items-center justify-center transition-all duration-300 backdrop-blur-sm bg-white/60 relative overflow-hidden group"
            >
              <span className="relative z-10">Download CV �</span>
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full lg:w-1/2 flex justify-center order-1 lg:order-2 mb-8 lg:mb-0"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              y: { duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
            }}
            className="relative"
          >
            <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white shadow-2xl bg-gradient-to-br from-blue-100 to-purple-100 relative">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                className="absolute inset-0 bg-gradient-to-r from-blue-300/20 to-purple-300/20 rounded-full"
              />
              <img
                src="/me.jpg?height=400&width=400"
                alt="Varunesh T"
                className="w-full h-full object-cover object-center relative z-10"
              />
            </div>

            {/* Enhanced Floating Icons - adjusted for mobile */}
            <motion.div
              animate={{
                y: [0, -10, 0],
                rotate: [0, 5, 0],
                scale: [1, 1.05, 1],
              }}
              transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, delay: 0.5 }}
              className="absolute -top-2 -right-2 bg-white rounded-full p-2 md:p-3 shadow-lg hover:shadow-xl transition-shadow"
            >
              <span className="text-lg md:text-xl">⚛️</span>
            </motion.div>
            <motion.div
              animate={{
                y: [0, -8, 0],
                rotate: [0, -5, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
              className="absolute -bottom-2 -left-2 bg-white rounded-full p-2 md:p-3 shadow-lg hover:shadow-xl transition-shadow"
            >
              <span className="text-lg md:text-xl">💻</span>
            </motion.div>
            <motion.div
              animate={{
                y: [0, -8, 0],
                rotate: [0, 3, 0],
                scale: [1, 1.08, 1],
              }}
              transition={{ duration: 3.5, repeat: Number.POSITIVE_INFINITY, delay: 1.5 }}
              className="absolute top-1/2 -right-3 md:-right-4 bg-white rounded-full p-1.5 md:p-2 shadow-lg hover:shadow-xl transition-shadow"
            >
              <span className="text-sm md:text-lg">🚀</span>
            </motion.div>
            <motion.div
              animate={{
                y: [0, -6, 0],
                rotate: [0, -3, 0],
                scale: [1, 1.05, 1],
              }}
              transition={{ duration: 4.5, repeat: Number.POSITIVE_INFINITY, delay: 2 }}
              className="absolute top-1/4 -left-3 md:-left-4 bg-white rounded-full p-1.5 md:p-2 shadow-lg hover:shadow-xl transition-shadow"
            >
              <span className="text-sm md:text-lg">🎨</span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}