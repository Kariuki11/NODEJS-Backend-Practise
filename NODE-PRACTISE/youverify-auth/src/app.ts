import express, { Request, Response } from 'express';
import cors from 'cors';
import { VerificationController } from './controllers/verification.controller';

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.post('/verify', async (req: Request, res: Response) => {
  await VerificationController.verifyUserId(req, res);
});

// Export the configured Express app
export { app };










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