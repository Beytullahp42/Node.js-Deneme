"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const itemService_1 = require("../services/itemService");
const class_validator_1 = require("class-validator");
const itemDto_1 = require("../dto/itemDto");
const router = (0, express_1.Router)();
const itemService = new itemService_1.ItemService();
router.get('/', async (_req, res, next) => {
    try {
        const items = await itemService.getAllItems();
        res.json(items);
    }
    catch (err) {
        next(err);
    }
});
router.get('/:id', async (req, res, next) => {
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
    }
    catch (err) {
        next(err);
    }
});
router.post('/', async (req, res, next) => {
    try {
        const dto = new itemDto_1.ItemDto(req.body.name, req.body.price);
        const errors = await (0, class_validator_1.validate)(dto);
        if (errors.length > 0) {
            res.status(400).json(errors);
            return;
        }
        const newItem = await itemService.addItem(dto);
        res.status(201).json(newItem);
    }
    catch (err) {
        next(err);
    }
});
router.put('/:id', async (req, res, next) => {
    try {
        const id = Number(req.params.id);
        if (isNaN(id)) {
            res.status(400).json({ message: 'Invalid ID' });
            return;
        }
        const dto = new itemDto_1.ItemDto(req.body.name, req.body.price);
        const errors = await (0, class_validator_1.validate)(dto);
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
    }
    catch (err) {
        next(err);
    }
});
router.delete('/:id', async (req, res, next) => {
    try {
        const id = Number(req.params.id);
        if (isNaN(id)) {
            res.status(400).json({ message: 'Invalid ID' });
            return;
        }
        await itemService.deleteItem(id);
        res.sendStatus(204);
    }
    catch (err) {
        next(err);
    }
});
exports.default = router;
