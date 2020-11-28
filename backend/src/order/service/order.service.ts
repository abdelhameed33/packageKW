import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Order } from '../entities/order.entity';
import { OrderRepository } from '../repository/order.repository';

@Injectable()
export class OrderService {

    constructor(
        @InjectRepository(OrderRepository)
        private orderRepository: OrderRepository
    ) { }

    async getAllOrders(): Promise<Order[]> {
        return await this.orderRepository.find();
    }

    async findOrderById(id): Promise<Order> {
        return await this.orderRepository.findOne({ id });
    }
}
