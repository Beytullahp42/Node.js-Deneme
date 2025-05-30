import dotenv from 'dotenv';

dotenv.config();

interface Config {
    port: number;
    nodeEnv: string;
    dbType: string;
    dbHost: string;
    dbPort: number;
    dbUsername: string;
    dbPassword: string;
    dbName: string;
}

const config: Config = {
    port: Number(process.env.PORT) || 3001,
    nodeEnv: process.env.NODE_ENV || 'development',
    dbType: process.env.DB_TYPE || 'postgres',
    dbHost: process.env.DB_HOST || 'localhost',
    dbPort: Number(process.env.DB_PORT) || 5432,
    dbUsername: process.env.DB_USERNAME || 'postgres',
    dbPassword: process.env.DB_PASSWORD || 'postgres',
    dbName: process.env.DB_DATABASE || 'testdb',
};

export default config;