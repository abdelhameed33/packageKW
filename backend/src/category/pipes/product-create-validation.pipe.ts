import { PipeTransform, BadRequestException } from "@nestjs/common";
import { isNumber } from "class-validator";
import { CreateProductDto } from "../dto/create-product.dto";

export class ProductValidationPipe implements PipeTransform {

   

    transform(value: CreateProductDto) {
        //validate price 
       if (!isNumber(value.price)){
        throw new BadRequestException(`price:${value.price} is not a number`)
       }
       //validate 
       if (!isNumber(value.quantity)){
        throw new BadRequestException(`quantity:${value.quantity} is not a number`)
       }
       
        return value;
    }

    
}