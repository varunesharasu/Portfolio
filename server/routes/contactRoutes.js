const express = require("express")
const {
  submitContact,
  getAllContacts,
  getContact,
  updateContactStatus,
  deleteContact,
} = require("../controllers/contactController")
const { validateContactForm } = require("../middleware/validation")

const router = express.Router()

// @route   POST /api/contact
// @desc    Submit contact form
// @access  Public
router.post("/contact", validateContactForm, submitContact)

// @route   GET /api/contacts
// @desc    Get all contacts (admin)
// @access  Public (should be protected in production)
router.get("/contacts", getAllContacts)

// @route   GET /api/contacts/:id
// @desc    Get single contact
// @access  Public (should be protected in production)
router.get("/contacts/:id", getContact)

// @route   PUT /api/contacts/:id/status
// @desc    Update contact status
// @access  Public (should be protected in production)
router.put("/contacts/:id/status", updateContactStatus)

// @route   DELETE /api/contacts/:id
// @desc    Delete contact
// @access  Public (should be protected in production)
router.delete("/contacts/:id", deleteContact)

module.exports = router
