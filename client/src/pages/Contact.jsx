"use client"

import { motion } from "framer-motion"
import { useState } from "react"

export default function Contact({ showNotification }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsSubmitting(false)
    setFormData({ name: "", email: "", subject: "", message: "" })

    // Show success notification after 3 more seconds (total 5 seconds from button click)
    setTimeout(() => {
      if (showNotification) {
        showNotification("Message sent successfully! The author will respond as soon as possible.")
      }
    }, 3000)
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const contactInfo = [
    {
      icon: "📧",
      title: "Email",
      value: "tvarunesharasu@gmail.com",
      color: "from-cyan-400 to-blue-500",
      link: "mailto:tvarunesharasu@gmail.com",
    },
    {
      icon: "📱",
      title: "Phone",
      value: "+91 93607 93223",
      color: "from-green-400 to-emerald-500",
      link: "tel:+919360793223",
    },
    {
      icon: "📍",
      title: "Location",
      value: "Erode, Tamil Nadu",
      color: "from-purple-400 to-pink-500",
      link: "#",
    },
  ]

  const socialLinks = [
    {
      icon: "⚡",
      name: "GitHub",
      url: "https://github.com/varunesharasu",
      color: "hover:bg-slate-700",
    },
    {
      icon: "◈",
      name: "LinkedIn",
      url: "https://linkedin.com/in/varunesht/",
      color: "hover:bg-blue-600",
    },
    {
      icon: "◇",
      name: "Twitter",
      url: "#",
      color: "hover:bg-blue-400",
    },
    {
      icon: "◆",
      name: "Instagram",
      url: "#",
      color: "hover:bg-pink-500",
    },
  ]

  return (
    <section className="py-20 px-6 relative overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", bounce: 0.5 }}
            className="inline-block mb-6"
          >
            <div className="relative">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-2xl blur-lg opacity-30"
              />
              <div className="relative bg-slate-800/90 backdrop-blur-sm px-6 py-3 rounded-2xl border border-cyan-500/30">
                <span className="text-cyan-400 font-semibold">◐ Let's Connect</span>
              </div>
            </div>
          </motion.div>

          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-white">Get In</span>
            <br />
            <motion.span
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY }}
              className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent bg-300%"
              style={{ backgroundSize: "300% 300%" }}
            >
              Touch
            </motion.span>
          </h2>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Have a project in mind or want to discuss opportunities? Let's create something amazing together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h3 className="text-3xl font-bold text-white mb-8">Contact Information</h3>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.link}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, x: 10 }}
                  className="flex items-center p-6 bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 group block"
                >
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    className={`w-16 h-16 bg-gradient-to-br ${info.color} rounded-2xl flex items-center justify-center text-2xl text-white shadow-lg mr-6`}
                  >
                    {info.icon}
                  </motion.div>
                  <div>
                    <h4 className="text-gray-400 text-sm font-medium mb-1">{info.title}</h4>
                    <p className="text-white font-semibold text-lg group-hover:text-cyan-400 transition-colors">
                      {info.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="pt-8"
            >
              <h3 className="text-2xl font-bold text-white mb-6">Follow Me</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 + 0.5 }}
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-16 h-16 bg-slate-800/50 backdrop-blur-sm ${social.color} rounded-2xl flex items-center justify-center text-2xl text-cyan-400 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 group relative overflow-hidden`}
                  >
                    <motion.div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span className="relative z-10 group-hover:text-white transition-colors">{social.icon}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <form
              onSubmit={handleSubmit}
              className="relative bg-slate-800/50 backdrop-blur-sm p-8 rounded-3xl border border-slate-700/50 overflow-hidden"
            >
              {/* Form Glow Effect */}
              <motion.div
                animate={{ opacity: [0, 0.1, 0] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-600/10 rounded-3xl"
              />

              <div className="space-y-6 relative z-10">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <label htmlFor="name" className="block text-white font-semibold mb-2">
                    Name *
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.02, boxShadow: "0 0 20px rgba(6, 182, 212, 0.3)" }}
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-4 bg-slate-700/50 backdrop-blur-sm border border-slate-600/50 rounded-xl focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300 text-white placeholder-gray-400"
                    placeholder="Your full name"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <label htmlFor="email" className="block text-white font-semibold mb-2">
                    Email *
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.02, boxShadow: "0 0 20px rgba(6, 182, 212, 0.3)" }}
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-4 bg-slate-700/50 backdrop-blur-sm border border-slate-600/50 rounded-xl focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300 text-white placeholder-gray-400"
                    placeholder="your.email@example.com"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <label htmlFor="subject" className="block text-white font-semibold mb-2">
                    Subject
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.02, boxShadow: "0 0 20px rgba(6, 182, 212, 0.3)" }}
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-4 bg-slate-700/50 backdrop-blur-sm border border-slate-600/50 rounded-xl focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300 text-white placeholder-gray-400"
                    placeholder="What's this about?"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <label htmlFor="message" className="block text-white font-semibold mb-2">
                    Message *
                  </label>
                  <motion.textarea
                    whileFocus={{ scale: 1.02, boxShadow: "0 0 20px rgba(6, 182, 212, 0.3)" }}
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    required
                    className="w-full px-4 py-4 bg-slate-700/50 backdrop-blur-sm border border-slate-600/50 rounded-xl focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300 resize-none text-white placeholder-gray-400"
                    placeholder="Tell me about your project or idea..."
                  />
                </motion.div>

                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0 10px 30px rgba(6, 182, 212, 0.4)",
                    y: -2,
                  }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center relative overflow-hidden group"
                >
                  {isSubmitting ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                      className="w-6 h-6 border-2 border-white border-t-transparent rounded-full mr-2"
                    />
                  ) : (
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                      className="mr-2"
                    >
                      →
                    </motion.span>
                  )}
                  <span className="relative z-10">{isSubmitting ? "Sending..." : "Send Message"}</span>

                  {/* Button shine effect */}
                  <motion.div
                    animate={{ x: [-100, 100] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 group-hover:via-white/30"
                  />
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
