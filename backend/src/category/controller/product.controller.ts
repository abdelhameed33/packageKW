import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, UploadedFile, UploadedFiles, UseGuards, UseInterceptors, UsePipes, ValidationPipe } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Product } from '../entities/product.entity';
import { ProductService } from '../service/product.service';
import { CreateProductDto } from '../dto/create-product.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer'
import { Observable, of } from 'rxjs';
import { ProductValidationPipe } from '../pipes/product-create-validation.pipe';
const path = require('path')
export const storage = {
    storage: diskStorage({
        destination: './uploads',
        filename: (req, file, cb) => {
            const filename: string = path.parse(file.originalname).name.replace(/\s/g, '') + Date.now();
            const extension: string = path.parse(file.originalname).ext;
            cb(null, `${filename}${extension}`)
        }
    })
}

@Controller('category')
export class ProductController {


    constructor(
        private productService: ProductService
    ) { }

    @Get('/:id/products')
    getCategoryProdcuts(@Param('id', ParseIntPipe) id: number): Promise<Product[]> {
        console.log('here')
        return this.productService.getProducts(id);
    }


    @Post('/upload')
    @UseGuards(AuthGuard())
    @UseInterceptors(FileInterceptor('file', storage))
    uploadFile(@UploadedFile() file): Observable<Object> {
        return of({ imagePath: file.filename });
    }

    @Post('/:categoryId/products')
    @UseGuards(AuthGuard())
    @UsePipes(new ValidationPipe({ transform: true }))
    createProduct(
        @Param('categoryId', ParseIntPipe) categoryId: number,
        @Body(ProductValidationPipe) createProductDto: CreateProductDto): Promise<Product> {
        return this.productService.createProduct(categoryId, createProductDto);
    }

    @Delete('/:id')
    @UseGuards(AuthGuard())
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
