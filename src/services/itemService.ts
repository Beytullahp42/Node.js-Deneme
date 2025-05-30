import { AppDataSource } from '../config/data-source';
import { Item } from '../models/item';
import { ItemDto } from '../dto/itemDto';

export class ItemService {
    private itemRepository = AppDataSource.getRepository(Item);

    async getItem(id: number): Promise<Item | null> {
        return await this.itemRepository.findOneBy({ id });
    }

    async getAllItems(): Promise<Item[]> {
        return await this.itemRepository.find();
    }

    async addItem(dto: ItemDto): Promise<Item> {
        const item = this.itemRepository.create(dto);
        return await this.itemRepository.save(item);
    }

    async updateItem(id: number, dto: ItemDto): Promise<Item | null> {
        const item = await this.getItem(id);
        if (!item) {
            return null;
        }

        item.name = dto.name;
        item.price = dto.price;
        return await this.itemRepository.save(item);
    }

    async deleteItem(id: number): Promise<void> {
        await this.itemRepository.delete(id);
    }
}
