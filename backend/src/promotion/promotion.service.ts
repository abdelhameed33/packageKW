import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductService } from 'src/category/service/product.service';
import { Repository } from 'typeorm';
import { CreatePromotionDto } from './dto/create-promotion.dto';
import { Promotion } from './promotion.entity';

@Injectable()
export class PromotionService {

    constructor(
        @InjectRepository(Promotion)
        private promotionRepository: Repository<Promotion>,
        private productService: ProductService
    ){}

    async createPromotion(createPromotionDto: CreatePromotionDto):Promise<Promotion>{
        console.log(createPromotionDto)
        const {percent, start_date, end_date, productId} = createPromotionDto;
        const promotion = new Promotion();
        promotion.product =<any>(await this.productService.isExists(productId));
        promotion.percent= percent;
        promotion.start_date= start_date;
        promotion.end_date=end_date;
    
        return this.promotionRepository.save(promotion)
    }

    async getPromotions(productId?: number):Promise<Promotion[]>{
        if (productId)
        return await this.promotionRepository.find({product: <any>productId});

        return await this.promotionRepository.find();
    }

    async deletePromotion(id: number):Promise<void>{
       const deleted = await this.promotionRepository.delete(id);
       if (!deleted.affected){
           throw new NotFoundException(`promotion with id ${id} not found`)
       }
       return ;
    }
}
