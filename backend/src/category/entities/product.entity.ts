import { Reviews } from "src/reviews/reviews.entity";
import { BaseEntity, PrimaryGeneratedColumn, CreateDateColumn, Column, Entity, ManyToMany, ManyToOne, UpdateDateColumn, JoinColumn, OneToMany } from "typeorm";
import { Category } from "./category.entity";
import { Image } from "./image.entity";


@Entity()
export class Product extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column("decimal", { precision: 10, scale: 2 })
    price: number;

    @Column()
    quantity: number;

    @Column()
    properties: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @ManyToOne(type => Category,
        category => category.products, { eager: false })
    @JoinColumn({ name: "category_id" })
    category: Category;

    @OneToMany(() => Image, (image: Image) => image.product,{eager:true})
    images: Image[];

    @OneToMany(() => Reviews, (review: Reviews) => review.product,{eager:true})
    reviews: Reviews[];

}