import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from '../entities/category.entity';
import { CategoryRepository } from '../repository/category.repository';
import { CreateCategoryDto } from '../dto/create-category.dto';

@Injectable()
export class CategoryService {

    constructor(
        @InjectRepository(CategoryRepository)
        private categoryRepository: CategoryRepository) {
    }

    async getCategories(parentId?: string, type?: string): Promise<any[]> {
        if (parentId) {
            return await this.categoryRepository.getCategoriesWithCount(parentId);
        }
        if(type){
            return await this.categoryRepository.getCategoriesByType(type);
        }
        return await this.categoryRepository.getParentCategories(parentId);
    }

    async getCategory(id: number): Promise<Category> {
        const found = await this.categoryRepository.findOne({ id });
        if (!found) {
            throw new NotFoundException(`category with id ${id} not found`)
        }
        return found;
    }

    async createCategory(createCategoryDto: CreateCategoryDto): Promise<Category> {
        const { name, description, parentId } = createCategoryDto;
        const category = new Category()
        if (parentId) {
            const id = parseInt(parentId);
            const parent = await this.categoryRepository.findOne({ id });
            if (parent) {
                category.parentCategory = parent;
            }
        }
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

    async updateCategory(id: number, categoryDto: CreateCategoryDto): Promise<Category> {
        const category = await this.getCategory(id);
        console.log(categoryDto)
        const { name, description } = categoryDto;
        category.name = name;
        category.description = description;
        // add parent category Id
        if (categoryDto.parentId) {
            const id = parseInt(categoryDto.parentId);
            const parent = await this.categoryRepository.findOne({ id });
            if (parent) {
                category.parentCategory = parent;
            }
        }
        await this.categoryRepository.save(category);
        return category;
    }

}
