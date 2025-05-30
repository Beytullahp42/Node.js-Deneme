"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemService = void 0;
const data_source_1 = require("../config/data-source");
const item_1 = require("../models/item");
class ItemService {
    constructor() {
        this.itemRepository = data_source_1.AppDataSource.getRepository(item_1.Item);
    }
    async getItem(id) {
        return await this.itemRepository.findOneBy({ id });
    }
    async getAllItems() {
        return await this.itemRepository.find();
    }
    async addItem(dto) {
        const item = this.itemRepository.create(dto);
        return await this.itemRepository.save(item);
    }
    async updateItem(id, dto) {
        const item = await this.getItem(id);
        if (!item) {
            return null;
        }
        item.name = dto.name;
        item.price = dto.price;
        return await this.itemRepository.save(item);
    }
    async deleteItem(id) {
        await this.itemRepository.delete(id);
    }
}
exports.ItemService = ItemService;
