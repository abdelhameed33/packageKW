import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Category } from '../entities/category.entity';
import { CategoryService } from '../service/category.service';
import { CreateCategoryDto } from '../dto/create-category.dto';

@Controller('category')
export class CategoryController {
    constructor(
        private categoryService: CategoryService
    ) { }

    @Get()
    getCategories(): Promise<any[]> {
        return this.categoryService.getCategories().then(res => {
            // res[0].
            return res.map(category => ({
                id: category.id,
                name: category.name,
                description: category.description,
                productCount: category.products?.length
            }));
        });
    }

    @Get('/:id')
    getCategory(@Param('id', ParseIntPipe) id: number): Promise<Category> {
        return this.categoryService.getCategory(id);
    }


    @Post()
    // @UseGuards(AuthGuard())
    @UsePipes(ValidationPipe)
    createCategory(@Body() createCategoryDto: CreateCategoryDto): Promise<Category> {
        console.log(createCategoryDto)
        return this.categoryService.createCategory(createCategoryDto);
    }

    @Delete('/:id')
    @UseGuards(AuthGuard())
    deleteCategory(@Param('id', ParseIntPipe) id: number) {
        return this.categoryService.deleteCategory(id);
    }

    @Patch('/:id')
    // @UseGuards(AuthGuard())
    updateCategory(
        @Param('id', ParseIntPipe) id: number,
        @Body() categoryDto: CreateCategoryDto): Promise<Category> {
        return this.categoryService.updateCategory(id, categoryDto);
    }
}
