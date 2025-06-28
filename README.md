# Personal Website

A modern, cost-effective personal website built with React frontend and Node.js backend.

## 🏗️ Project Structure

```
website/
├── frontend/          # React application
│   ├── src/          # Source code
│   ├── public/       # Static assets
│   └── package.json  # Frontend dependencies
├── backend/          # Node.js API server
│   ├── server.js     # Express server
│   └── package.json  # Backend dependencies
└── README.md         # This file
```

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Frontend Setup
```bash
cd frontend
npm install
npm start
```

### Backend Setup
```bash
cd backend
npm install
cp env.example .env
# Edit .env with your email credentials
npm run dev
```

## 🌐 Deployment Options

### Frontend Hosting (Free Tiers Available)

#### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Set environment variable `REACT_APP_API_URL` to your backend URL
4. Deploy!

#### Netlify
1. Push your code to GitHub
2. Connect your repository to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `build`
5. Set environment variable `REACT_APP_API_URL`

#### GitHub Pages
1. Add `homepage` field to `package.json`
2. Install `gh-pages`: `npm install --save-dev gh-pages`
3. Add deploy scripts to `package.json`
4. Run `npm run deploy`

### Backend Hosting (Much Cheaper Than AWS)

#### Railway (Recommended - $5/month)
1. Push your code to GitHub
2. Connect your repository to Railway
3. Set environment variables:
   - `EMAIL_USER`
   - `EMAIL_PASS`
   - `FRONTEND_URL`
4. Deploy!

#### Render (Free Tier Available)
1. Push your code to GitHub
2. Connect your repository to Render
3. Set environment variables
4. Deploy!

#### Fly.io (Free Tier Available)
1. Install Fly CLI
2. Run `fly launch`
3. Set secrets: `fly secrets set EMAIL_USER=... EMAIL_PASS=...`
4. Deploy: `fly deploy`

## 💰 Cost Comparison

| Service | AWS | Alternative | Savings |
|---------|-----|-------------|---------|
| Frontend | S3 + CloudFront ($1-5/month) | Vercel/Netlify (Free) | $1-5/month |
| Backend | EC2 + Load Balancer ($20-50/month) | Railway ($5/month) | $15-45/month |
| Database | RDS ($15-30/month) | Supabase (Free tier) | $15-30/month |
| **Total** | **$36-85/month** | **$5/month** | **$31-80/month** |

## 🔧 Environment Variables

### Frontend (.env)
```
REACT_APP_API_URL=https://your-backend-url.com
```

### Backend (.env)
```
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
FRONTEND_URL=https://your-frontend-url.com
PORT=5000
```

## 📧 Email Setup

1. Enable 2-factor authentication on your Gmail account
2. Generate an App Password
3. Use the App Password in your backend environment variables

## 🔒 Security Features

- Rate limiting (100 requests per 15 minutes)
- CORS protection
- Helmet.js security headers
- Input validation
- Environment variable protection

## 🛠️ Development

### Adding New Features
1. Frontend changes go in `frontend/src/`
2. Backend API endpoints go in `backend/server.js`
3. Test locally before deploying

### Database Integration
For future data storage needs, consider:
- **Supabase** (PostgreSQL, free tier)
- **PlanetScale** (MySQL, free tier)
- **Railway Postgres** ($5/month)

## 📝 Migration from AWS

1. **Export your data** from AWS services
2. **Update DNS** to point to new hosting
3. **Test thoroughly** before switching
4. **Monitor** the new setup for a few days
5. **Cancel AWS services** once confirmed working

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

MIT License - feel free to use this structure for your own projects! 