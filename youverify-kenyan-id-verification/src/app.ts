import express from 'express';
import cors from 'cors';
import { VerificationController } from './controllers/verification.controller';

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.post('/api/verify/kenyan-id', VerificationController.verifyKenyanID);

// Health check
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK' });
});

export default app;