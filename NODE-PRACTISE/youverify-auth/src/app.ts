import express from 'express';
import cors from 'cors';
import { VerificationController } from './controllers/verification.controller';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

// Middleware
app.use(cors({
  origin: process.env.ALLOWED_ORIGINS?.split(',') || '*',
  methods: ['POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type']
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Logging middleware
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.path}`);
  next();
});

// Routes
app.post('/verify', VerificationController.verifyUserId);

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date() });
});

// Error handling middleware
app.use((err: any, req: any, res: any, next: any) => {
  console.error('Global error handler:', err);
  res.status(500).json({
    success: false,
    error: 'Internal server error'
  });
});

export { app };





// import express, { Request, Response } from 'express';
// import cors from 'cors';
// import { VerificationController } from './controllers/verification.controller';

// const app = express();

// // Middleware
// app.use(cors());
// app.use(express.json());

// // Routes
// app.post('/verify', async (req: Request, res: Response) => {
//   await VerificationController.verifyUserId(req, res);
// });

// // Export the configured Express app
// export { app };










// import express from 'express';
// import cors from 'cors';
// import { VerificationController } from './controllers/verification.controller';

// const app = express();

// // Middleware
// app.use(cors());
// app.use(express.json());

// // Routes
// app.post('/verify', VerificationController.verifyUserId);

// export default app;