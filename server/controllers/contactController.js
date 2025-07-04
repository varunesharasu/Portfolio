const Contact = require("../models/Contact")
const { sendNotificationEmail, sendAutoReply } = require("../services/emailService")
const { validationResult } = require("express-validator")

// Submit contact form
const submitContact = async (req, res) => {
  try {
    // Check for validation errors
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        error: "Validation failed",
        details: errors.array(),
      })
    }

    const { name, email, subject, message } = req.body

    // Create contact record
    const contactData = new Contact({
      name,
      email,
      subject: subject || "",
      message,
      ipAddress: req.ip || req.connection.remoteAddress,
      userAgent: req.get("User-Agent") || "Unknown",
    })

    // Save to database
    const savedContact = await contactData.save()
    console.log(`✅ Contact form data saved: ${savedContact._id}`)

    // Send emails asynchronously
    try {
      // Send notification email to you
      await sendNotificationEmail(savedContact)
      savedContact.emailSent = true
      savedContact.emailSentAt = new Date()

      // Send auto-reply to sender
      await sendAutoReply(savedContact)
      savedContact.autoReplySent = true
      savedContact.autoReplySentAt = new Date()

      // Update the record
      await savedContact.save()

      console.log(`✅ Emails sent successfully for contact: ${savedContact._id}`)
    } catch (emailError) {
      console.error("❌ Email sending failed:", emailError.message)
      // Don't fail the request if email fails
    }

    res.status(200).json({
      success: true,
      message: "Message sent successfully! Thank you for reaching out.",
      data: {
        id: savedContact._id,
        timestamp: savedContact.createdAt,
        status: savedContact.status,
      },
    })
  } catch (error) {
    console.error("❌ Error processing contact form:", error)

    // Handle specific MongoDB errors
    if (error.name === "ValidationError") {
      const validationErrors = Object.values(error.errors).map((err) => err.message)
      return res.status(400).json({
        success: false,
        error: "Validation failed",
        details: validationErrors,
      })
    }

    res.status(500).json({
      success: false,
      error: "Failed to send message. Please try again later.",
      details: process.env.NODE_ENV === "development" ? error.message : undefined,
    })
  }
}

// Get all contacts (admin endpoint)
const getAllContacts = async (req, res) => {
  try {
    const page = Number.parseInt(req.query.page) || 1
    const limit = Number.parseInt(req.query.limit) || 10
    const status = req.query.status
    const sortBy = req.query.sortBy || "createdAt"
    const sortOrder = req.query.sortOrder === "asc" ? 1 : -1

    // Build query
    const query = {}
    if (status) {
      query.status = status
    }

    // Execute query with pagination
    const contacts = await Contact.find(query)
      .select("-ipAddress -userAgent") // Hide sensitive data
      .sort({ [sortBy]: sortOrder })
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .lean()

    const total = await Contact.countDocuments(query)
    const stats = await Contact.getStats()

    res.json({
      success: true,
      data: contacts,
      pagination: {
        current: page,
        pages: Math.ceil(total / limit),
        total,
        limit,
      },
      stats,
    })
  } catch (error) {
    console.error("❌ Error fetching contacts:", error)
    res.status(500).json({
      success: false,
      error: "Failed to fetch contacts",
    })
  }
}

// Get single contact
const getContact = async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id).select("-ipAddress -userAgent")

    if (!contact) {
      return res.status(404).json({
        success: false,
        error: "Contact not found",
      })
    }

    res.json({
      success: true,
      data: contact,
    })
  } catch (error) {
    console.error("❌ Error fetching contact:", error)
    res.status(500).json({
      success: false,
      error: "Failed to fetch contact",
    })
  }
}

// Update contact status
const updateContactStatus = async (req, res) => {
  try {
    const { status } = req.body
    const validStatuses = ["new", "read", "replied", "archived"]

    if (!validStatuses.includes(status)) {
      return res.status(400).json({
        success: false,
        error: "Invalid status",
      })
    }

    const contact = await Contact.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true, runValidators: true },
    ).select("-ipAddress -userAgent")

    if (!contact) {
      return res.status(404).json({
        success: false,
        error: "Contact not found",
      })
    }

    res.json({
      success: true,
      message: "Contact status updated successfully",
      data: contact,
    })
  } catch (error) {
    console.error("❌ Error updating contact:", error)
    res.status(500).json({
      success: false,
      error: "Failed to update contact",
    })
  }
}

// Delete contact
const deleteContact = async (req, res) => {
  try {
    const contact = await Contact.findByIdAndDelete(req.params.id)

    if (!contact) {
      return res.status(404).json({
        success: false,
        error: "Contact not found",
      })
    }

    res.json({
      success: true,
      message: "Contact deleted successfully",
    })
  } catch (error) {
    console.error("❌ Error deleting contact:", error)
    res.status(500).json({
      success: false,
      error: "Failed to delete contact",
    })
  }
}

module.exports = {
  submitContact,
  getAllContacts,
  getContact,
  updateContactStatus,
  deleteContact,
}
