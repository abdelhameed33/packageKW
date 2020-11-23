import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { ProductService } from 'src/category/service/product.service';
import { CategoryController } from './controller/category.controller';
import { ProductController } from './controller/product.controller';
import { Category } from './entities/category.entity';
import { Image } from './entities/image.entity';
import { Product } from './entities/Product.entity';
import { CategoryRepository } from './repository/category.repository';
import { ProductRepository } from './repository/Product.repository';
import { CategoryService } from './service/category.service';
import { ImageService } from './service/image.service';

@Module({
  imports:[
    AuthModule,
    TypeOrmModule.forFeature([Category,Product,Image]),
    MulterModule.register({
      dest: './uploads',
    })
  ],
  controllers: [CategoryController,ProductController],
  providers: [CategoryService,ProductService,ImageService],
  exports:[ProductService]
})
export class CategoryModule {}
