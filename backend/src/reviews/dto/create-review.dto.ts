import { IsNotEmpty, Max, MAX, MaxLength, Min, MinLength } from "class-validator";

export class CreateReviewDto{
    
    @IsNotEmpty()
    @MinLength(3)
    @MaxLength(50)
    title: string;

    @IsNotEmpty()
    @MinLength(3)
    @MaxLength(100)
    comment: string;

    @IsNotEmpty()
    @Min(0)
    @Max(5)
    rating: number;

}