import express from "express";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import compression from "compression";
import * as dotenv from "dotenv";
import { errorHandler } from "./middleware/errorHandler";
import { notFoundHandler } from "./middleware/notFoundHandler";
import { databaseConnection } from "./config/database";
import http from "http";
import droneRoutes from "./routes/droneRoutes";
import medicalRoutes from "./routes/medicationRoutes";
const app = express();

// Middleware
app.use(cors()); // Enable Cross-Origin Resource Sharing (CORS)
app.use(express.json()); // Parse JSON request bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded request bodies
app.use(morgan("combined")); // HTTP request logger
app.use(helmet()); // Enhance application security with various HTTP headers
app.use(compression()); // Compress responses to reduce size
databaseConnection();

// Routes

// Define your routes here, e.g., app.use('/api/users', userRoutes);
app.use("/drone", droneRoutes);
app.use("/medical", medicalRoutes);


// Not Found Handler (404)
app.use(notFoundHandler);
const server = http.createServer(app);
const PORT = process.env.PORT || 3000;
export async function startServer() {
  server.listen(PORT, () => {
    console.log(`App: is listening at http://localhost:${PORT}...`);
  });
}

startServer();

export { app };