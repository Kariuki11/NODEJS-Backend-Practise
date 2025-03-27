import express from 'express';
import dotenv from 'dotenv';
import { verifyUser } from './controllers/auth.controller';

dotenv.config();

const app = express();

// Middleware
app.use(express.json());

// Routes
app.get('/verify/:userId', verifyUser);

export default app;