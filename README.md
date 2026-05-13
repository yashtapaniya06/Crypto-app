# 🪙 Crypto App - Full Stack Cryptocurrency Tracker

<div align="center">

[![React](https://img.shields.io/badge/React-19.2.6-61dafb?style=flat&logo=react)](https://react.dev/)
[![Node.js](https://img.shields.io/badge/Node.js-Express-339933?style=flat&logo=node.js)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-9.6.2-13aa52?style=flat&logo=mongodb)](https://www.mongodb.com/)
[![License](https://img.shields.io/badge/License-ISC-blue?style=flat)](LICENSE)

A modern, full-stack cryptocurrency tracking application built with **React**, **Express**, and **MongoDB**. Track crypto prices, search coins, filter by rank, and analyze market data in real-time.

[View Demo](https://github.com/yashtapaniya06/Crypto-app) • [Report Bug](https://github.com/yashtapaniya06/Crypto-app/issues) • [Request Feature](https://github.com/yashtapaniya06/Crypto-app/issues)

</div>

---

## ✨ Features

### 🎨 Frontend Features
- 🔍 **Real-time Search** - Search cryptocurrencies by name, symbol, rank, or price
- 🎯 **Smart Filtering** - Filter coins by market rank categories
- 📊 **Advanced Sorting** - Sort by price, market cap, 24h change, and more
- 📄 **Pagination** - Browse through coins with smooth pagination (10 items/page)
- 📱 **Responsive Design** - Mobile-friendly UI with Tailwind CSS
- ⚡ **Lightning Fast** - Built with Vite for instant HMR and quick builds
- 🎨 **Modern UI** - Clean and intuitive user interface

### 🔧 Backend Features
- 🌐 **RESTful API** - Complete CRUD operations for cryptocurrency data
- 🗄️ **MongoDB Integration** - Persistent data storage with Mongoose ODM
- 🔐 **CORS Enabled** - Secure cross-origin requests
- 🔄 **Auto-reload** - Nodemon for development convenience
- 🌍 **Environment Config** - Secure configuration with environment variables
- 📡 **API Routes** - Organized and scalable route structure

---

## 🛠️ Tech Stack

### Frontend Stack
```
React 19.2.6          - UI Framework
Vite 8.0.12          - Build Tool & Dev Server
Tailwind CSS 4.3.0   - Styling
Axios 1.16.0         - HTTP Client
ESLint 10.3.0        - Code Quality
```

### Backend Stack
```
Node.js              - JavaScript Runtime
Express 5.2.1        - Web Framework
MongoDB              - NoSQL Database
Mongoose 9.6.2       - ODM
CORS 2.8.6          - Cross-Origin Support
Nodemon 3.1.14      - Development Server
```

---

## 📋 Prerequisites

Before you begin, ensure you have installed:
- **Node.js** v14 or higher ([Download](https://nodejs.org/))
- **npm** or **yarn** package manager
- **MongoDB** ([Local](https://www.mongodb.com/try/download/community) or [Atlas](https://www.mongodb.com/cloud/atlas))
- **Git** for version control

---

## 🚀 Quick Start

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/yashtapaniya06/Crypto-app.git
cd Crypto-app
```

### 2️⃣ Frontend Setup

```bash
cd Crypto-app

# Install dependencies
npm install

# Start development server
npm run dev
```

**Frontend runs on:** `http://localhost:5173`

### 3️⃣ Backend Setup (New Terminal)

```bash
cd ../Crypto-backend

# Install dependencies
npm install

# Create .env file
echo "DBURL=mongodb://localhost:27017/crypto-app" > .env

# Start backend server
npx nodemon script.js
```

**Backend runs on:** `http://localhost:3000`

---

## 📁 Project Structure

```
Crypto-app/
├── 📂 Crypto-app/              (Frontend - React + Vite)
│   ├── 📂 src/
│   │   ├── App.jsx             # Main component
│   │   ├── main.jsx            # Entry point
│   │   ├── index.css           # Global styles
│   │   └── 📂 assets/
│   ├── 📂 public/
│   ├── package.json
│   ├── vite.config.js
│   ├── eslint.config.js
│   └── README.md
│
├── 📂 Crypto-backend/          (Backend - Express + MongoDB)
│   ├── 📂 App/
│   │   ├── 📂 Controllers/
│   │   │   └── cryptoController.js    # Business Logic
│   │   ├── 📂 Models/
│   │   │   └── Crypto.js             # Database Schema
│   │   └── 📂 Routes/
│   │       └── cryptoRoutes.js        # API Routes
│   ├── script.js               # Server Entry Point
│   ├── package.json
│   └── README.md
│
└── README.md                   # This File
```

---

## 🔌 API Endpoints

### Base URL
```
http://localhost:3000/api/crypto
```

### Endpoints Reference

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/` | Get all cryptocurrencies |
| `GET` | `/:id` | Get single cryptocurrency |
| `POST` | `/` | Create new cryptocurrency |
| `PUT` | `/:id` | Update cryptocurrency |
| `DELETE` | `/:id` | Delete cryptocurrency |

### Example Requests

#### Get All Cryptocurrencies
```bash
curl http://localhost:3000/api/crypto
```

#### Create New Cryptocurrency
```bash
curl -X POST http://localhost:3000/api/crypto \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Bitcoin",
    "symbol": "BTC",
    "price": 45000,
    "marketCap": 890000000000
  }'
```

#### Update Cryptocurrency
```bash
curl -X PUT http://localhost:3000/api/crypto/60d5ec49c1234567890abcde \
  -H "Content-Type: application/json" \
  -d '{"price": 46000}'
```

---

## ⚙️ Environment Configuration

### Backend (.env)

Create a `.env` file in `Crypto-backend/`:

```env
# Local MongoDB
DBURL=mongodb://localhost:27017/crypto-app
PORT=3000

# OR MongoDB Atlas
DBURL=mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/crypto-app
PORT=3000
```

**Never commit `.env` to version control!** Add it to `.gitignore`.

---

## 📜 Available Scripts

### Frontend

```bash
npm run dev      # Start Vite development server with HMR
npm run build    # Build for production
npm run preview  # Preview production build locally
npm run lint     # Run ESLint checks
```

### Backend

```bash
npx nodemon script.js  # Start server with auto-reload
npm install            # Install dependencies
npm test              # Run tests (when available)
```

---

## 🗄️ Database Schema

### Cryptocurrency Model

```javascript
{
  _id: ObjectId,                    // MongoDB ID
  name: String,                     // Coin name (e.g., "Bitcoin")
  symbol: String,                   // Trading symbol (e.g., "BTC")
  price: Number,                    // Current price in USD
  marketCap: Number,                // Total market capitalization
  volume24h: Number,                // 24-hour trading volume
  priceChange24h: Number,           // 24-hour price change %
  rank: Number,                     // Market cap rank
  createdAt: Timestamp,             // Creation date
  updatedAt: Timestamp              // Last update date
}
```

---

## 🎨 Frontend Usage

### Search Functionality
- Search by **cryptocurrency name** (e.g., "Bitcoin")
- Search by **symbol** (e.g., "BTC")
- Search by **market rank**
- Search by **price**

### Filtering Options
- Filter by **market cap rank** categories
- Quick toggle with **"All" option**

### Sorting Capabilities
- Sort by **price**
- Sort by **market cap**
- Sort by **24-hour change**
- Multiple sort combinations

### Pagination
- **10 items per page**
- Easy navigation between pages
- Dynamic page calculation

---

## 🚀 Frontend Development

### Component Structure
```
App.jsx
├── State Management (useState, useEffect)
├── Data Fetching (axios)
├── Search Logic
├── Filter Logic
├── Sort Logic
└── UI Components
    ├── Search Bar
    ├── Filter Controls
    ├── Crypto Table
    └── Pagination
```

### Styling
- **Tailwind CSS** for responsive design
- **Mobile-first approach**
- Utility-based styling system

---

## 🔐 Security Best Practices

### ✅ Implemented
- ✅ CORS configuration for frontend requests
- ✅ Environment variables for sensitive data
- ✅ MongoDB password protection

### 📌 Recommendations for Production
- 🔒 Implement authentication (JWT/OAuth)
- 🔐 Use HTTPS/SSL certificates
- ⚠️ Input validation and sanitization
- 🚫 Rate limiting and DDoS protection
- 📊 API request logging
- 🔑 Secure API key management
- 🛡️ Use MongoDB Atlas with IP whitelisting

---

## 🐛 Troubleshooting

### Frontend Issues

#### Port 5173 Already in Use
```bash
# Kill the process or use different port
npm run dev -- --port 3001
```

#### API Connection Error
```
✗ Check backend is running on http://localhost:3000
✗ Verify CORS is enabled
✗ Check firewall settings
```

### Backend Issues

#### MongoDB Connection Error
```
MongooseError: Cannot connect to MongoDB
```

**Solutions:**
1. Ensure MongoDB is running locally (`mongod`) or Atlas is accessible
2. Verify `DBURL` in `.env` file
3. Check username/password for MongoDB Atlas
4. Verify network connectivity

#### Port 3000 Already in Use
```bash
# Find process using port
lsof -i :3000

# Kill process
kill -9 <PID>

# Or change port in .env
PORT=5000
```

#### CORS Policy Error
```
Access to XMLHttpRequest blocked by CORS policy
```

**Solution:**
- Check CORS middleware in `script.js`
- Verify frontend URL is allowed

---

## 🧪 Testing the API

### Using Postman
1. Import endpoints into Postman
2. Set base URL: `http://localhost:3000/api/crypto`
3. Test each endpoint with sample data

### Using cURL
```bash
# Test connection
curl -X GET http://localhost:3000/api/crypto

# Create with data
curl -X POST http://localhost:3000/api/crypto \
  -H "Content-Type: application/json" \
  -d '{"name":"Ethereum","symbol":"ETH"}'
```

### Using VS Code REST Client
Create `test.rest` file:
```http
### Get all cryptos
GET http://localhost:3000/api/crypto

### Get single
GET http://localhost:3000/api/crypto/60d5ec49c1234567890abcde

### Create
POST http://localhost:3000/api/crypto
Content-Type: application/json

{
  "name": "Bitcoin",
  "symbol": "BTC",
  "price": 45000
}
```

---

## 🌐 Deployment

### Frontend Deployment (Vercel/Netlify)
```bash
npm run build

# Deploy 'dist' folder to Vercel or Netlify
```

### Backend Deployment Options

**Heroku:**
```bash
heroku create your-app-name
git push heroku main
heroku config:set DBURL=your_mongodb_url
```

**Railway/Render:**
- Connect GitHub repo
- Set environment variables
- Deploy automatically

**AWS/Azure/DigitalOcean:**
- Deploy to VM/AppPlatform
- Configure environment variables
- Use PM2 or Docker for management

---

## 📈 Future Enhancements

- [ ] User authentication system
- [ ] Watchlist feature
- [ ] Price alerts
- [ ] Historical price charts
- [ ] Portfolio tracking
- [ ] Advanced analytics
- [ ] Dark/Light theme
- [ ] Real-time price updates (WebSocket)
- [ ] Mobile app (React Native)
- [ ] Unit & Integration tests

---

## 📚 Resources

- [React Documentation](https://react.dev/)
- [Express.js Guide](https://expressjs.com/)
- [MongoDB Manual](https://docs.mongodb.com/manual/)
- [Mongoose Documentation](https://mongoosejs.com/)
- [Vite Guide](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [CoinGecko API](https://www.coingecko.com/en/api)

---

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/AmazingFeature`)
3. **Commit** your changes (`git commit -m 'Add AmazingFeature'`)
4. **Push** to the branch (`git push origin feature/AmazingFeature`)
5. **Open** a Pull Request

---

## 📄 License

This project is licensed under the **ISC License** - see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

**Yash Tapaniya**

- 📧 Email: [Your Email]
- 🐙 GitHub: [@yashtapaniya06](https://github.com/yashtapaniya06)
- 💼 LinkedIn: [Your LinkedIn]

---

## 💬 Support

If you found this project helpful, please consider:
- ⭐ Starring the repository
- 🐛 Reporting bugs
- 💡 Suggesting new features
- 🤝 Contributing to the project

---

## 📞 Getting Help

- **Issues:** Open a [GitHub Issue](https://github.com/yashtapaniya06/Crypto-app/issues)
- **Discussions:** Start a [GitHub Discussion](https://github.com/yashtapaniya06/Crypto-app/discussions)
- **Documentation:** Check [docs](./docs) folder

---

<div align="center">

**Made with ❤️ by Yash Tapaniya**

[⬆ Back to Top](#-crypto-app---full-stack-cryptocurrency-tracker)

</div>
