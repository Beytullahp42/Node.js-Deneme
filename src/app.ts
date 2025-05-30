import express from 'express';
import { errorHandler } from './middlewares/errorHandler';
import itemController from './controllers/itemController';

const app = express();

app.use(express.json());

// Routes
app.use('/items', itemController); // Now all routes are prefixed with /items

app.use(errorHandler);

export default app;