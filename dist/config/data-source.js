"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const item_1 = require("../models/item");
const config_1 = __importDefault(require("./config"));
exports.AppDataSource = new typeorm_1.DataSource({
    type: config_1.default.dbType,
    host: config_1.default.dbHost,
    port: config_1.default.dbPort,
    username: config_1.default.dbUsername,
    password: config_1.default.dbPassword,
    database: config_1.default.dbName,
    synchronize: false, // set false in production
    entities: [item_1.Item],
    logging: true,
    migrations: ['src/migrations/*.ts'],
    subscribers: [],
});
