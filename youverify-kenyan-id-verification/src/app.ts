import express, { Request, Response } from 'express';
import cors from 'cors';
import { verifyKenyanID } from './controllers/verification.controller';

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.post('/api/verify/kenyan-id', verifyKenyanID);

// Health check
app.get('/health', (req: Request, res: Response) => {
    res.status(200).json({ status: 'OK' });
});

export default app;