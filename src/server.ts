import 'reflect-metadata';
import app from './app';
import { AppDataSource } from './config/data-source';
import config from './config/config';

AppDataSource.initialize()
    .then(() => {
        console.log('✅ Database connected');

        app.listen(config.port, () => {
            console.log(`🚀 Server running at http://localhost:${config.port}`);
        });
    })
    .catch((err) => {
        console.error('❌ Failed to connect to the database:', err);
    });
