import { User } from "src/auth/user.entity";
import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'addresses'})
export class Address extends BaseEntity{
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    address1: string;

    @Column()
    address2: string;

    @Column()
    city: string;

    @Column()
    state: string;

    @Column({name:'postal_code'})
    postalCode: string;

    @ManyToOne(() => User,
    user => user.addresss, { eager: false })
    @JoinColumn({ name: "user_id" })
    user: User;


}