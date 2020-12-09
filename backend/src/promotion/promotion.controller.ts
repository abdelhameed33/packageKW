import { Body, Controller, Delete, Get, Param, Post, Query, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Roles } from 'src/auth/decorator/roles.decorator';
import { RolesGuard } from 'src/auth/roles.guard';
import { UserRole } from 'src/auth/user-role.enum';
import { CreateProductDto } from 'src/category/dto/create-product.dto';
import { CreatePromotionDto } from './dto/create-promotion.dto';
import { Promotion } from './promotion.entity';
import { PromotionService } from './promotion.service';

@Controller('promotions')
export class PromotionController {

    constructor(
        private promotionService: PromotionService
    ){}

    @Post()
    @Roles(UserRole.ADMIN)
    @UseGuards(AuthGuard(), RolesGuard)
    async createPromotion(@Body() createPromotionDto: CreatePromotionDto):Promise<Promotion>{
        return this.promotionService.createPromotion(createPromotionDto);
    }

    @Get()
    async getPromotions(@Query('productId') productId: number ):Promise<Promotion[]>{
        return this.promotionService.getPromotions(productId);
    }

    @Delete('/:id')
    @Roles(UserRole.ADMIN)
    @UseGuards(AuthGuard(), RolesGuard)
    async deletePromotion(@Param('id') id: number ):Promise<void>{
        return this.promotionService.deletePromotion(id);
    }

    // @Delete('/:id')
    // @Roles(UserRole.ADMIN)
    // @UseGuards(AuthGuard(), RolesGuard)
    // async updatePromotion(@Param('id') id: number ):Promise<void>{
    //     return this.promotionService.deletePromotion(id);
    // }

}

