import { Module } from '@nestjs/common';
import { OrderController } from './controller/order.controller';
import { Order } from './entities/order.entity';
import { OrderRepository } from './repository/order.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderService } from './service/order.service';
import { AuthModule } from 'src/auth/auth.module';
import { CategoryModule } from 'src/category/category.module';
import { OrderProductRepository } from './repository/order-product.repository';
import { OrderProduct } from './entities/order-products.entity';
import { PromotionService } from 'src/promotion/promotion.service';
import { PromotionModule } from 'src/promotion/promotion.module';

@Module({
    imports: [
        AuthModule,
        PromotionModule,
        CategoryModule,
        TypeOrmModule.forFeature([Order,OrderProduct,OrderProductRepository ,OrderRepository]),
    ],
    providers: [OrderService],
    exports: [OrderService],
    controllers: [OrderController]
})
export class OrderModule { }
