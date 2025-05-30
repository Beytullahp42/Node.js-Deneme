import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity()
export class Item {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    name!: string;

    @Column('float')
    price!: number;

    @CreateDateColumn()
    createdAt!: Date;
}
