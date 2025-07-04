const nodemailer = require("nodemailer")

// Create email transporter
const createTransporter = () => {
  return nodemailer.createTransporter({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  })
}

// Email templates
const createNotificationEmailTemplate = (contactData) => {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>New Contact Form Submission</title>
      <style>
        body { 
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; 
          line-height: 1.6; 
          color: #333; 
          margin: 0; 
          padding: 0; 
          background-color: #f4f4f4; 
        }
        .container { 
          max-width: 600px; 
          margin: 20px auto; 
          background: white; 
          border-radius: 15px; 
          overflow: hidden; 
          box-shadow: 0 10px 30px rgba(0,0,0,0.1); 
        }
        .header { 
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); 
          color: white; 
          padding: 30px 20px; 
          text-align: center; 
        }
        .header h1 { margin: 0; font-size: 24px; }
        .header p { margin: 10px 0 0 0; opacity: 0.9; }
        .content { padding: 30px 20px; }
        .field { 
          margin-bottom: 20px; 
          border-bottom: 1px solid #eee; 
          padding-bottom: 15px; 
        }
        .field:last-child { border-bottom: none; margin-bottom: 0; }
        .label { 
          font-weight: 600; 
          color: #555; 
          font-size: 14px; 
          text-transform: uppercase; 
          letter-spacing: 0.5px; 
          margin-bottom: 8px; 
        }
        .value { 
          background: #f8f9fa; 
          padding: 15px; 
          border-radius: 8px; 
          border-left: 4px solid #667eea; 
          font-size: 16px; 
        }
        .message-value { 
          white-space: pre-wrap; 
          line-height: 1.6; 
        }
        .footer { 
          background: #f8f9fa; 
          padding: 20px; 
          text-align: center; 
          color: #666; 
          font-size: 14px; 
          border-top: 1px solid #eee; 
        }
        .reply-button {
          display: inline-block;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 12px 24px;
          text-decoration: none;
          border-radius: 25px;
          margin: 20px 0;
          font-weight: 600;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>🚀 New Contact Form Submission</h1>
          <p>You have received a new message from your portfolio website!</p>
        </div>
        <div class="content">
          <div class="field">
            <div class="label">👤 Name</div>
            <div class="value">${contactData.name}</div>
          </div>
          <div class="field">
            <div class="label">📧 Email</div>
            <div class="value">${contactData.email}</div>
          </div>
          ${
            contactData.subject
              ? `
          <div class="field">
            <div class="label">📝 Subject</div>
            <div class="value">${contactData.subject}</div>
          </div>
          `
              : ""
          }
          <div class="field">
            <div class="label">💬 Message</div>
            <div class="value message-value">${contactData.message}</div>
          </div>
          <div class="field">
            <div class="label">🕒 Received</div>
            <div class="value">${new Date(contactData.createdAt).toLocaleString("en-IN", {
              timeZone: "Asia/Kolkata",
              dateStyle: "full",
              timeStyle: "short",
            })}</div>
          </div>
          
          <div style="text-align: center;">
            <a href="mailto:${contactData.email}?subject=Re: ${
              contactData.subject || "Your message"
            }" class="reply-button">
              📧 Reply to ${contactData.name}
            </a>
          </div>
        </div>
        <div class="footer">
          <p>This message was sent from your portfolio contact form.</p>
          <p><strong>Portfolio:</strong> https://varunesh-portfolio.vercel.app</p>
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
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Thank you for contacting Varunesh T</title>
      <style>
        body { 
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; 
          line-height: 1.6; 
          color: #333; 
          margin: 0; 
          padding: 0; 
          background-color: #f4f4f4; 
        }
        .container { 
          max-width: 600px; 
          margin: 20px auto; 
          background: white; 
          border-radius: 15px; 
          overflow: hidden; 
          box-shadow: 0 10px 30px rgba(0,0,0,0.1); 
        }
        .header { 
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); 
          color: white; 
          padding: 30px 20px; 
          text-align: center; 
        }
        .header h1 { margin: 0; font-size: 24px; }
        .content { padding: 30px 20px; line-height: 1.8; }
        .content p { margin-bottom: 20px; }
        .highlight { 
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); 
          color: white; 
          padding: 20px; 
          border-radius: 10px; 
          margin: 20px 0; 
          text-align: center; 
        }
        .footer { 
          background: #f8f9fa; 
          padding: 20px; 
          text-align: center; 
          color: #666; 
          font-size: 14px; 
          border-top: 1px solid #eee; 
        }
        .social-links { margin: 20px 0; }
        .social-links a { 
          display: inline-block; 
          margin: 0 10px; 
          color: #667eea; 
          text-decoration: none; 
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>✨ Thank you for reaching out!</h1>
        </div>
        <div class="content">
          <p>Hi <strong>${name}</strong>,</p>
          
          <p>Thank you for contacting me through my portfolio website! I've received your message and truly appreciate you taking the time to reach out.</p>
          
          <div class="highlight">
            <p><strong>⏰ Response Time:</strong> I typically respond within 24-48 hours</p>
          </div>
          
          <p>In the meantime, feel free to:</p>
          <ul>
            <li>🔗 Connect with me on <a href="https://linkedin.com/in/varunesht/">LinkedIn</a></li>
            <li>📚 Check out my projects on <a href="https://github.com/varunesharasu">GitHub</a></li>
            <li>🌐 Explore my <a href="https://varunesh-portfolio.vercel.app">portfolio</a></li>
          </ul>
          
          <p>If your inquiry is urgent, you can reach me directly at:</p>
          <p>📧 <a href="mailto:tvarunesharasu@gmail.com">tvarunesharasu@gmail.com</a><br>
          📱 <a href="tel:+919360793223">+91 93607 93223</a></p>
          
          <p>Looking forward to connecting with you!</p>
          
          <p>Best regards,<br>
          <strong>Varunesh T</strong><br>
          <em>Full Stack Developer</em></p>
        </div>
        <div class="footer">
          <p>This is an automated response from Varunesh T's portfolio.</p>
          <div class="social-links">
            <a href="https://linkedin.com/in/varunesht/">LinkedIn</a> |
            <a href="https://github.com/varunesharasu">GitHub</a> |
            <a href="mailto:tvarunesharasu@gmail.com">Email</a>
          </div>
        </div>
      </div>
    </body>
    </html>
  `
}

module.exports = {
  createTransporter,
  createNotificationEmailTemplate,
  createAutoReplyTemplate,
}
