import { EntityRepository, Repository } from "typeorm";
import { Category } from "../entities/category.entity";

@EntityRepository(Category)
export class CategoryRepository extends Repository<Category>{
    // 
    async getCategoriesWithCount(): Promise<any[]> {
        const query = this.createQueryBuilder('category');
        query.addSelect('Count(product.id)', 'productCount')
            .addSelect('category.id', 'id')
            .addSelect('category.name', 'name')
            .addSelect('category.description', 'description')
        query.leftJoin('product', 'product', 'category.id = product.category_id')
            .groupBy('category.id')
        const categories = await query.getRawMany();
        return categories;
    }
}