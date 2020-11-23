import { BaseEntity, PrimaryGeneratedColumn, Column, Entity, ManyToMany, ManyToOne, OneToMany, JoinColumn } from "typeorm";
import { Product } from "./Product.entity";


@Entity()
export class Image extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    image_name: string;

    
    @ManyToOne(type => Product,
        product => product.images, { eager: false })
    @JoinColumn({ name: "product_id" })
    product: Product;


}