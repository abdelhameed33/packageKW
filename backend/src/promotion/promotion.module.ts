import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { CategoryModule } from 'src/category/category.module';
import { PromotionController } from './promotion.controller';
import { Promotion } from './promotion.entity';
import { PromotionService } from './promotion.service';

@Module({
  imports: [
    AuthModule,
    CategoryModule,
    TypeOrmModule.forFeature([Promotion]),
  ],
  controllers: [PromotionController],
  providers: [PromotionService],
  exports:[PromotionService]
})
export class PromotionModule {}
