#!/bin/bash

echo "🚀 Setting up your personal website..."

# Install frontend dependencies
echo "📦 Installing frontend dependencies..."
cd frontend
npm install
cd ..

# Install backend dependencies
echo "📦 Installing backend dependencies..."
cd backend
npm install
cd ..

# Create environment files
echo "🔧 Creating environment files..."

if [ ! -f "backend/.env" ]; then
    cp backend/env.example backend/.env
    echo "✅ Created backend/.env (please edit with your email credentials)"
else
    echo "⚠️  backend/.env already exists"
fi

if [ ! -f "frontend/.env" ]; then
    echo "REACT_APP_API_URL=http://localhost:5000" > frontend/.env
    echo "✅ Created frontend/.env"
else
    echo "⚠️  frontend/.env already exists"
fi

echo ""
echo "🎉 Setup complete!"
echo ""
echo "Next steps:"
echo "1. Edit backend/.env with your email credentials"
echo "2. Run 'cd backend && npm run dev' to start the backend"
echo "3. Run 'cd frontend && npm start' to start the frontend"
echo ""
echo "For deployment instructions, see README.md" 