"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const app_1 = __importDefault(require("./app"));
const data_source_1 = require("./config/data-source");
const config_1 = __importDefault(require("./config/config"));
data_source_1.AppDataSource.initialize()
    .then(() => {
    console.log('✅ Database connected');
    app_1.default.listen(config_1.default.port, () => {
        console.log(`🚀 Server running at http://localhost:${config_1.default.port}`);
    });
})
    .catch((err) => {
    console.error('❌ Failed to connect to the database:', err);
});
