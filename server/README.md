# Portfolio Backend Server

A robust Node.js/Express backend API for handling contact form submissions with email notifications and MongoDB storage.

## 🚀 Features

- **Contact Form API** - Handle form submissions with validation
- **Email Notifications** - Send emails to you and auto-replies to users
- **MongoDB Storage** - Store all contact messages with metadata
- **Rate Limiting** - Prevent spam with configurable limits
- **Input Validation** - Comprehensive form validation
- **Error Handling** - Robust error handling and logging
- **Admin Endpoints** - Manage contacts with CRUD operations
- **Health Checks** - Monitor system status
- **Security** - CORS, Helmet, and other security measures

## 📁 Project Structure

\`\`\`
portfolio-backend/
├── config/
│   ├── database.js          # MongoDB connection
│   └── email.js             # Email configuration & templates
├── controllers/
│   └── contactController.js # Contact form logic
├── middleware/
│   ├── errorHandler.js      # Global error handling
│   ├── rateLimiter.js       # Rate limiting configuration
│   └── validation.js        # Input validation rules
├── models/
│   └── Contact.js           # MongoDB contact schema
├── routes/
│   ├── contactRoutes.js     # Contact API routes
│   └── healthRoutes.js      # Health check routes
├── scripts/
│   ├── test-email.js        # Email configuration test
│   └── seed-database.js     # Database seeding script
├── services/
│   └── emailService.js      # Email sending service
├── .env.example             # Environment variables template
├── package.json             # Dependencies and scripts
├── server.js                # Main server file
└── README.md                # This file
\`\`\`

## 🛠️ Setup Instructions

### 1. Clone and Install

\`\`\`bash
git clone <your-repo-url>
cd portfolio-backend
npm install
\`\`\`

### 2. Environment Configuration

Copy `.env.example` to `.env` and fill in your values:

\`\`\`bash
cp .env.example .env
\`\`\`

Required environment variables:
- `MONGODB_URI` - MongoDB Atlas connection string
- `EMAIL_USER` - Your Gmail address
- `EMAIL_PASS` - Gmail App Password (16 characters)
- `FRONTEND_URL` - Your frontend URL for CORS

### 3. MongoDB Atlas Setup

1. Create account at [MongoDB Atlas](https://www.mongodb.com/atlas)
2. Create a new cluster
3. Create database user with read/write permissions
4. Get connection string and add to `MONGODB_URI`
5. Whitelist your IP address

### 4. Gmail App Password Setup

1. Enable 2-Factor Authentication on Gmail
2. Go to [Google Account Settings](https://myaccount.google.com)
3. Navigate to Security → 2-Step Verification → App passwords
4. Generate app password for "Mail"
5. Use the 16-character password in `EMAIL_PASS`

### 5. Test Configuration

\`\`\`bash
# Test email configuration
npm test

# Seed database with sample data (optional)
npm run seed
\`\`\`

### 6. Start Server

\`\`\`bash
# Development mode with auto-restart
npm run dev

# Production mode
npm start
\`\`\`

Server will start on `http://localhost:5000`

## 📡 API Endpoints

### Contact Form
- `POST /api/contact` - Submit contact form
- `GET /api/contacts` - Get all contacts (admin)
- `GET /api/contacts/:id` - Get single contact
- `PUT /api/contacts/:id/status` - Update contact status
- `DELETE /api/contacts/:id` - Delete contact

### System
- `GET /` - API information
- `GET /api/health` - Health check

## 📧 Email Features

### Notification Email (to you)
- Beautiful HTML template
- Contact details and message
- Direct reply button
- Timestamp and metadata

### Auto-Reply Email (to sender)
- Professional thank you message
- Response time expectations
- Your contact information
- Social media links

## 🔒 Security Features

- **Rate Limiting**: 5 requests per 15 minutes per IP
- **Input Validation**: Comprehensive form validation
- **CORS Protection**: Configurable origin whitelist
- **Helmet Security**: Security headers
- **Error Handling**: No sensitive data exposure
- **IP Logging**: Track submission sources

## 🚀 Deployment

### Vercel (Recommended)

\`\`\`bash
npm i -g vercel
vercel
\`\`\`

Add environment variables in Vercel dashboard.

### Railway

1. Connect GitHub repository
2. Add environment variables
3. Deploy automatically

### Heroku

\`\`\`bash
heroku create your-app-name
heroku config:set MONGODB_URI=your-uri
heroku config:set EMAIL_USER=your-email
heroku config:set EMAIL_PASS=your-password
heroku config:set FRONTEND_URL=your-frontend-url
git push heroku main
\`\`\`

## 📊 Database Schema

\`\`\`javascript
{
  name: String,           // Contact name
  email: String,          // Contact email
  subject: String,        // Message subject
  message: String,        // Message content
  status: String,         // new, read, replied, archived
  priority: String,       // low, medium, high (auto-detected)
  ipAddress: String,      // Sender IP
  userAgent: String,      // Browser info
  emailSent: Boolean,     // Notification sent
  autoReplySent: Boolean, // Auto-reply sent
  createdAt: Date,        // Submission time
  updatedAt: Date         // Last modified
}
\`\`\`

## 🔧 Configuration

### Rate Limiting
Modify `middleware/rateLimiter.js`:
\`\`\`javascript
windowMs: 15 * 60 * 1000, // 15 minutes
max: 5, // requests per window
\`\`\`

### Email Templates
Customize templates in `config/email.js`

### Validation Rules
Modify rules in `middleware/validation.js`

## 📝 Scripts

- `npm start` - Start production server
- `npm run dev` - Start development server with nodemon
- `npm test` - Test email configuration
- `npm run seed` - Seed database with sample data

## 🐛 Troubleshooting

### Email Issues
- Verify Gmail App Password is 16 characters
- Check 2FA is enabled on Gmail
- Run `npm test` to verify configuration

### Database Issues
- Check MongoDB Atlas IP whitelist
- Verify connection string format
- Check database user permissions

### CORS Issues
- Verify `FRONTEND_URL` matches your frontend domain
- Check protocol (http/https) matches

## 📞 Support

For issues or questions:
- Email: tvarunesharasu@gmail.com
- GitHub: [@varunesharasu](https://github.com/varunesharasu)

## 📄 License

MIT License - see LICENSE file for details.
