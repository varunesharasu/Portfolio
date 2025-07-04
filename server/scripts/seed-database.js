const mongoose = require("mongoose")
const Contact = require("../models/Contact")
require("dotenv").config()

const sampleContacts = [
  {
    name: "John Doe",
    email: "john.doe@example.com",
    subject: "Project Collaboration",
    message:
      "Hi Varunesh, I came across your portfolio and I'm impressed with your work. I have a project that might interest you. Would you be available for a discussion?",
    status: "new",
    priority: "medium",
    ipAddress: "192.168.1.1",
    userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
  },
  {
    name: "Sarah Johnson",
    email: "sarah.johnson@company.com",
    subject: "Job Opportunity",
    message:
      "Hello, we have an exciting full-stack developer position that matches your skills perfectly. Are you open to new opportunities?",
    status: "read",
    priority: "high",
    ipAddress: "10.0.0.1",
    userAgent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36",
  },
  {
    name: "Mike Chen",
    email: "mike.chen@startup.io",
    subject: "Technical Question",
    message:
      "I noticed you used React and Node.js in your projects. I have a technical question about implementing real-time features. Could you help?",
    status: "replied",
    priority: "low",
    ipAddress: "172.16.0.1",
    userAgent: "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36",
  },
]

const seedDatabase = async () => {
  try {
    console.log("🌱 Connecting to MongoDB...")
    await mongoose.connect(process.env.MONGODB_URI)
    console.log("✅ Connected to MongoDB")

    console.log("🗑️ Clearing existing contacts...")
    await Contact.deleteMany({})

    console.log("📝 Inserting sample contacts...")
    const contacts = await Contact.insertMany(sampleContacts)
    console.log(`✅ Inserted ${contacts.length} sample contacts`)

    console.log("📊 Database seeded successfully!")
    console.log("\nSample contacts:")
    contacts.forEach((contact, index) => {
      console.log(`${index + 1}. ${contact.name} (${contact.email}) - ${contact.status}`)
    })

    process.exit(0)
  } catch (error) {
    console.error("❌ Error seeding database:", error.message)
    process.exit(1)
  }
}

seedDatabase()
