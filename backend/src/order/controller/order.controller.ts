import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Roles } from 'src/auth/decorator/roles.decorator';
import { RolesGuard } from 'src/auth/roles.guard';
import { UserRole } from 'src/auth/user-role.enum';
import { Order } from '../entities/order.entity';
import { OrderService } from '../service/order.service';

@Controller('orders')
export class OrderController {
    constructor(
        private orderService: OrderService,
    ) { }

    @Get()
    // @Roles(UserRole.ADMIN)
    // @UseGuards(AuthGuard(), RolesGuard)
    getCategories(): Promise<any[]> {
        console.log('Get all order');
        return this.orderService.getAllOrders();
    }

    @Get('/:id')
    @Roles('admin')
    @UseGuards(AuthGuard(), RolesGuard)
    getCategory(@Param('id', ParseIntPipe) id: number): Promise<Order> {
        return this.orderService.findOrderById(id);
    }
}
