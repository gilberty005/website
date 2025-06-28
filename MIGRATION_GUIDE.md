# Migration Guide: AWS to Cost-Effective Hosting

## 🎯 What We've Accomplished

✅ **Reorganized file structure** - Clean separation of frontend and backend  
✅ **Replaced .NET backend** - Now using lightweight Node.js/Express  
✅ **Updated contact form** - Modern fetch API with better error handling  
✅ **Added security features** - Rate limiting, CORS, input validation  
✅ **Created deployment configs** - Ready for Vercel, Railway, etc.  
✅ **Documented everything** - Complete setup and deployment guides  

## 📁 New Structure

```
website/
├── frontend/          # Your React app (moved from personalwebsite/ClientApp)
├── backend/           # New Node.js API (replaces .NET backend)
├── scripts/           # Setup and deployment scripts
├── README.md          # Complete documentation
└── MIGRATION_GUIDE.md # This file
```

## 🚀 Quick Migration Steps

### 1. Test Locally First
```bash
# Run the setup script
./scripts/setup.sh

# Start backend
cd backend && npm run dev

# Start frontend (in new terminal)
cd frontend && npm start
```

### 2. Deploy Backend (Choose One)

#### Option A: Railway (Recommended - $5/month)
1. Push code to GitHub
2. Go to [railway.app](https://railway.app)
3. Connect your repository
4. Set environment variables:
   - `EMAIL_USER=gilberty020@gmail.com`
   - `EMAIL_PASS=your_app_password`
   - `FRONTEND_URL=https://your-frontend-domain.com`

#### Option B: Render (Free tier)
1. Push code to GitHub
2. Go to [render.com](https://render.com)
3. Create new Web Service
4. Connect your repository
5. Set environment variables

### 3. Deploy Frontend (Choose One)

#### Option A: Vercel (Recommended - Free)
1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Set environment variable:
   - `REACT_APP_API_URL=https://your-backend-url.com`

#### Option B: Netlify (Free)
1. Push code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Connect your repository
4. Set build command: `npm run build`
5. Set publish directory: `build`

### 4. Update DNS
1. Point your domain to the new hosting
2. Test thoroughly
3. Monitor for a few days

### 5. Cancel AWS Services
Once everything is working:
1. Export any data you need from AWS
2. Cancel EC2 instances
3. Cancel S3 buckets
4. Cancel CloudFront distributions
5. Cancel any other AWS services

## 💰 Cost Savings Breakdown

| Service | AWS Cost | New Cost | Monthly Savings |
|---------|----------|----------|-----------------|
| Frontend | $1-5 | $0 | $1-5 |
| Backend | $20-50 | $5 | $15-45 |
| Database | $15-30 | $0 | $15-30 |
| **Total** | **$36-85** | **$5** | **$31-80** |

## 🔧 Environment Variables

### Backend (.env)
```bash
EMAIL_USER=gilberty020@gmail.com
EMAIL_PASS=your_app_password_here
FRONTEND_URL=https://your-frontend-domain.com
PORT=5000
```

### Frontend (.env)
```bash
REACT_APP_API_URL=https://your-backend-url.com
```

## 🛠️ Adding New Features

### Backend API Endpoints
Add new routes in `backend/server.js`:
```javascript
app.post('/api/new-endpoint', async (req, res) => {
  // Your logic here
});
```

### Database Integration
When you need data storage:
1. Sign up for [Supabase](https://supabase.com) (free tier)
2. Uncomment code in `backend/database.js`
3. Add environment variables
4. Create your database tables

### Frontend Features
Add new components in `frontend/src/` following the existing structure.

## 🔒 Security Notes

- Email credentials are now in environment variables (more secure)
- Rate limiting prevents spam
- CORS is properly configured
- Input validation is in place
- Helmet.js adds security headers

## 📞 Support

If you run into issues:
1. Check the README.md for detailed instructions
2. Verify environment variables are set correctly
3. Check deployment platform logs
4. Test locally first before deploying

## 🎉 Benefits of New Setup

- **Much cheaper** - Save $31-80/month
- **Easier to maintain** - Simpler tech stack
- **Better performance** - Optimized for modern hosting
- **More secure** - Better security practices
- **Easier to scale** - Can easily add features
- **Better developer experience** - Faster development cycle

Good luck with your migration! 🚀 