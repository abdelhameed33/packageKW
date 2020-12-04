import { EntityRepository, Repository } from "typeorm";
import { Category } from "../entities/category.entity";

@EntityRepository(Category)
export class CategoryRepository extends Repository<Category>{
    // 
    async getCategoriesWithCount(parentId:string): Promise<any[]> {
        const parent = parentId?parseInt(parentId):null;
        const query = this.createQueryBuilder('category');     
        query.addSelect('Count(product.id)', 'productCount')
            .addSelect('category.id', 'id')
            .addSelect('category.name', 'name')
            .addSelect('category.description', 'description')
            .addSelect('category.parent_category_id', 'parentId');
            if (parent){
                query.andWhere('category.parent_category_id = :parent', { parent });
            }else{
                query.andWhere('category.parent_category_id is null');
            }
        query.leftJoin('product', 'product', 'category.id = product.category_id')
            .groupBy('category.id')

        const categories = await query.getRawMany();
        return categories;
    }
}