
import { Address } from "src/address/address.entity";
import { Order } from "src/order/entities/order.entity";
import { UserRole } from "../user-role.enum";
import { User } from "../user.entity";

export class ResUserDto {


    id: number;

    fullname: string;

    email: string;

    phone: string;

    role: UserRole;

    orders: Promise<Order[]>;

    addresss: Address[];

    constructor(
        user: User
    ) {
        this.id = user.id;
        this.fullname = user.fullname;
        this.email = user.email;
        this.phone = user.phone;
        this.role = user.role;
        this.orders = user.orders;
        this.addresss = user.addresss;
    }


}