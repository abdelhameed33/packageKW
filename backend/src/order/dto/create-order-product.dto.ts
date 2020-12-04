import { IsNotEmpty } from "class-validator";

export class CreateOrderProductDto{

    @IsNotEmpty()
    quantity: number;

    @IsNotEmpty()
    productId: number;

    @IsNotEmpty()
    customizedProperties: string;

}