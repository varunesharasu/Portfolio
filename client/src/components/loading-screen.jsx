// "use client"

// import { motion } from "framer-motion"

// export default function LoadingScreen() {
//   return (
//     <motion.div
//       initial={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       className="fixed inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center z-50"
//     >
//       {/* Background Effects */}
//       <div className="absolute inset-0">
//         <motion.div
//           animate={{
//             scale: [1, 1.5, 1],
//             rotate: [0, 180, 360],
//           }}
//           transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
//           className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 rounded-full blur-3xl"
//         />
//         <motion.div
//           animate={{
//             scale: [1.5, 1, 1.5],
//             rotate: [360, 180, 0],
//           }}
//           transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
//           className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-600/20 rounded-full blur-3xl"
//         />
//       </div>

//       <div className="text-center relative z-10">
//         {/* Logo Animation */}
//         <motion.div
//           initial={{ scale: 0, rotate: -180 }}
//           animate={{ scale: 1, rotate: 0 }}
//           transition={{ duration: 1, ease: "easeOut" }}
//           className="relative mb-8"
//         >
//           <motion.div
//             animate={{ rotate: 360 }}
//             transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
//             className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-3xl blur-lg opacity-50"
//           />
//           <div className="relative bg-slate-800/90 backdrop-blur-sm px-12 py-6 rounded-3xl border border-cyan-500/30">
//             <motion.h1
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.5 }}
//               className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
//             >
//               VARUNESH T
//             </motion.h1>
//           </div>
//         </motion.div>

//         {/* Loading Animation */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 1 }}
//           className="space-y-6"
//         >
//           {/* Geometric Loader */}
//           <div className="flex justify-center space-x-2">
//             {[0, 1, 2, 3, 4].map((index) => (
//               <motion.div
//                 key={index}
//                 animate={{
//                   scale: [1, 1.5, 1],
//                   opacity: [0.3, 1, 0.3],
//                 }}
//                 transition={{
//                   duration: 1.5,
//                   repeat: Number.POSITIVE_INFINITY,
//                   delay: index * 0.2,
//                 }}
//                 className="w-3 h-3 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full"
//               />
//             ))}
//           </div>

//           {/* Loading Text */}
//           <motion.p
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 1.5 }}
//             className="text-gray-300 text-lg"
//           >
//             Initializing Portfolio...
//           </motion.p>

//           {/* Progress Bar */}
//           <div className="w-64 h-1 bg-slate-700 rounded-full mx-auto overflow-hidden">
//             <motion.div
//               initial={{ width: 0 }}
//               animate={{ width: "100%" }}
//               transition={{ duration: 2.5, ease: "easeInOut" }}
//               className="h-full bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full"
//             />
//           </div>
//         </motion.div>
//       </div>
//     </motion.div>
//   )
// }














"use client"

import { motion } from "framer-motion"
import { useTheme } from "../contexts/ThemeContext"

export default function LoadingScreen() {
  const { theme, getThemeClasses } = useTheme()
  const themeClasses = getThemeClasses()

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={`fixed inset-0 ${
        theme === "light"
          ? "bg-gradient-to-br from-gray-50 via-blue-50 to-gray-100"
          : "bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"
      } flex items-center justify-center z-50`}
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.5, 1],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          className={`absolute top-1/4 left-1/4 w-96 h-96 ${
            theme === "light"
              ? "bg-gradient-to-r from-blue-500/20 to-purple-600/20"
              : "bg-gradient-to-r from-cyan-500/20 to-purple-600/20"
          } rounded-full blur-3xl`}
        />
        <motion.div
          animate={{
            scale: [1.5, 1, 1.5],
            rotate: [360, 180, 0],
          }}
          transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          className={`absolute bottom-1/4 right-1/4 w-96 h-96 ${
            theme === "light"
              ? "bg-gradient-to-r from-purple-500/20 to-pink-600/20"
              : "bg-gradient-to-r from-purple-500/20 to-pink-600/20"
          } rounded-full blur-3xl`}
        />
      </div>

      <div className="text-center relative z-10">
        {/* Logo Animation */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative mb-8"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            className={`absolute inset-0 ${
              theme === "light"
                ? "bg-gradient-to-r from-blue-400 to-purple-600"
                : "bg-gradient-to-r from-cyan-400 to-purple-600"
            } rounded-3xl blur-lg opacity-50`}
          />
          <div
            className={`relative ${themeClasses.cardBg} backdrop-blur-sm px-12 py-6 rounded-3xl border ${themeClasses.border}`}
          >
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className={`text-4xl md:text-6xl font-bold ${
                theme === "light"
                  ? "bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400"
                  : "bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400"
              } bg-clip-text text-transparent`}
            >
              VARUNESH T
            </motion.h1>
          </div>
        </motion.div>

        {/* Loading Animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="space-y-6"
        >
          {/* Geometric Loader */}
          <div className="flex justify-center space-x-2">
            {[0, 1, 2, 3, 4].map((index) => (
              <motion.div
                key={index}
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.3, 1, 0.3],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: index * 0.2,
                }}
                className={`w-3 h-3 ${
                  theme === "light"
                    ? "bg-gradient-to-r from-blue-400 to-purple-600"
                    : "bg-gradient-to-r from-cyan-400 to-purple-600"
                } rounded-full`}
              />
            ))}
          </div>

          {/* Loading Text */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className={`${themeClasses.textSecondary} text-lg`}
          >
            Initializing Portfolio...
          </motion.p>

          {/* Progress Bar */}
          <div
            className={`w-64 h-1 ${theme === "light" ? "bg-gray-300" : "bg-slate-700"} rounded-full mx-auto overflow-hidden`}
          >
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 2.5, ease: "easeInOut" }}
              className={`h-full ${
                theme === "light"
                  ? "bg-gradient-to-r from-blue-400 to-purple-600"
                  : "bg-gradient-to-r from-cyan-400 to-purple-600"
              } rounded-full`}
            />
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}
