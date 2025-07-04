const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const nodemailer = require("nodemailer")
const rateLimit = require("express-rate-limit")
const helmet = require("helmet")
const morgan = require("morgan")
require("dotenv").config()

// Import configurations and middleware
const connectDB = require("./config/database")
const { rateLimiter } = require("./middleware/rateLimiter")
const errorHandler = require("./middleware/errorHandler")

// Import routes
const contactRoutes = require("./routes/contactRoutes")
const healthRoutes = require("./routes/healthRoutes")

const app = express()

// Connect to MongoDB
connectDB()

// Security middleware
app.use(helmet())

// Logging middleware
app.use(morgan("combined"))

// CORS configuration
app.use(
  cors({
    origin: process.env.FRONTEND_URL || "http://localhost:3000",
    credentials: true,
  }),
)

// Body parsing middleware
app.use(express.json({ limit: "10mb" }))
app.use(express.urlencoded({ extended: true }))

// Rate limiting
app.use("/api/contact", rateLimiter)

// Contact Schema
const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    maxlength: 100,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, "Please enter a valid email"],
  },
  subject: {
    type: String,
    trim: true,
    maxlength: 200,
  },
  message: {
    type: String,
    required: true,
    trim: true,
    maxlength: 1000,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  ipAddress: String,
  userAgent: String,
  status: {
    type: String,
    enum: ["new", "read", "replied"],
    default: "new",
  },
})

const Contact = mongoose.model("Contact", contactSchema)

// Email transporter setup
const createTransporter = () => {
  return nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS, // Use App Password for Gmail
    },
  })
}

// Email templates
const createEmailTemplate = (contactData) => {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; border-radius: 10px 10px 0 0; }
        .content { background: #f9f9f9; padding: 20px; border-radius: 0 0 10px 10px; }
        .field { margin-bottom: 15px; }
        .label { font-weight: bold; color: #555; }
        .value { background: white; padding: 10px; border-radius: 5px; margin-top: 5px; }
        .footer { text-align: center; margin-top: 20px; color: #666; font-size: 12px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h2>🚀 New Contact Form Submission</h2>
          <p>You have received a new message from your portfolio website!</p>
        </div>
        <div class="content">
          <div class="field">
            <div class="label">👤 Name:</div>
            <div class="value">${contactData.name}</div>
          </div>
          <div class="field">
            <div class="label">📧 Email:</div>
            <div class="value">${contactData.email}</div>
          </div>
          ${
            contactData.subject
              ? `
          <div class="field">
            <div class="label">📝 Subject:</div>
            <div class="value">${contactData.subject}</div>
          </div>
          `
              : ""
          }
          <div class="field">
            <div class="label">💬 Message:</div>
            <div class="value">${contactData.message}</div>
          </div>
          <div class="field">
            <div class="label">🕒 Received:</div>
            <div class="value">${new Date().toLocaleString()}</div>
          </div>
        </div>
        <div class="footer">
          <p>This message was sent from your portfolio contact form.</p>
        </div>
      </div>
    </body>
    </html>
  `
}

const createAutoReplyTemplate = (name) => {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; border-radius: 10px 10px 0 0; }
        .content { background: #f9f9f9; padding: 20px; border-radius: 0 0 10px 10px; }
        .footer { text-align: center; margin-top: 20px; color: #666; font-size: 12px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h2>✨ Thank you for reaching out!</h2>
        </div>
        <div class="content">
          <p>Hi ${name},</p>
          <p>Thank you for contacting me through my portfolio website! I've received your message and will get back to you as soon as possible.</p>
          <p>I typically respond within 24-48 hours. If your inquiry is urgent, feel free to reach out to me directly at <a href="mailto:tvarunesharasu@gmail.com">tvarunesharasu@gmail.com</a>.</p>
          <p>Best regards,<br><strong>Varunesh T</strong><br>Full Stack Developer</p>
        </div>
        <div class="footer">
          <p>This is an automated response from Varunesh T's portfolio.</p>
        </div>
      </div>
    </body>
    </html>
  `
}

// Validation middleware
const validateContactForm = (req, res, next) => {
  const { name, email, message } = req.body

  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      error: "Name, email, and message are required fields.",
    })
  }

  if (name.length > 100) {
    return res.status(400).json({
      success: false,
      error: "Name must be less than 100 characters.",
    })
  }

  if (message.length > 1000) {
    return res.status(400).json({
      success: false,
      error: "Message must be less than 1000 characters.",
    })
  }

  const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
  if (!emailRegex.test(email)) {
    return res.status(400).json({
      success: false,
      error: "Please enter a valid email address.",
    })
  }

  next()
}

// Routes
app.get("/", (req, res) => {
  res.json({
    message: "🚀 Portfolio Backend API is running!",
    version: "1.0.0",
    author: "Varunesh T",
    endpoints: {
      contact: "POST /api/contact",
      health: "GET /api/health",
      contacts: "GET /api/contacts",
    },
    documentation: "https://github.com/varunesharasu/portfolio-backend",
  })
})

app.use("/api/health", healthRoutes)
app.use("/api", contactRoutes)

// 404 handler
app.use("*", (req, res) => {
  res.status(404).json({
    success: false,
    error: "Route not found",
    message: `Cannot ${req.method} ${req.originalUrl}`,
  })
})

// Error handling middleware (must be last)
app.use(errorHandler)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`)
  console.log(`📧 Email configured for: ${process.env.EMAIL_USER}`)
  console.log(`🌐 CORS enabled for: ${process.env.FRONTEND_URL || "http://localhost:3000"}`)
  console.log(`🔗 API Documentation: http://localhost:${PORT}`)
})

module.exports = app
