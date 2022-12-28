"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.prisma = void 0;
const express_1 = __importDefault(require("express"));
const client_1 = require("@prisma/client");
const compression_1 = __importDefault(require("compression"));
const helmet_1 = __importDefault(require("helmet"));
const cors_1 = __importDefault(require("cors"));
const userroutes_1 = __importDefault(require("./routes/userroutes"));
const errorHandler_1 = __importDefault(require("./error/errorHandler"));
const app = (0, express_1.default)();
const PORT = 3004;
exports.prisma = new client_1.PrismaClient();
// compresses all the responses
app.use((0, compression_1.default)());
// make the headers secure
app.use((0, helmet_1.default)());
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use('/user', userroutes_1.default);
app.get('/', (req, res) => {
    res.send('Yoga Form API');
});
//batch router
app.use('/batch', userroutes_1.default);
// subscription route
app.use('/subscription', userroutes_1.default);
// error handler
app.use(errorHandler_1.default);
app.listen(PORT, () => {
    console.log(`Yoga server is running on port ${PORT}`);
});
exports.default = app;
