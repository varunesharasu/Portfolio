// "use client"

// import { motion } from "framer-motion"
// import { useState } from "react"

// export default function Contact() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     subject: "",
//     message: "",
//   })
//   const [isSubmitting, setIsSubmitting] = useState(false)

//   const handleSubmit = async (e) => {
//     e.preventDefault()
//     setIsSubmitting(true)
//     // Simulate form submission
//     await new Promise((resolve) => setTimeout(resolve, 2000))
//     setIsSubmitting(false)
//     setFormData({ name: "", email: "", subject: "", message: "" })
//   }

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value })
//   }

//   const contactInfo = [
//     {
//       icon: "📧",
//       title: "Email",
//       value: "tvarunesharasu@gmail.com",
//       color: "from-blue-500 to-cyan-500",
//       link: "mailto:tvarunesharasu@gmail.com",
//     },
//     {
//       icon: "📱",
//       title: "Phone",
//       value: "+91 93607 93223",
//       color: "from-green-500 to-emerald-500",
//       link: "tel:+919360793223",
//     },
//     {
//       icon: "📍",
//       title: "Location",
//       value: "Erode, Tamil Nadu",
//       color: "from-purple-500 to-pink-500",
//       link: "#",
//     },
//   ]

//   const socialLinks = [
//     {
//       icon: "📚",
//       name: "GitHub",
//       url: "https://github.com/varunesharasu",
//       color: "hover:bg-gray-800",
//     },
//     {
//       icon: "💼",
//       name: "LinkedIn",
//       url: "https://linkedin.com/in/varunesht/",
//       color: "hover:bg-blue-600",
//     },
//     {
//       icon: "🐦",
//       name: "Twitter",
//       url: "#",
//       color: "hover:bg-blue-400",
//     },
//     {
//       icon: "📷",
//       name: "Instagram",
//       url: "#",
//       color: "hover:bg-pink-500",
//     },
//   ]

//   return (
//     <section className="py-20 px-6 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
//       <div className="container mx-auto max-w-6xl relative z-10">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="text-center mb-16"
//         >
//           <motion.span
//             initial={{ opacity: 0, scale: 0.5 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             transition={{ delay: 0.2 }}
//             whileHover={{ scale: 1.05 }}
//             className="inline-block px-6 py-3 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 rounded-full text-sm font-medium mb-6 shadow-lg backdrop-blur-sm border border-white/50"
//           >
//             💬 Let's Connect
//           </motion.span>
//           <h2 className="text-5xl lg:text-6xl font-bold text-gray-800 mb-6">
//             Get In{" "}
//             <motion.span
//               animate={{
//                 backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
//               }}
//               transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
//               className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent bg-300%"
//               style={{ backgroundSize: "300% 300%" }}
//             >
//               Touch
//             </motion.span>
//           </h2>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
//             Have a project in mind or want to discuss potential opportunities? I'd love to hear from you!
//           </p>
//         </motion.div>

//         <div className="grid lg:grid-cols-2 gap-12">
//           {/* Contact Information */}
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//           >
//             <h3 className="text-3xl font-bold text-gray-800 mb-8">Contact Information</h3>
//             <div className="space-y-6">
//               {contactInfo.map((info, index) => (
//                 <motion.a
//                   key={index}
//                   href={info.link}
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ delay: index * 0.1 }}
//                   whileHover={{ scale: 1.02, x: 10 }}
//                   className="flex items-center p-6 bg-white/80 backdrop-blur-lg rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-white/50 group block"
//                 >
//                   <motion.div
//                     whileHover={{ scale: 1.2, rotate: 10 }}
//                     className={`bg-gradient-to-br ${info.color} p-4 rounded-2xl text-white shadow-lg mr-6 text-2xl`}
//                   >
//                     {info.icon}
//                   </motion.div>
//                   <div>
//                     <h4 className="text-gray-500 text-sm font-medium mb-1">{info.title}</h4>
//                     <p className="text-gray-800 font-semibold text-lg group-hover:text-blue-600 transition-colors">
//                       {info.value}
//                     </p>
//                   </div>
//                 </motion.a>
//               ))}
//             </div>

