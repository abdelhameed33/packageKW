import { IsNotEmpty, IsNumber } from "class-validator";

export class CreateOrderProductDto{

    @IsNumber()
    quantity: number;

    @IsNumber()
    productId: number;

    // @IsNotEmpty()
    customizedProperties: string;

}