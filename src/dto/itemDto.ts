import { IsString, IsNumber, Min, MinLength } from 'class-validator';

export class ItemDto {

    @MinLength(1)
    @IsString()
    name!: string;

    @IsNumber()
    @Min(0, { message: 'Price must be a non-negative number' })
    price!: number;

    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
    }
}
