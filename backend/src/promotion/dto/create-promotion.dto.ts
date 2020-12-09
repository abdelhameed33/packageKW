import { IsDateString, IsNotEmpty, Max, Min } from "class-validator";

export class CreatePromotionDto{
    @Min(1)
    @Max(99)
    percent: number;

    @IsDateString()
    start_date: Date;

    @IsDateString()
    end_date: Date;

    @IsNotEmpty()
    productId: number;
}