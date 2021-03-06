import { Body, Controller, Delete, Get, Logger, Param, ParseIntPipe, Patch, Post, Query, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Category } from '../entities/category.entity';
import { CategoryService } from '../service/category.service';
import { CreateCategoryDto } from '../dto/create-category.dto';
import { Roles } from 'src/auth/decorator/roles.decorator';
import { RolesGuard } from 'src/auth/roles.guard';
import { ProductService } from '../service/product.service';
import { UserRole } from 'src/auth/user-role.enum';
import { Product } from '../product.entity';
import { ProductValidationPipe } from '../pipes/product-create-validation.pipe';
import { CreateProductDto } from '../dto/create-product.dto';

@Controller('categories')
export class CategoryController {
    constructor(
        private categoryService: CategoryService,
        private productService: ProductService,
    ) { }

    @Get()
    getCategories(@Query('parentid') parentId: string,@Query('type') type: string,): Promise<any[]> {
        console.log('Get all categories');
        return this.categoryService.getCategories(parentId,type);
    }

    @Get('/:id')
    getCategory(@Param('id', ParseIntPipe) id: number): Promise<Category> {
        return this.categoryService.getCategory(id);
    }


    @Post()
    @Roles(UserRole.ADMIN)
    @UseGuards(AuthGuard(), RolesGuard)
    @UsePipes(ValidationPipe)
    createCategory(@Body() createCategoryDto: CreateCategoryDto): Promise<Category> {
        console.log(createCategoryDto)
        return this.categoryService.createCategory(createCategoryDto);
    }

    @Delete('/:id')
    @Roles(UserRole.ADMIN)
    @UseGuards(AuthGuard(), RolesGuard)
    deleteCategory(@Param('id', ParseIntPipe) id: number) {
        return this.categoryService.deleteCategory(id);
    }

    @Patch('/:id')
    @Roles(UserRole.ADMIN)
    @UseGuards(AuthGuard(), RolesGuard)
    updateCategory(
        @Param('id', ParseIntPipe) id: number,
        @Body() categoryDto: CreateCategoryDto): Promise<Category> {
        Logger.log(`update cstegory with ${id}`)
        Logger.log(categoryDto);
        return this.categoryService.updateCategory(id, categoryDto);
    }

   
    @Get('/:categoryId/products')
    getProducts( @Param('categoryId', ParseIntPipe) categoryId: number){
        console.log('called')
        return this.productService.getCategoryProducts(categoryId);
    }

    
    @Post('/:categoryId/products')
    @Roles(UserRole.ADMIN)
    @UseGuards(AuthGuard(), RolesGuard)
    @UsePipes(new ValidationPipe({ transform: true }))
    createProduct(
        @Param('categoryId', ParseIntPipe) categoryId: number,
        @Body(ProductValidationPipe) createProductDto: CreateProductDto): Promise<Product> {
        Logger.log(createProductDto);
        return this.productService.createOrUpdateProduct(categoryId, createProductDto);
    }

    @Get('/analytics/data')
    @Roles(UserRole.ADMIN)
    @UseGuards(AuthGuard(), RolesGuard)
    async getAnalytics(): Promise<any> {
        console.log('get analytics data');
        const products = await this.productService.getAllProducts().then(res => {
            return res.length;
        });
        const categories = await this.categoryService.getCategories().then(res => {
            return res.length;
        });

        return {
            products,
            categories
        };
    }
}
