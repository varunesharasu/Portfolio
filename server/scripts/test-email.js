const nodemailer = require("nodemailer")
require("dotenv").config()

const testEmailConfiguration = async () => {
  try {
    console.log("🧪 Testing email configuration...")
    console.log(`📧 Email User: ${process.env.EMAIL_USER}`)
    console.log(`🔑 Email Pass: ${process.env.EMAIL_PASS ? "✅ Set" : "❌ Not set"}`)

    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      throw new Error("EMAIL_USER and EMAIL_PASS environment variables are required")
    }

    const transporter = nodemailer.createTransporter({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    // Verify connection
    console.log("🔍 Verifying SMTP connection...")
    await transporter.verify()
    console.log("✅ SMTP connection verified successfully!")

    // Send test email
    console.log("📤 Sending test email...")
    const testMailOptions = {
      from: process.env.EMAIL_USER,
      to: "tvarunesharasu@gmail.com",
      subject: "🧪 Portfolio Backend - Email Test Successful",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; text-align: center;">
            <h1>✅ Email Configuration Test Successful!</h1>
          </div>
          <div style="padding: 20px; background: #f9f9f9;">
            <p>Congratulations! Your portfolio backend email system is working correctly.</p>
            <ul>
              <li><strong>Timestamp:</strong> ${new Date().toLocaleString()}</li>
              <li><strong>From:</strong> ${process.env.EMAIL_USER}</li>
              <li><strong>Service:</strong> Gmail SMTP</li>
              <li><strong>Status:</strong> ✅ All systems operational</li>
            </ul>
            <p>Your contact form is now ready to receive and forward messages!</p>
          </div>
        </div>
      `,
    }

    const info = await transporter.sendMail(testMailOptions)
    console.log("✅ Test email sent successfully!")
    console.log(`📧 Message ID: ${info.messageId}`)
    console.log("🎉 Email configuration is working perfectly!")

    return true
  } catch (error) {
    console.error("❌ Email test failed:", error.message)

    if (error.code === "EAUTH") {
      console.log("\n💡 Authentication failed. Please check:")
      console.log("   ✓ EMAIL_USER is your Gmail address")
      console.log("   ✓ EMAIL_PASS is a 16-character App Password (not your regular password)")
      console.log("   ✓ 2-Factor Authentication is enabled on your Gmail account")
      console.log("   ✓ App Password was generated from Google Account settings")
      console.log("\n🔗 Generate App Password: https://myaccount.google.com/apppasswords")
    }

    return false
  }
}

// Run the test
testEmailConfiguration()
