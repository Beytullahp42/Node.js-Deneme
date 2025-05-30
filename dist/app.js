"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const errorHandler_1 = require("./middlewares/errorHandler");
const itemController_1 = __importDefault(require("./controllers/itemController"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
// Serve static files from public/
app.use(express_1.default.static(path_1.default.join(__dirname, '../public')));
// Routes
app.use('/items', itemController_1.default);
// Default route to serve index.html
app.get('/', (req, res) => {
    res.sendFile(path_1.default.join(__dirname, '../public/index.html'));
});
app.use(errorHandler_1.errorHandler);
exports.default = app;
