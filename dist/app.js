"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = exports.startServer = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const helmet_1 = __importDefault(require("helmet"));
const compression_1 = __importDefault(require("compression"));
const notFoundHandler_1 = require("./middleware/notFoundHandler");
const database_1 = require("./config/database");
const http_1 = __importDefault(require("http"));
const droneRoutes_1 = __importDefault(require("./routes/droneRoutes"));
const medicationRoutes_1 = __importDefault(require("./routes/medicationRoutes"));
const app = (0, express_1.default)();
exports.app = app;
// Middleware
app.use((0, cors_1.default)()); // Enable Cross-Origin Resource Sharing (CORS)
app.use(express_1.default.json()); // Parse JSON request bodies
app.use(express_1.default.urlencoded({ extended: true })); // Parse URL-encoded request bodies
app.use((0, morgan_1.default)("combined")); // HTTP request logger
app.use((0, helmet_1.default)()); // Enhance application security with various HTTP headers
app.use((0, compression_1.default)()); // Compress responses to reduce size
(0, database_1.databaseConnection)();
// Routes
// Define your routes here, e.g., app.use('/api/users', userRoutes);
app.use("/drone", droneRoutes_1.default);
app.use("/medical", medicationRoutes_1.default);
// Not Found Handler (404)
app.use(notFoundHandler_1.notFoundHandler);
const server = http_1.default.createServer(app);
const PORT = process.env.PORT || 3000;
function startServer() {
    return __awaiter(this, void 0, void 0, function* () {
        server.listen(PORT, () => {
            console.log(`App: is listening at http://localhost:${PORT}...`);
        });
    });
}
exports.startServer = startServer;
startServer();
