import { Body, Controller, Delete, Get, Logger, Param, ParseIntPipe, Patch, Post, UploadedFile, UploadedFiles, UseGuards, UseInterceptors, UsePipes, ValidationPipe } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Product } from '../product.entity';
import { ProductService } from '../service/product.service';
import { CreateProductDto } from '../dto/create-product.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer'
import { Observable, of } from 'rxjs';
import { ProductValidationPipe } from '../pipes/product-create-validation.pipe';
import { RolesGuard } from 'src/auth/roles.guard';
import { Roles } from 'src/auth/decorator/roles.decorator';
import { UserRole } from 'src/auth/user-role.enum';

@Controller('api/products')
export class ProductController {


    constructor(
        private productService: ProductService
    ) { }


    @Get('/:id')
    getProductById(@Param('id', ParseIntPipe) id: number): Promise<any> {
        return this.productService.getProduct(id);
    }

    @Get('/:categoryId/category')
    getProduct(
        @Param('categoryId', ParseIntPipe) categoryId: number): Promise<Product[]> {
        return this.productService.getProducts(categoryId);
    }



    @Post('/:categoryId')
    @Roles(UserRole.ADMIN)
    @UseGuards(AuthGuard(), RolesGuard)
    @UsePipes(new ValidationPipe({ transform: true }))
    createProduct(
        @Param('categoryId', ParseIntPipe) categoryId: number,
        @Body(ProductValidationPipe) createProductDto: CreateProductDto): Promise<Product> {
        Logger.log(createProductDto);
        return this.productService.createOrUpdateProduct(categoryId, createProductDto);
    }

    @Delete('/:id')
    @Roles(UserRole.ADMIN)
    @UseGuards(AuthGuard(), RolesGuard)
    deleteProduct(@Param('id', ParseIntPipe) id: number) {
        return this.productService.deleteProduct(id);
    }

    // @Patch('/:id')
    // updateProduct(
    //     @Param('id', ParseIntPipe) id: number,
    //     @Body() productDto: CreateProductDto): Promise<Product> {
    //     return this.productService.updateProduct(id, productDto);
    // }
}
