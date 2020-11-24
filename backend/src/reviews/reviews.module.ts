import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { CategoryModule } from 'src/category/category.module';
import { ReviewsController } from './reviews.controller';
import { Reviews } from './reviews.entity';
import { ReviewsService } from './reviews.service';

@Module({
  imports: [
    AuthModule,
    CategoryModule,
    TypeOrmModule.forFeature([Reviews]),
  ],
  controllers: [ReviewsController],
  providers: [ReviewsService]
})
export class ReviewsModule {}
