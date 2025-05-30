import { Request, Response, Router, NextFunction } from 'express';
import { ItemService } from '../services/itemService';
import { validate } from 'class-validator';
import { ItemDto } from '../dto/itemDto';

const router = Router();
const itemService = new ItemService();

router.get('/', async (_req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const items = await itemService.getAllItems();
        res.json(items);
    } catch (err) {
        next(err);
    }
});

router.get('/:id', async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const id = Number(req.params.id);
        if (isNaN(id)) {
            res.status(400).json({ message: 'Invalid ID' });
            return;
        }

        const item = await itemService.getItem(id);
        if (!item) {
            res.status(404).json({ message: 'Item not found' });
            return;
        }

        res.json(item);
    } catch (err) {
        next(err);
    }
});

router.post('/', async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const dto = new ItemDto(req.body.name, req.body.price);
        const errors = await validate(dto);
        if (errors.length > 0) {
            res.status(400).json(errors);
            return;
        }

        const newItem = await itemService.addItem(dto);
        res.status(201).json(newItem);
    } catch (err) {
        next(err);
    }
});

router.put('/:id', async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const id = Number(req.params.id);
        if (isNaN(id)) {
            res.status(400).json({ message: 'Invalid ID' });
            return;
        }

        const dto = new ItemDto(req.body.name, req.body.price);
        const errors = await validate(dto);
        if (errors.length > 0) {
            res.status(400).json(errors);
            return;
        }

        const updatedItem = await itemService.updateItem(id, dto);
        if (!updatedItem) {
            res.status(404).json({ message: 'Item not found' });
            return;
        }

        res.json(updatedItem);
    } catch (err) {
        next(err);
    }
});

router.delete('/:id', async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const id = Number(req.params.id);
        if (isNaN(id)) {
            res.status(400).json({ message: 'Invalid ID' });
            return;
        }

        await itemService.deleteItem(id);
        res.sendStatus(204);
    } catch (err) {
        next(err);
    }
});

export default router;
