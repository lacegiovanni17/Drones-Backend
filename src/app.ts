// src/app.ts
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import compression from 'compression';
import * as dotenv from "dotenv";
import { errorHandler } from './middleware/errorHandler';
import { notFoundHandler } from './middleware/notFoundHandler';
import { databaseConnection } from './config/database';
const app = express();

// Middleware
app.use(cors()); // Enable Cross-Origin Resource Sharing (CORS)
app.use(express.json()); // Parse JSON request bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded request bodies
app.use(morgan('combined')); // HTTP request logger
app.use(helmet()); // Enhance application security with various HTTP headers
app.use(compression()); // Compress responses to reduce size
databaseConnection()

// Routes

// Define your routes here, e.g., app.use('/api/users', userRoutes);

// Not Found Handler (404)
app.use(notFoundHandler);

// Error Handler
app.use(errorHandler);

export { app };
