import express from 'express';
import dotenv from 'dotenv';
import { verifyUser } from './controllers/auth.controller';

dotenv.config();

const app = express();

// Middleware
app.use(express.json());

// Routes
app.get('/verify/:userId', (req, res) => {
  verifyUser(req, res).catch(error => {
    console.error(error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  });
});

export default app;