import { IsString, MaxLength, MinLength } from "class-validator";

export class CreateCategoryDto{
    @IsString()
    @MinLength(3)
    @MaxLength(50)
    name: string;
    
    @IsString()
    @MinLength(0)
    @MaxLength(100)
    description: string;

}