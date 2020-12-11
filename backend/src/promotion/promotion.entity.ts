import { Product } from "src/category/product.entity";
import { BaseEntity, Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, Timestamp } from "typeorm";

@Entity({ name: 'promotions' })
export class Promotion extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    percent: number;

    @Column()
    start_date: Date

    @Column()
    end_date: Date

    @CreateDateColumn()
    cr_date: Timestamp

    @ManyToOne(() => Product,
        product => product.promotions, { eager: false, onDelete: "CASCADE" })
    @JoinColumn({ name: "product_id" })
    product: Promise<Product>;
}