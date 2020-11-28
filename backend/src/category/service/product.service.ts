import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateProductDto } from '../dto/create-product.dto';
import { Product } from '../product.entity';
import { ProductRepository } from '../repository/product.repository';
import { CategoryService } from './category.service';
import { ImageService } from './image.service';


@Injectable()
export class ProductService {

    constructor(
        @InjectRepository(ProductRepository)
        private productRepository: ProductRepository,
        private categoryService: CategoryService,
        private imageService: ImageService) {
    }

    async getProducts(categoyID: number): Promise<Product[]> {
        // const category =  await this.categoryService.getCategory(categoyID);
        return await this.productRepository.find({ where: { 'category': categoyID } });
        // return category.products;
    }

    async getProduct(id: number): Promise<Product> {
        const found = await this.productRepository.findOne({ id });
        if (!found) {
            throw new NotFoundException(`Product with id ${id} not found`)
        }
        return found;
    }

    async createProduct(categoryId: number, createProductDto: CreateProductDto): Promise<Product> {
        const { title, price, quantity, description,images, properties} = createProductDto;
        const product = new Product()
        product.properties= properties;
        product.title = title;
        product.price =price;
        product.quantity = quantity;
        product.description = description;
        const category = await this.categoryService.getCategory(categoryId);
        product.category = category;
        const savedProduct = await this.productRepository.save(product);
        await this.imageService.saveAll(images,savedProduct);
        return savedProduct;
    }

    async deleteProduct(id: number) {
        const result = await this.productRepository.delete(id);
        if (result.affected === 0) {
            throw new NotFoundException(`Product with id ${id} not found`)
        }
    }
    async isExists(id: number):Promise<Product>{
        const exist = await this.productRepository.isExists(id);
        return exist;
    }

    // async updateProduct(id: number, ProductDto: CreateProductDto):Promise<Product>{
    //     const Product =await this.getProduct(id);
    //     console.log(ProductDto)
    //     const {name , description} = ProductDto;
    //     Product.name=name;
    //     Product.description=description;
    //     await this.productRepository.save(Product);
    //     return Product;
    // }

    private saveImages(imagePaths:string[]){

    }
}