//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.4 }}
//               className="mt-12"
//             >
//               <h3 className="text-2xl font-bold text-gray-800 mb-6">Follow Me</h3>
//               <div className="flex space-x-4">
//                 {socialLinks.map((social, index) => (
//                   <motion.a
//                     key={index}
//                     href={social.url}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     initial={{ opacity: 0, scale: 0 }}
//                     whileInView={{ opacity: 1, scale: 1 }}
//                     transition={{ delay: index * 0.1 + 0.5 }}
//                     whileHover={{ scale: 1.1, y: -5 }}
//                     whileTap={{ scale: 0.95 }}
//                     className={`w-14 h-14 bg-white/80 backdrop-blur-lg ${social.color} text-white rounded-2xl flex items-center justify-center text-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-white/50 relative overflow-hidden group`}
//                   >
//                     <span className="relative z-10 text-gray-700 group-hover:text-white transition-colors">
//                       {social.icon}
//                     </span>
//                   </motion.a>
//                 ))}
//               </div>
//             </motion.div>
//           </motion.div>

//           {/* Contact Form */}
//           <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
//             <form
//               onSubmit={handleSubmit}
//               className="bg-white/80 backdrop-blur-lg p-8 rounded-3xl shadow-xl border border-white/50 relative overflow-hidden"
//             >
//               <div className="space-y-6 relative z-10">
//                 <motion.div
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ delay: 0.1 }}
//                 >
//                   <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
//                     Name *
//                   </label>
//                   <motion.input
//                     whileFocus={{ scale: 1.02, boxShadow: "0 0 20px rgba(59, 130, 246, 0.2)" }}
//                     type="text"
//                     id="name"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     required
//                     className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 bg-white/60 backdrop-blur-sm"
//                     placeholder="Your full name"
//                   />
//                 </motion.div>

//                 <motion.div
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ delay: 0.2 }}
//                 >
//                   <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
//                     Email *
//                   </label>
//                   <motion.input
//                     whileFocus={{ scale: 1.02, boxShadow: "0 0 20px rgba(59, 130, 246, 0.2)" }}
//                     type="email"
//                     id="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     required
//                     className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 bg-white/60 backdrop-blur-sm"
//                     placeholder="your.email@example.com"
//                   />
//                 </motion.div>

//                 <motion.div
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ delay: 0.3 }}
//                 >
//                   <label htmlFor="subject" className="block text-gray-700 font-semibold mb-2">
//                     Subject
//                   </label>
//                   <motion.input
//                     whileFocus={{ scale: 1.02, boxShadow: "0 0 20px rgba(59, 130, 246, 0.2)" }}
//                     type="text"
//                     id="subject"
//                     name="subject"
//                     value={formData.subject}
//                     onChange={handleChange}
//                     className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 bg-white/60 backdrop-blur-sm"
//                     placeholder="What's this about?"
//                   />
//                 </motion.div>

//                 <motion.div
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ delay: 0.4 }}
//                 >
//                   <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
//                     Message *
//                   </label>
//                   <motion.textarea
//                     whileFocus={{ scale: 1.02, boxShadow: "0 0 20px rgba(59, 130, 246, 0.2)" }}
//                     id="message"
//                     name="message"
//                     value={formData.message}
//                     onChange={handleChange}
//                     rows={6}
//                     required
//                     className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 resize-none bg-white/60 backdrop-blur-sm"
//                     placeholder="Tell me about your project or idea..."
//                   />
//                 </motion.div>

//                 <motion.button
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ delay: 0.5 }}
//                   whileHover={{
//                     scale: 1.02,
//                     boxShadow: "0 10px 30px rgba(59, 130, 246, 0.3)",
//                     y: -2,
//                   }}
//                   whileTap={{ scale: 0.98 }}
//                   type="submit"
//                   disabled={isSubmitting}
//                   className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center relative overflow-hidden group"
//                 >
//                   {isSubmitting ? (
//                     <motion.div
//                       animate={{ rotate: 360 }}
//                       transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
//                       className="w-6 h-6 border-2 border-white border-t-transparent rounded-full mr-2"
//                     />
//                   ) : (
//                     <span className="mr-2">🚀</span>
//                   )}
//                   <span className="relative z-10">{isSubmitting ? "Sending..." : "Send Message"}</span>
//                 </motion.button>
//               </div>
//             </form>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   )
// }



















"use client"

