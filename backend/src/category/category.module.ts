import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { CategoryController } from './category.controller';
import { Category } from './category.entity';
import { CategoryRepository } from './category.repository';
import { CategoryService } from './category.service';

@Module({
  imports:[
    AuthModule,
    TypeOrmModule.forFeature([CategoryRepository,Category])],
  controllers: [CategoryController],
  providers: [CategoryService]
})
export class CategoryModule {}
