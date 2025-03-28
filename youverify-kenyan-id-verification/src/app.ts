import express from 'express';
import cors from 'cors';
import { verifyKenyanID } from './controllers/verification.controller';

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.post('/api/verify/kenyan-id', (req, res) => {
    verifyKenyanID(req, res).catch(err => {
        console.error('Unhandled error:', err);
        res.status(500).json({ error: 'Internal server error' });
    });
});

// Health check
app.get('/health', (req, res) => {
    res.status(200).json({ status: 'OK' });
});

export default app;