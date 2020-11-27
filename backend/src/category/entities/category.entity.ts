import { BaseEntity, PrimaryGeneratedColumn, Column, Entity, ManyToMany, ManyToOne, OneToMany } from "typeorm";
import { Product } from "./product.entity";


@Entity()
export class Category extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @OneToMany(() => Product, (product: Product) => product.category,{eager:true})
    products: Product[];


}