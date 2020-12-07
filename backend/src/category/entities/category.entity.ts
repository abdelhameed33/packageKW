import { IsNumber } from "class-validator";
import { BaseEntity, PrimaryGeneratedColumn, Column, Entity, ManyToMany, ManyToOne, OneToMany, OneToOne, JoinColumn } from "typeorm";
import { Product } from "../product.entity";


@Entity()
export class Category extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: false })
    name: string;

    @Column()
    description: string;

    @ManyToOne(() => Category, category => category.id, { eager: false })
    @JoinColumn({ name: 'parent_category_id' })
    parentCategory: Category

    @OneToMany(() => Product, (product: Product) => product.category, { eager: false })
    products: Product[];


}