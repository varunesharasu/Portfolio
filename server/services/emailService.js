const { createTransporter, createNotificationEmailTemplate, createAutoReplyTemplate } = require("../config/email")

// Send notification email to you
const sendNotificationEmail = async (contactData) => {
  try {
    const transporter = createTransporter()

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "tvarunesharasu@gmail.com",
      subject: `🚀 New Portfolio Contact: ${contactData.subject || "No Subject"} - ${contactData.name}`,
      html: createNotificationEmailTemplate(contactData),
      replyTo: contactData.email,
      priority: contactData.priority === "high" ? "high" : "normal",
    }

    const info = await transporter.sendMail(mailOptions)
    console.log(`✅ Notification email sent: ${info.messageId}`)
    return info
  } catch (error) {
    console.error("❌ Failed to send notification email:", error.message)
    throw error
  }
}

// Send auto-reply to form submitter
const sendAutoReply = async (contactData) => {
  try {
    const transporter = createTransporter()

    const autoReplyOptions = {
      from: process.env.EMAIL_USER,
      to: contactData.email,
      subject: "✨ Thank you for contacting Varunesh T - I'll be in touch soon!",
      html: createAutoReplyTemplate(contactData.name),
      replyTo: process.env.EMAIL_USER,
    }

    const info = await transporter.sendMail(autoReplyOptions)
    console.log(`✅ Auto-reply email sent: ${info.messageId}`)
    return info
  } catch (error) {
    console.error("❌ Failed to send auto-reply email:", error.message)
    throw error
  }
}

// Test email configuration
const testEmailConfiguration = async () => {
  try {
    const transporter = createTransporter()
    await transporter.verify()
    console.log("✅ Email configuration is valid")
    return true
  } catch (error) {
    console.error("❌ Email configuration error:", error.message)
    return false
  }
}

module.exports = {
  sendNotificationEmail,
  sendAutoReply,
  testEmailConfiguration,
}
