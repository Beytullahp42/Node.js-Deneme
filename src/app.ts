import express from 'express';
import path from 'path';
import { errorHandler } from './middlewares/errorHandler';
import itemController from './controllers/itemController';

const app = express();

app.use(express.json());

// Serve static files from public/
app.use(express.static(path.join(__dirname, '../public')));

// Routes
app.use('/items', itemController);

// Default route to serve index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.use(errorHandler);

export default app;
