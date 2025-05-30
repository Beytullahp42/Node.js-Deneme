"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const errorHandler_1 = require("./middlewares/errorHandler");
const itemController_1 = __importDefault(require("./controllers/itemController"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
// Routes
app.use('/items', itemController_1.default); // Now all routes are prefixed with /items
app.use(errorHandler_1.errorHandler);
exports.default = app;
