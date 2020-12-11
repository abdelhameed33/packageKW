import { BaseEntity, PrimaryGeneratedColumn, Column, Entity, ManyToMany, ManyToOne, OneToMany, JoinColumn } from "typeorm";
import { Product } from "../product.entity";


@Entity()
export class Image extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true })
    image_name: string;


    @ManyToOne(type => Product,
        product => product.images, { eager: false, onDelete: "CASCADE" })
    @JoinColumn({ name: "product_id" })
    product: Product;


}