import express from 'express';
import cors from 'cors';
import { VerificationController } from './controllers/verification.controller';

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.post('/verify', VerificationController.verifyUserId);

export default app;