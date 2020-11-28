import { Module } from '@nestjs/common';
import { OrderController } from './controller/order.controller';
import { Order } from './entities/order.entity';
import { OrderRepository } from './repository/order.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderService } from './service/order.service';
import { AuthModule } from 'src/auth/auth.module';

@Module({
    imports: [
        AuthModule,
        TypeOrmModule.forFeature([Order, OrderRepository]),
    ],
    providers: [OrderService],
    exports: [OrderService],
    controllers: [OrderController]
})
export class OrderModule { }
