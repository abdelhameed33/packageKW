import { Transform } from "class-transformer";
import { IsNotEmpty, IsNumber, IsString, MaxLength, Min, MinLength } from "class-validator";

export class CreateProductDto{
    @IsString()
    @MinLength(3)
    @MaxLength(100)
    title: string;
    
    @IsString()
    @MinLength(0)
    @MaxLength(800)
    description: string;

    @IsNotEmpty()
    price: number;

    @IsNotEmpty()
    quantity: number;

    @IsNotEmpty()
    images: string [];

}