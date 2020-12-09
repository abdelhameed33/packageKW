import { User } from "src/auth/user.entity";
import { BaseEntity, Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { OrderProduct } from "./order-products.entity";
import { OrderStatus } from "./order-status.enum";

@Entity({name:'orders'})
export class Order extends BaseEntity{

    @PrimaryGeneratedColumn()
    id: number;

    @CreateDateColumn()
    created_at: Date;

    @Column()
    total: number;

    @Column({
        type: "enum",
        enum: OrderStatus
    })
    status: OrderStatus;

    @ManyToOne(() => User,
    user => user.orders, { eager: false })
    @JoinColumn({ name: "user_id" })
    user: User;

    @OneToMany(() => OrderProduct, 
    (orderProduct: OrderProduct) => orderProduct.order,{eager:false})
    orderProducts: Promise<OrderProduct[]>;

}