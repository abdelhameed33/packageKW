import { IsNotEmpty, MaxLength, MinLength } from "class-validator";

export class CreateAddressDto{

    @IsNotEmpty()
    @MinLength(2)
    @MaxLength(250)
    address1: string;

    @MinLength(0)
    @MaxLength(250)
    address2: string;

    @MinLength(2)
    @MaxLength(250)
    city: string;

    @MinLength(0)
    @MaxLength(250)
    state: string;

    @MinLength(0)
    @MaxLength(20)
    postalCode: string;
}