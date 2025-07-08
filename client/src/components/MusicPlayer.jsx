"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useRef, useEffect } from "react"
import { useTheme } from "../contexts/ThemeContext"

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [volume, setVolume] = useState(0.5)
  const audioRef = useRef(null)
  const { theme, getThemeClasses } = useTheme()
  const themeClasses = getThemeClasses()

  // Note: You'll need to add the actual audio file to your public folder
  const audioSrc = "/portfolio-song-lesfm.mp3" // Add your audio file here

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const updateTime = () => setCurrentTime(audio.currentTime)
    const updateDuration = () => setDuration(audio.duration)

    audio.addEventListener("timeupdate", updateTime)
    audio.addEventListener("loadedmetadata", updateDuration)
    audio.addEventListener("ended", () => setIsPlaying(false))

    return () => {
      audio.removeEventListener("timeupdate", updateTime)
      audio.removeEventListener("loadedmetadata", updateDuration)
      audio.removeEventListener("ended", () => setIsPlaying(false))
    }
  }, [])

  const togglePlay = () => {
    const audio = audioRef.current
    if (!audio) return

    if (isPlaying) {
      audio.pause()
    } else {
      audio.play()
    }
    setIsPlaying(!isPlaying)
  }

  const handleSeek = (e) => {
    const audio = audioRef.current
    if (!audio) return

    const rect = e.currentTarget.getBoundingClientRect()
    const percent = (e.clientX - rect.left) / rect.width
    audio.currentTime = percent * duration
  }

  const handleVolumeChange = (e) => {
    const newVolume = Number.parseFloat(e.target.value)
    setVolume(newVolume)
    if (audioRef.current) {
      audioRef.current.volume = newVolume
    }
  }

  const formatTime = (time) => {
    if (isNaN(time)) return "0:00"
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds.toString().padStart(2, "0")}`
  }

  return (
    <>
      <audio ref={audioRef} src={audioSrc} loop />

      {/* Music Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className={`fixed bottom-6 left-6 z-50 w-16 h-16 rounded-full ${themeClasses.buttonPrimary} text-white shadow-2xl flex items-center justify-center text-2xl`}
      >
        <motion.span
          animate={{ rotate: isPlaying ? 360 : 0 }}
          transition={{ duration: 2, repeat: isPlaying ? Number.POSITIVE_INFINITY : 0, ease: "linear" }}
        >
          🎵
        </motion.span>
      </motion.button>

      {/* Music Player */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: -100, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -100, scale: 0.8 }}
            className={`fixed bottom-24 left-6 z-40 w-80 ${themeClasses.cardBg} backdrop-blur-xl rounded-3xl ${themeClasses.border} ${themeClasses.shadow} overflow-hidden`}
          >
            {/* Header */}
            <div className="p-6 text-center">
              <motion.div
                animate={{
                  rotate: isPlaying ? 360 : 0,
                  scale: isPlaying ? [1, 1.1, 1] : 1,
                }}
                transition={{
                  rotate: { duration: 3, repeat: isPlaying ? Number.POSITIVE_INFINITY : 0, ease: "linear" },
                  scale: { duration: 2, repeat: isPlaying ? Number.POSITIVE_INFINITY : 0 },
                }}
                className="w-20 h-20 mx-auto mb-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-3xl"
              >
                🎧
              </motion.div>
              <h3 className={`font-bold ${themeClasses.text} mb-1`}>Portfolio Song</h3>
              <p className={`text-sm ${themeClasses.textMuted}`}>by LESFM</p>
            </div>

            {/* Progress Bar */}
            <div className="px-6 mb-4">
              <div
                className={`w-full h-2 ${theme === "dark" ? "bg-slate-700" : "bg-gray-200"} rounded-full cursor-pointer overflow-hidden`}
                onClick={handleSeek}
              >
                <motion.div
                  className="h-full bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full"
                  style={{ width: `${duration ? (currentTime / duration) * 100 : 0}%` }}
                  animate={{ opacity: isPlaying ? [0.7, 1, 0.7] : 1 }}
                  transition={{ duration: 1, repeat: isPlaying ? Number.POSITIVE_INFINITY : 0 }}
                />
              </div>
              <div className={`flex justify-between text-xs ${themeClasses.textMuted} mt-2`}>
                <span>{formatTime(currentTime)}</span>
                <span>{formatTime(duration)}</span>
              </div>
            </div>

            {/* Controls */}
            <div className="px-6 pb-6">
              <div className="flex items-center justify-center space-x-6 mb-4">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => {
                    if (audioRef.current) {
                      audioRef.current.currentTime = Math.max(0, audioRef.current.currentTime - 10)
                    }
                  }}
                  className={`w-12 h-12 rounded-full ${themeClasses.buttonSecondary} flex items-center justify-center text-xl`}
                >
                  ⏪
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={togglePlay}
                  className="w-16 h-16 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white flex items-center justify-center text-2xl shadow-lg"
                >
                  {isPlaying ? "⏸️" : "▶️"}
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => {
                    if (audioRef.current) {
                      audioRef.current.currentTime = Math.min(duration, audioRef.current.currentTime + 10)
                    }
                  }}
                  className={`w-12 h-12 rounded-full ${themeClasses.buttonSecondary} flex items-center justify-center text-xl`}
                >
                  ⏩
                </motion.button>
              </div>

              {/* Volume Control */}
              <div className="flex items-center space-x-3">
                <span className={`text-lg ${themeClasses.textMuted}`}>🔊</span>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.1"
                  value={volume}
                  onChange={handleVolumeChange}
                  className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                />
                <span className={`text-sm ${themeClasses.textMuted} w-8`}>{Math.round(volume * 100)}</span>
              </div>
            </div>

            {/* Visualizer Effect */}
            <div className="px-6 pb-4">
              <div className="flex items-end justify-center space-x-1 h-8">
                {Array.from({ length: 20 }).map((_, i) => (
                  <motion.div
                    key={i}
                    animate={
                      isPlaying
                        ? {
                            height: [4, Math.random() * 24 + 4, 4],
                            opacity: [0.3, 1, 0.3],
                          }
                        : { height: 4, opacity: 0.3 }
                    }
                    transition={{
                      duration: 0.5 + Math.random() * 0.5,
                      repeat: isPlaying ? Number.POSITIVE_INFINITY : 0,
                      ease: "easeInOut",
                    }}
                    className="w-1 bg-gradient-to-t from-cyan-400 to-purple-500 rounded-full"
                  />
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Custom Slider Styles */}
      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: linear-gradient(45deg, #06b6d4, #8b5cf6);
          cursor: pointer;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
        }
        
        .slider::-moz-range-thumb {
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: linear-gradient(45deg, #06b6d4, #8b5cf6);
          cursor: pointer;
          border: none;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
        }
      `}</style>
    </>
  )
}
