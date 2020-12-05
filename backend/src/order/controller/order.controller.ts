import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { CreateAddressDto } from 'src/address/dto/create-address.dto';
import { Roles } from 'src/auth/decorator/roles.decorator';
import { GetUser } from 'src/auth/get-user.decerator';
import { RolesGuard } from 'src/auth/roles.guard';
import { UserRole } from 'src/auth/user-role.enum';
import { User } from 'src/auth/user.entity';
import { CreateOrderDto } from '../dto/create-order.dto';
import { OrderStatus } from '../entities/order-status.enum';
import { Order } from '../entities/order.entity';
import { OrderStatusValidationPipe } from '../pipes/order-status-validation.pipe';
import { OrderService } from '../service/order.service';

@Controller('orders')
export class OrderController {
    constructor(
        private orderService: OrderService,
    ) { }

    @Post()
    @UseGuards(AuthGuard())
    createOrder(@GetUser()user:User,@Body() createOrderDto: CreateOrderDto): Promise<any> {
        console.log(createOrderDto)
        return this.orderService.createOrder(user, createOrderDto);
    }

    /**
     * 
     * @param user based on user role 
     * if admin we get all orders else we get only user orders
     */
    @Get()
    @UseGuards(AuthGuard())
    getAllOrders(@GetUser() user :User ): Promise<any[]> {
        console.log('Get all order');
        return this.orderService.getAllOrders(user);
    }

    @Get('/:id')
    @UseGuards(AuthGuard(), RolesGuard)
    getOrder(@Param('id', ParseIntPipe) id: number): Promise<Order> {
        return this.orderService.findOrderById(id, true);
    }

    @Patch("/:id")
    @Roles(UserRole.ADMIN)
    @UsePipes(ValidationPipe)
    @UseGuards(AuthGuard(), RolesGuard)
    updateOrderStatus(
        @Param('id', ParseIntPipe) id: number,
        @Body('status', OrderStatusValidationPipe) orderStatus: OrderStatus): Promise<Order>{
            return this.orderService.updateOrderStatus(id , orderStatus);

    }
}
