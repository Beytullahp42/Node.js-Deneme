import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { Item } from '../models/item';
import config from './config';

export const AppDataSource = new DataSource({
    type: config.dbType as 'postgres' | 'mysql' | 'sqlite' | 'mariadb' | 'mssql',
    host: config.dbHost,
    port: config.dbPort,
    username: config.dbUsername,
    password: config.dbPassword,
    database: config.dbName,
    synchronize: false, // set false in production
    entities: [Item],
    logging: true,
    migrations: ['src/migrations/*.ts'],
    subscribers: [],
});
