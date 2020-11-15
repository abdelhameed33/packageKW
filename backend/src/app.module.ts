import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import {typeOrmConfig} from './config/typeorm.config'
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    ConfigModule.forRoot(),
    ConfigModule.forRoot(),
    AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
