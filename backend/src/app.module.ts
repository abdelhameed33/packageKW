import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import {typeOrmConfig} from './config/typeorm.config'
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { CategoryModule } from './category/category.module';
import { MulterModule } from '@nestjs/platform-express';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { ReviewsModule } from './reviews/reviews.module';
import { OrderModule } from './order/order.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    ConfigModule.forRoot(),
    ConfigModule.forRoot(),
    AuthModule,
    CategoryModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'uploads'),
    }),
    ReviewsModule,
    OrderModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
