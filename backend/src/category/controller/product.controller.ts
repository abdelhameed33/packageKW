import { Body, Controller, Delete, Get, Logger, Param, ParseIntPipe, Patch, Post, Query, UploadedFile, UploadedFiles, UseGuards, UseInterceptors, UsePipes, ValidationPipe } from '@nestjs/common';
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
import { GetProductsFilterDto } from '../dto/get-products-filter.dto';

@Controller('products')
export class ProductController {


    constructor(
        private productService: ProductService
    ) { }


    @Get('/:id')
    getProductById(@Param('id', ParseIntPipe) id: number): Promise<any> {
        return this.productService.getProduct(id);
    }


    @Delete('/:id')
    @Roles(UserRole.ADMIN)
    @UseGuards(AuthGuard(), RolesGuard)
    deleteProduct(@Param('id', ParseIntPipe) id: number) {
        return this.productService.deleteProduct(id);
    }

    
    // @Get()
    // getProducts(){
    //     return this.productService.getAllProducts();
    // }
   
    @Get()
    getProducts(@Query() filterDto: GetProductsFilterDto):Promise<{data:Product[],count:number}>{
        return this.productService.getProductsWithFilter(filterDto);
    }
    // @Patch('/:id')
    // updateProduct(
    //     @Param('id', ParseIntPipe) id: number,
    //     @Body() productDto: CreateProductDto): Promise<Product> {
    //     return this.productService.updateProduct(id, productDto);
    // }
}
