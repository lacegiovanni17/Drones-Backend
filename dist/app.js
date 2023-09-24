"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
// src/app.ts
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const helmet_1 = __importDefault(require("helmet"));
const compression_1 = __importDefault(require("compression"));
const errorHandler_1 = require("./middleware/errorHandler");
const notFoundHandler_1 = require("./middleware/notFoundHandler");
const database_1 = require("./config/database");
const app = (0, express_1.default)();
exports.app = app;
// Middleware
app.use((0, cors_1.default)()); // Enable Cross-Origin Resource Sharing (CORS)
app.use(express_1.default.json()); // Parse JSON request bodies
app.use(express_1.default.urlencoded({ extended: true })); // Parse URL-encoded request bodies
app.use((0, morgan_1.default)('combined')); // HTTP request logger
app.use((0, helmet_1.default)()); // Enhance application security with various HTTP headers
app.use((0, compression_1.default)()); // Compress responses to reduce size
(0, database_1.databaseConnection)();
// Routes
// Define your routes here, e.g., app.use('/api/users', userRoutes);
// Not Found Handler (404)
app.use(notFoundHandler_1.notFoundHandler);
// Error Handler
app.use(errorHandler_1.errorHandler);
