import { IsOptional, IsNotEmpty, IsIn } from "class-validator";

export class GetProductsFilterDto{

    offset: number;

    limit: number;

    categoryId: number;

    sortBy: string;


    search: string;
}