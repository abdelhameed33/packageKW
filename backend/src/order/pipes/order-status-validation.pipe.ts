import { PipeTransform, BadRequestException } from "@nestjs/common";
import { OrderStatus } from "../entities/order-status.enum";

export class OrderStatusValidationPipe implements PipeTransform {

    readonly allowedStatus = [
        OrderStatus.DONE,
        OrderStatus.IN_PROGRESS,
    ];

    transform(value: any) {
        value = value.toUpperCase();
        if (! this.isStatusValid(value)){
            throw new BadRequestException(`${value} is an invalid staus`)
        }
        return value;
    }

    private isStatusValid(status: any): boolean {
        const indx= this.allowedStatus.indexOf(status);
        return indx !== -1;
    }
}