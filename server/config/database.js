const mongoose = require("mongoose")

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })

    console.log(`✅ MongoDB Connected: ${conn.connection.host}`)
    console.log(`📊 Database: ${conn.connection.name}`)
  } catch (error) {
    console.error("❌ MongoDB connection error:", error.message)
    process.exit(1)
  }
}

// Handle connection events
mongoose.connection.on("disconnected", () => {
  console.log("⚠️ MongoDB disconnected")
})

mongoose.connection.on("reconnected", () => {
  console.log("✅ MongoDB reconnected")
})

// Graceful shutdown
process.on("SIGINT", async () => {
  await mongoose.connection.close()
  console.log("🔒 MongoDB connection closed through app termination")
  process.exit(0)
})

module.exports = connectDB
