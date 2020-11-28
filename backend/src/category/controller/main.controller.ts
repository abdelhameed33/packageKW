import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Category } from '../entities/category.entity';
import { CategoryService } from '../service/category.service';
import { CreateCategoryDto } from '../dto/create-category.dto';
import { Roles } from 'src/auth/decorator/roles.decorator';
import { RolesGuard } from 'src/auth/roles.guard';
import { ProductService } from '../service/product.service';
import { AuthService } from 'src/auth/auth.service';
import { OrderService } from 'src/order/service/order.service';

@Controller('main')
export class MainController {
    constructor(
        private categoryService: CategoryService,
        private productService: ProductService,
    ) { }

    @Get('/analytics')
    // @Roles('admin')
    // @UseGuards(AuthGuard(), RolesGuard)
    getCategories(): any {
        console.log('get analytics data');
        const products = this.productService.getAllProducts().then(res => {
            return res.length;
        });
        const categories = this.categoryService.getCategories().then(res => {
            return res.length;
        });

        return {
            products,
            categories
        };
    }

}
