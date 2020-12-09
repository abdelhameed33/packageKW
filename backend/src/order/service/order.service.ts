import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRole } from 'src/auth/user-role.enum';
import { User } from 'src/auth/user.entity';
import { ProductService } from 'src/category/service/product.service';
import { PromotionService } from 'src/promotion/promotion.service';
import { CreateOrderProductDto } from '../dto/create-order-product.dto';
import { CreateOrderDto } from '../dto/create-order.dto';
import { OrderProduct } from '../entities/order-products.entity';
import { OrderStatus } from '../entities/order-status.enum';
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
        private promotionService: PromotionService
    ) { }

    async getAllOrders(user:User): Promise<Order[]> {
        if (user.role === UserRole.ADMIN)
        return await this.orderRepository.find();
        else
        return await user.orders;
    }

    async findOrderById(id, loadProducts?: boolean): Promise<Order> {
        const found=  await this.orderRepository.findOne({ id });
        if (!found) {
            throw new NotFoundException(`order with id ${id} not found`)
        }
        if (loadProducts){
            await found.orderProducts;
        }
        return found;
    }

    async createOrder(user:User, createOrderDto: CreateOrderProductDto[]):Promise<any>{
        //save order object
        const order = new Order()
        order.user=user;
        this.orderRepository.save(order);

        //save each product
        const orderProducts = createOrderDto
        let orderTotalPrice = 0;
        
        for (const orderProduct of orderProducts) {
            const product = await this.productService.getProduct(orderProduct.productId);
            //check if ther is active promotion
            const promotion = await this.promotionService.getActivePromotion(product.id);
            console.log(`active promo:${promotion?.id}`)
            const percent= promotion?promotion.percent:0;
            const totalPrice =(1.0-(percent/100.0))* product.price * orderProduct.quantity;
            console.log(`total price: ${totalPrice}`)
            orderTotalPrice += totalPrice;
            const newOrderProduct = new OrderProduct();
            newOrderProduct.product=product;
            newOrderProduct.order=order;
            newOrderProduct.customizedProperties= orderProduct.customizedProperties;
            newOrderProduct.quantity = orderProduct.quantity;
            const saved = await this.orderProductRepository.save(newOrderProduct);
        }
        order.total=orderTotalPrice;
        console.log(`order : ${order.id} , total price: ${orderTotalPrice}`)
        await this.orderRepository.save(order);
        return order;
    }


    async updateOrderStatus(id: number, status: OrderStatus): Promise<Order> {
        const order = await this.findOrderById(id, false);
        order.status = status;
        await this.orderRepository.save(order);
        return order;
    }
}
