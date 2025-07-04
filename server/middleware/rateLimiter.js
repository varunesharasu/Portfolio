const rateLimit = require("express-rate-limit")

// Rate limiter for contact form
const rateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // limit each IP to 5 requests per windowMs
  message: {
    success: false,
    error: "Too many contact form submissions from this IP address.",
    message: "Please try again after 15 minutes.",
    retryAfter: "15 minutes",
  },
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
  handler: (req, res) => {
    console.log(`⚠️ Rate limit exceeded for IP: ${req.ip}`)
    res.status(429).json({
      success: false,
      error: "Too many contact form submissions from this IP address.",
      message: "Please try again after 15 minutes.",
      retryAfter: "15 minutes",
    })
  },
})

// General API rate limiter
const generalRateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: {
    success: false,
    error: "Too many requests from this IP address.",
    message: "Please try again later.",
  },
})

module.exports = {
  rateLimiter,
  generalRateLimiter,
}
