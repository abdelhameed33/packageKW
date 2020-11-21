import { IsString, Matches, MaxLength, MinLength } from "class-validator";

export class CreateUserDto{


    @IsString()
    @MinLength(4)
    @MaxLength(20)
    fullname: string;
    
    @IsString()
    @MinLength(4)
    @MaxLength(20)
    email: string;

    @IsString()
    @MinLength(10)
    @MaxLength(15)
    phone: string;

    @IsString()
    @MinLength(8)
    @MaxLength(20)
    password: string;
}