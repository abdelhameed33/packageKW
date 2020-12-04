import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRole } from 'src/auth/user-role.enum';
import { User } from 'src/auth/user.entity';
import { ProductService } from 'src/category/service/product.service';
import { CreateOrderDto } from '../dto/create-order.dto';
import { OrderProduct } from '../entities/order-products.entity';
import { Order } from '../entities/order.entity';
import { OrderProductRepository } from '../repository/order-product.repository';
import { OrderRepository } from '../repository/order.repository';

@Injectable()
export class OrderService {

    constructor(
        @InjectRepository(OrderRepository)
        private orderRepository: OrderRepository,
        @InjectRepository(OrderProductRepository)
        private orderProductRepository: OrderProductRepository,
        private productService: ProductService,
    ) { }

    async getAllOrders(user:User): Promise<Order[]> {
        if (user.role === UserRole.ADMIN)
        return await this.orderRepository.find();
        else
        return await user.orders;
    }

    async findOrderById(id): Promise<Order> {
        const order=  await this.orderRepository.findOne({ id });
        await order.orderProducts;
        return order;
    }

    async createOrder(user:User, createOrderDto: CreateOrderDto):Promise<any>{
        //save order object
        const order = new Order()
        order.user=user;
        this.orderRepository.save(order);

        //save each product
        const {orderProducts} = createOrderDto
        
        for (const orderProduct of orderProducts) {
            console.log('orderp:')
            const product = await this.productService.getProduct(orderProduct.productId);
            const newOrderProduct = new OrderProduct();
            newOrderProduct.product=product;
            newOrderProduct.order=order;
            newOrderProduct.customizedProperties= orderProduct.customizedProperties;
            newOrderProduct.quantity = orderProduct.quantity;
            const saved = await this.orderProductRepository.save(newOrderProduct);
            console.log(saved);
        }

        return order;
    }
}