import { motion } from "framer-motion"
import { useState } from "react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null) // 'success', 'error', or null

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000"}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (data.success) {
        setSubmitStatus("success")
        setFormData({ name: "", email: "", subject: "", message: "" })
      } else {
        setSubmitStatus("error")
        console.error("Form submission error:", data.error)
      }
    } catch (error) {
      console.error("Network error:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
      // Clear status after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000)
    }
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const contactInfo = [
    {
      icon: "📧",
      title: "Email",
      value: "tvarunesharasu@gmail.com",
      color: "from-blue-500 to-cyan-500",
      link: "mailto:tvarunesharasu@gmail.com",
    },
    {
      icon: "📱",
      title: "Phone",
      value: "+91 93607 93223",
      color: "from-green-500 to-emerald-500",
      link: "tel:+919360793223",
    },
    {
      icon: "📍",
      title: "Location",
      value: "Erode, Tamil Nadu",
      color: "from-purple-500 to-pink-500",
      link: "#",
    },
  ]

  const socialLinks = [
    {
      icon: "📚",
      name: "GitHub",
      url: "https://github.com/varunesharasu",
      color: "hover:bg-gray-800",
    },
    {
      icon: "💼",
      name: "LinkedIn",
      url: "https://linkedin.com/in/varunesht/",
      color: "hover:bg-blue-600",
    },
    {
      icon: "🐦",
      name: "Twitter",
      url: "#",
      color: "hover:bg-blue-400",
    },
    {
      icon: "📷",
      name: "Instagram",
      url: "#",
      color: "hover:bg-pink-500",
    },
  ]

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
            className="inline-block px-6 py-3 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 rounded-full text-sm font-medium mb-6 shadow-lg backdrop-blur-sm border border-white/50"
          >
            💬 Let's Connect
          </motion.span>
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-800 mb-6">
            Get In{" "}
            <motion.span
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
              className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent bg-300%"
              style={{ backgroundSize: "300% 300%" }}
            >
              Touch
            </motion.span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Have a project in mind or want to discuss potential opportunities? I'd love to hear from you!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-bold text-gray-800 mb-8">Contact Information</h3>
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.link}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, x: 10 }}
                  className="flex items-center p-6 bg-white/80 backdrop-blur-lg rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-white/50 group block"
                >
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    className={`bg-gradient-to-br ${info.color} p-4 rounded-2xl text-white shadow-lg mr-6 text-2xl`}
                  >
                    {info.icon}
                  </motion.div>
                  <div>
                    <h4 className="text-gray-500 text-sm font-medium mb-1">{info.title}</h4>
                    <p className="text-gray-800 font-semibold text-lg group-hover:text-blue-600 transition-colors">
                      {info.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-12"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Follow Me</h3>
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
                    className={`w-14 h-14 bg-white/80 backdrop-blur-lg ${social.color} text-white rounded-2xl flex items-center justify-center text-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-white/50 relative overflow-hidden group`}
                  >
                    <span className="relative z-10 text-gray-700 group-hover:text-white transition-colors">
                      {social.icon}
                    </span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <form
              onSubmit={handleSubmit}
              className="bg-white/80 backdrop-blur-lg p-8 rounded-3xl shadow-xl border border-white/50 relative overflow-hidden"
            >
              {/* Status Messages */}
              {submitStatus === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-green-100 border border-green-300 text-green-700 rounded-xl"
                >
                  ✅ Message sent successfully! Thank you for reaching out. I'll get back to you soon.
                </motion.div>
              )}

              {submitStatus === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-red-100 border border-red-300 text-red-700 rounded-xl"
                >
                  ❌ Failed to send message. Please try again or contact me directly.
                </motion.div>
              )}

              <div className="space-y-6 relative z-10">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                    Name *
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.02, boxShadow: "0 0 20px rgba(59, 130, 246, 0.2)" }}
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    maxLength={100}
                    className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 bg-white/60 backdrop-blur-sm"
                    placeholder="Your full name"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                    Email *
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.02, boxShadow: "0 0 20px rgba(59, 130, 246, 0.2)" }}
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 bg-white/60 backdrop-blur-sm"
                    placeholder="your.email@example.com"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <label htmlFor="subject" className="block text-gray-700 font-semibold mb-2">
                    Subject
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.02, boxShadow: "0 0 20px rgba(59, 130, 246, 0.2)" }}
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    maxLength={200}
                    className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 bg-white/60 backdrop-blur-sm"
                    placeholder="What's this about?"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
                    Message *
                  </label>
                  <motion.textarea
                    whileFocus={{ scale: 1.02, boxShadow: "0 0 20px rgba(59, 130, 246, 0.2)" }}
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    required
                    maxLength={1000}
                    className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 resize-none bg-white/60 backdrop-blur-sm"
                    placeholder="Tell me about your project or idea..."
                  />
                  <div className="text-right text-sm text-gray-500 mt-1">{formData.message.length}/1000</div>
                </motion.div>

                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0 10px 30px rgba(59, 130, 246, 0.3)",
                    y: -2,
                  }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center relative overflow-hidden group"
                >
                  {isSubmitting ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                      className="w-6 h-6 border-2 border-white border-t-transparent rounded-full mr-2"
                    />
                  ) : (
                    <span className="mr-2">🚀</span>
                  )}
                  <span className="relative z-10">{isSubmitting ? "Sending..." : "Send Message"}</span>
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
