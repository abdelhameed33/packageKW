import { User } from "src/auth/user.entity";
import { BaseEntity, Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { OrderProducts } from "./order-products.entity";

@Entity({name:'orders'})
export class Order extends BaseEntity{

    @PrimaryGeneratedColumn()
    id: number;

    @CreateDateColumn()
    created_at: Date;

    @ManyToOne(() => User,
    user => user.orders, { eager: false })
    @JoinColumn({ name: "user_id" })
    user: User;

    @OneToMany(() => OrderProducts, (orderProduct: OrderProducts) => orderProduct.order,{eager:true})
    orderProducts: OrderProducts[];

}