## Project Structure 

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
npm run dev
```