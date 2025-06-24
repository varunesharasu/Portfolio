"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"

export default function Intro() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [currentRole, setCurrentRole] = useState(0)

  const roles = ["Frontend Developer", "Backend Enthusiast", "UI/UX Designer", "Problem Solver"]

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
    <section className="min-h-screen flex items-center justify-center px-6 pt-20 relative overflow-hidden">
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
        className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-blue-400/40 to-purple-400/40 rounded-full blur-xl"
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
        className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-r from-purple-400/40 to-pink-400/40 rounded-full blur-xl"
      />

      {/* New floating geometric shapes */}
      <motion.div
        animate={{
          y: [0, -30, 0],
          rotate: [0, 45, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        className="absolute top-1/3 right-1/4 w-16 h-16 bg-gradient-to-br from-cyan-400/30 to-blue-500/30 transform rotate-45 blur-sm"
      />
      <motion.div
        animate={{
          y: [0, 25, 0],
          x: [0, 15, 0],
          rotate: [0, -30, 0],
        }}
        transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-1/3 left-1/4 w-12 h-12 bg-gradient-to-br from-green-400/30 to-emerald-500/30 rounded-full blur-sm"
      />

      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:w-1/2 text-center lg:text-left"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-6"
          >
            <motion.span
              whileHover={{ scale: 1.05 }}
              className="inline-block px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 rounded-full text-sm font-medium mb-4 shadow-lg backdrop-blur-sm border border-white/50"
            >
              👋 Welcome to my portfolio
            </motion.span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl lg:text-7xl font-bold text-gray-800 mb-6 leading-tight"
          >
            Hi, I'm{" "}
            <motion.span
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
              className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent bg-300% animate-gradient"
              style={{ backgroundSize: "300% 300%" }}
            >
              VARUNESH T
            </motion.span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-2xl lg:text-3xl text-gray-600 mb-8 h-12"
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
            className="text-gray-600 mb-10 text-lg leading-relaxed max-w-2xl"
          >
            I craft exceptional digital experiences with modern technologies. Currently focused on creating responsive
            web applications with React and Node.js, bringing ideas to life through clean code and intuitive design.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
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
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full font-medium text-lg shadow-lg transition-all duration-300 relative overflow-hidden group"
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
              download
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 30px rgba(59, 130, 246, 0.2)",
                y: -2,
              }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-full font-medium text-lg flex items-center justify-center transition-all duration-300 backdrop-blur-sm bg-white/50 relative overflow-hidden group"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileHover={{ scale: 1 }}
                className="absolute inset-0 bg-blue-600 rounded-full"
              />
              <span className="relative z-10">Download CV 📄</span>
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:w-1/2 flex justify-center"
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
            <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white shadow-2xl bg-gradient-to-br from-blue-100 to-purple-100 relative">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full"
              />
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                className="absolute inset-2 bg-gradient-to-r from-cyan-400/10 to-pink-400/10 rounded-full"
              />
              <img
                src="/me.jpg?height=400&width=400"
                alt="Varunesh T"
                className="w-full h-full object-cover object-center relative z-10"
              />
            </div>

            {/* Enhanced Floating Icons */}
            <motion.div
              animate={{
                y: [0, -15, 0],
                rotate: [0, 5, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, delay: 0.5 }}
              className="absolute -top-4 -right-4 bg-white rounded-full p-4 shadow-lg hover:shadow-xl transition-shadow"
            >
              <span className="text-2xl">⚛️</span>
            </motion.div>
            <motion.div
              animate={{
                y: [0, -10, 0],
                rotate: [0, -5, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
              className="absolute -bottom-4 -left-4 bg-white rounded-full p-4 shadow-lg hover:shadow-xl transition-shadow"
            >
              <span className="text-2xl">💻</span>
            </motion.div>
            <motion.div
              animate={{
                y: [0, -12, 0],
                rotate: [0, 3, 0],
                scale: [1, 1.15, 1],
              }}
              transition={{ duration: 3.5, repeat: Number.POSITIVE_INFINITY, delay: 1.5 }}
              className="absolute top-1/2 -right-8 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow"
            >
              <span className="text-xl">🚀</span>
            </motion.div>
            <motion.div
              animate={{
                y: [0, -8, 0],
                rotate: [0, -3, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{ duration: 4.5, repeat: Number.POSITIVE_INFINITY, delay: 2 }}
              className="absolute top-1/4 -left-6 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow"
            >
              <span className="text-xl">🎨</span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
