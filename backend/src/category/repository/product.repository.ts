import { EntityRepository, Repository } from "typeorm";
import { Product } from "../entities/Product.entity";

@EntityRepository(Product)
export class ProductRepository extends Repository<Product>{

    async getProducts(categoryId: number):Promise<Product[]>{
        const query = this.createQueryBuilder('product');
        query.andWhere('product.category_id = :categoryId', {categoryId})
        const products = await query.getMany();
        return products;
    }
}