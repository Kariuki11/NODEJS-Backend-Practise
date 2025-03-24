import express from 'express',
import cors from 'cors';
import connectDB from './utils/db';
import taskRoutes from './routes/tasks';
import { setupSwagger } from './utils/swagger';
setupSwagger(app);


const app = express();

// Middleware

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/tasks', taskRoutes);

// Connect to MongoDB
connectDB();

export default app;
