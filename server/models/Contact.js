const mongoose = require("mongoose")

const contactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
      maxlength: [100, "Name cannot exceed 100 characters"],
      minlength: [2, "Name must be at least 2 characters"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      trim: true,
      lowercase: true,
      match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, "Please enter a valid email address"],
    },
    subject: {
      type: String,
      trim: true,
      maxlength: [200, "Subject cannot exceed 200 characters"],
      default: "",
    },
    message: {
      type: String,
      required: [true, "Message is required"],
      trim: true,
      maxlength: [1000, "Message cannot exceed 1000 characters"],
      minlength: [10, "Message must be at least 10 characters"],
    },
    status: {
      type: String,
      enum: ["new", "read", "replied", "archived"],
      default: "new",
    },
    priority: {
      type: String,
      enum: ["low", "medium", "high"],
      default: "medium",
    },
    ipAddress: {
      type: String,
      required: true,
    },
    userAgent: {
      type: String,
      required: true,
    },
    source: {
      type: String,
      default: "portfolio-website",
    },
    emailSent: {
      type: Boolean,
      default: false,
    },
    emailSentAt: {
      type: Date,
    },
    autoReplySent: {
      type: Boolean,
      default: false,
    },
    autoReplySentAt: {
      type: Date,
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  },
)

// Indexes for better query performance
contactSchema.index({ email: 1 })
contactSchema.index({ createdAt: -1 })
contactSchema.index({ status: 1 })

// Virtual for formatted date
contactSchema.virtual("formattedDate").get(function () {
  return this.createdAt.toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
    dateStyle: "medium",
    timeStyle: "short",
  })
})

// Pre-save middleware
contactSchema.pre("save", function (next) {
  // Set priority based on keywords in message
  const urgentKeywords = ["urgent", "asap", "immediately", "emergency"]
  const highPriorityKeywords = ["project", "job", "opportunity", "collaboration"]

  const messageText = this.message.toLowerCase()

  if (urgentKeywords.some((keyword) => messageText.includes(keyword))) {
    this.priority = "high"
  } else if (highPriorityKeywords.some((keyword) => messageText.includes(keyword))) {
    this.priority = "medium"
  } else {
    this.priority = "low"
  }

  next()
})

// Static methods
contactSchema.statics.getStats = async function () {
  const stats = await this.aggregate([
    {
      $group: {
        _id: "$status",
        count: { $sum: 1 },
      },
    },
  ])

  const totalContacts = await this.countDocuments()
  const todayContacts = await this.countDocuments({
    createdAt: {
      $gte: new Date(new Date().setHours(0, 0, 0, 0)),
    },
  })

  return {
    total: totalContacts,
    today: todayContacts,
    byStatus: stats,
  }
}

module.exports = mongoose.model("Contact", contactSchema)
