import { User } from "src/auth/user.entity";
import { Product } from "src/category/product.entity";
import { BaseEntity, Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Order } from "./order.entity";

@Entity({name:'order_products'})
export class OrderProduct extends BaseEntity{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    quantity: number;

    @Column({name:'customized_properties'})
    customizedProperties: string;
    
    @ManyToOne(() => Order,
    order => order.orderProducts, { eager: false })
    @JoinColumn({ name: "order_id" })
    order: Order;

    @ManyToOne(() => Product, { eager: false })
    @JoinColumn({ name: "product_id" })
    product: Product;

}