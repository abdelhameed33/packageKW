import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn, Unique } from "typeorm";
import * as bcrypt from 'bcrypt';
import { UserRole } from "./user-role.enum";
import { Order } from "src/order/entities/order.entity";
import { Address } from "src/address/address.entity";

@Entity()
@Unique(['email'])
export class User extends BaseEntity{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    fullname: string;

    @Column()
    email: string;

    @Column()
    phone: string;

    @Column()
    password: string;

    @Column({
        type: "enum",
        enum: UserRole
    })
    role: UserRole;

    @Column()
    salt: string;

    @OneToMany(() => Order, (order: Order) => order.user,{eager:false})
    orders: Promise<Order[]>;

    @OneToMany(() => Address, (address: Address) => address.user,{eager:false})
    addresss: Address[];


    async validatePassword(password: string):Promise<boolean>{
        const hash = await bcrypt.hash(password,this.salt);
        return hash === this.password;
    }

}