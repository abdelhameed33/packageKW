import { EntityRepository, Repository } from "typeorm";
import { GetProductsFilterDto } from "../dto/get-products-filter.dto";
import { Product } from "../product.entity";

@EntityRepository(Product)
export class ProductRepository extends Repository<Product>{

    async getProducts(categoryId: number): Promise<Product[]> {
        const query = this.createQueryBuilder('product');
        query.andWhere('product.category_id = :categoryId', { categoryId })
        const products = await query.getMany();
        return products;
    }

    async getProductsWithFilter(filterDto: GetProductsFilterDto): Promise<{data:Product[],count:number}> {
        console.log(filterDto)
        const query = this.createQueryBuilder('product');
        
        if (filterDto?.categoryId) {
            query.andWhere('product.category_id = :categoryId', { categoryId: filterDto.categoryId })
        }
        if (filterDto?.search) {
            query.andWhere("product.title like :title", { title: `%${filterDto.search}%` })
        }
        query.take(filterDto?.limit ? filterDto.limit : 100).
        skip(filterDto?.offset ? filterDto.offset : 0);
        query.leftJoinAndSelect("product.images", "image")

        const products = await query.getManyAndCount();
        return {data:products[0], count: products[1]};
    }

    async findById(productId: number): Promise<any> {
        const query = this.createQueryBuilder('product')
            .addSelect('category.id', 'category_id')

        query.leftJoin('category', 'category', 'category.id = product.category_id')
        query.andWhere('product.id = :productId', { productId })
        const products = await query.getOne();
        return products;
    }


    async isExists(categoryId: number): Promise<Product> {
        const query = this.createQueryBuilder('product');
        query.andWhere('product.id = :categoryId', { categoryId })
        query.select('product.id')
        const product = await query.getOne();
        return product;
    }
}