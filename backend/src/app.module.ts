import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import {typeOrmConfig} from './config/typeorm.config'
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { CategoryModule } from './category/category.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    ConfigModule.forRoot(),
    ConfigModule.forRoot(),
    AuthModule,
    CategoryModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
