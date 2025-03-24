import express from 'express';
import cors from 'cors';
import taskRoutes from './routes/tasks';
import connectDB from './utils/db';
import { setupSwagger } from './utils/swagger';

// Initialize express app first
const app = express();

// Then setup middleware
app.use(cors());
app.use(express.json());

// Setup routes
app.use('/api/tasks', taskRoutes);

// Connect to MongoDB
connectDB();

// Finally setup Swagger (now that app is properly initialized)
setupSwagger(app);

export default app;







// import express from 'express',
// import cors from 'cors';
// import connectDB from './utils/db';
// import taskRoutes from './routes/tasks';
// import { setupSwagger } from './utils/swagger';
// setupSwagger(app);


// const app = express();

// // Middleware

// app.use(cors());
// app.use(express.json());

// // Routes
// app.use('/api/tasks', taskRoutes);

// // Connect to MongoDB
// connectDB();

// export default app;
