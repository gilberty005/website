#!/bin/bash

echo "🚀 Starting backend server..."

# Kill any process using port 5000
PORT=5000
PID=$(lsof -ti:$PORT)

if [ ! -z "$PID" ]; then
    echo "⚠️  Port $PORT is in use by process $PID. Killing it..."
    kill -9 $PID
    sleep 2
fi

# Start the backend
cd backend
npm run dev 