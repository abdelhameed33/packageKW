import { EntityRepository, Repository } from "typeorm";
import { Product } from "../product.entity";

@EntityRepository(Product)
export class ProductRepository extends Repository<Product>{

    async getProducts(categoryId: number): Promise<Product[]> {
        const query = this.createQueryBuilder('product');
        query.andWhere('product.category_id = :categoryId', { categoryId })
        const products = await query.getMany();
        return products;
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