const express = require("express")
const mongoose = require("mongoose")
const { testEmailConfiguration } = require("../services/emailService")

const router = express.Router()

// @route   GET /api/health
// @desc    Health check endpoint
// @access  Public
router.get("/", async (req, res) => {
  try {
    const dbStatus = mongoose.connection.readyState === 1 ? "connected" : "disconnected"
    const emailStatus = await testEmailConfiguration()

    const healthCheck = {
      status: "healthy",
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
      database: {
        status: dbStatus,
        name: mongoose.connection.name,
      },
      email: {
        configured: emailStatus,
        service: "Gmail",
      },
      environment: process.env.NODE_ENV || "development",
      version: "1.0.0",
    }

    res.json(healthCheck)
  } catch (error) {
    res.status(503).json({
      status: "unhealthy",
      timestamp: new Date().toISOString(),
      error: error.message,
    })
  }
})

module.exports = router
