import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from './category.entity';
import { CategoryRepository } from './category.repository';
import { CreateCategoryDto } from './dto/create-category.dto';

@Injectable()
export class CategoryService {

    constructor(
        @InjectRepository(CategoryRepository)
        private categoryRepository: CategoryRepository) {
    }

    async getCategories():Promise<Category[]>{
        return await this.categoryRepository.find();
    }

    async getCategory(id: number):Promise<Category>{
        const found = await this.categoryRepository.findOne({id});
        if (!found) {
            throw new NotFoundException(`category with id ${id} not found`)
        }
        return found;
    }

    async createCategory(createCategoryDto: CreateCategoryDto): Promise<Category> {
        const { name, description } = createCategoryDto;
        const category = new Category()
        category.name = name;
        category.description = description;
        await this.categoryRepository.save(category);
        return category;
    }

    async deleteCategory(id: number) {
        const result = await this.categoryRepository.delete(id);
        if (result.affected === 0) {
            throw new NotFoundException(`category with id ${id} not found`)
        }
    }

    async updateCategory(id: number, categoryDto: CreateCategoryDto):Promise<Category>{
        const category =await this.getCategory(id);
        console.log(categoryDto)
        const {name , description} = categoryDto;
        category.name=name;
        category.description=description;
        await this.categoryRepository.save(category);
        return category;
    }
    
}
