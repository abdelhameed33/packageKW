import { IsString, MaxLength, MinLength ,IsNumber} from "class-validator";

export class CreateCategoryDto{

    parentId: string;

    @IsString()
    @MinLength(3)
    @MaxLength(50)
    name: string;
    
    @IsString()
    @MinLength(0)
    @MaxLength(100)
    description: string;

}