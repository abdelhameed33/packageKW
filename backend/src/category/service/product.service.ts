import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Like } from 'typeorm';
import { CreateProductDto } from '../dto/create-product.dto';
import { GetProductsFilterDto } from '../dto/get-products-filter.dto';
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

    async getProductsWithFilter(filterDto:GetProductsFilterDto): Promise<{data:Product[],count:number}> {
        // const category =  await this.categoryService.getCategory(categoyID);
        return await this.productRepository.getProductsWithFilter(filterDto);
        // return category.products;
    }

    async getAllProducts(query?): Promise<any> {
        const take = query?.take || 20
        const skip = query?.skip || 0
        const keyword = query?.keyword || ''
        const [result, total] = await this.productRepository.findAndCount(
            {
                where:{title:Like('%' + keyword + '%') },
                take: take,
                skip: skip,
                order: { created_at: "DESC" }

            }
        );
    
        return {
            data: result,
            count: total
        }
    }


    async getCategoryProducts(categoyID: number, query?): Promise<any> {
        const take = query?.take || 20
        const skip = query?.skip || 0
        const keyword = query?.keyword || ''
        const [result, total] = await this.productRepository.findAndCount(
            {
                where:{'category': categoyID,title:Like('%' + keyword + '%') },
                take: take,
                skip: skip,
                order: { created_at: "DESC" }

            }
        );
    
        return {
            data: result,
            count: total
        }
    }
    
    async getProduct(id: number): Promise<Product> {
        const found = await this.productRepository.findOne({ id });
        if (!found) {
            throw new NotFoundException(`Product with id ${id} not found`)
        }
        return found;
    }

    async createOrUpdateProduct(categoryId: number, createProductDto: CreateProductDto): Promise<Product> {
        const { title, price, quantity, description, images, properties } = createProductDto;
        let product = new Product()
        if (createProductDto?.id) {
            console.log('id exist');
            const found = await this.productRepository.findById(createProductDto.id);
            if (found) {
                product = found;
            }
        }
        product.properties = properties;
        product.title = title;
        product.price = price;
        product.quantity = quantity;
        product.description = description;
        const category = await this.categoryService.getCategory(categoryId);
        product.category = category;
        const savedProduct = await this.productRepository.save(product);
        await this.imageService.saveAll(images, savedProduct);
        return savedProduct;
    }

    async deleteProduct(id: number) {
        const result = await this.productRepository.delete(id);
        if (result.affected === 0) {
            throw new NotFoundException(`Product with id ${id} not found`)
        }
    }
    async isExists(id: number): Promise<Product> {
        const exist = await this.productRepository.isExists(id);
        if (!exist)
            throw new NotFoundException(`product with id:${id} not found`)
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

    private saveImages(imagePaths: string[]) {

    }
}
