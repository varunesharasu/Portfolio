const { body } = require("express-validator")

// Contact form validation rules
const validateContactForm = [
  body("name")
    .trim()
    .isLength({ min: 2, max: 100 })
    .withMessage("Name must be between 2 and 100 characters")
    .matches(/^[a-zA-Z\s.'-]+$/)
    .withMessage("Name can only contain letters, spaces, dots, apostrophes, and hyphens"),

  body("email")
    .trim()
    .isEmail()
    .withMessage("Please provide a valid email address")
    .normalizeEmail()
    .isLength({ max: 254 })
    .withMessage("Email address is too long"),

  body("subject").optional().trim().isLength({ max: 200 }).withMessage("Subject cannot exceed 200 characters"),

  body("message")
    .trim()
    .isLength({ min: 10, max: 1000 })
    .withMessage("Message must be between 10 and 1000 characters")
    .matches(/^[\s\S]*\S[\s\S]*$/)
    .withMessage("Message cannot be empty or contain only whitespace"),
]

module.exports = {
  validateContactForm,
}
