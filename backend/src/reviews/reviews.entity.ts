import { User } from "src/auth/user.entity";
import { Product } from "src/category/product.entity";
import { BaseEntity, Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Reviews extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    comment: string;

    @Column()
    rating: number;

    @CreateDateColumn()
    created_at: Date;

    @ManyToOne(type => Product,
        product => product.reviews, { eager: false, onDelete: 'CASCADE' })
    @JoinColumn({ name: "product_id" })
    product: Product;

    @ManyToOne(type => User, { eager: false })
    @JoinColumn({ name: "user_id" })
    user: User;
}