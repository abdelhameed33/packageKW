import { Module } from '@nestjs/common';
import { AddressService } from './address.service';
import { AddressController } from './address.controller';
import { AuthModule } from 'src/auth/auth.module';
import { Address } from './address.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[
    AuthModule,
    TypeOrmModule.forFeature([Address]),
  ],
  providers: [AddressService],
  controllers: [AddressController]
})
export class AddressModule {}
