import { User } from "src/auth/user.entity";
import { BaseEntity, Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Order } from "./order.entity";

@Entity({name:'order_products'})
export class OrderProducts extends BaseEntity{

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

}