import { Body, Controller, Delete, Get, Param, Post, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { userInfo } from 'os';
import { GetUser } from 'src/auth/get-user.decerator';
import { User } from 'src/auth/user.entity';
import { AddressService } from './address.service';
import { CreateAddressDto } from './dto/create-address.dto';

@Controller('address')
@UseGuards(AuthGuard())
export class AddressController {

    constructor(
        private addressService: AddressService
    ){}

    @Post()
    @UsePipes(ValidationPipe)
    async addAddress(@GetUser() user:User, @Body() createAddressDto: CreateAddressDto){
        return this.addressService.addAddress(user, createAddressDto);
    }

    @Get()
    async address(@GetUser() user){
        return this.addressService.getUserAddresses(user);
    }

    @Delete('/:id')
    async deleteAddress(@GetUser() user, @Param('id') id: number){
        return this.addressService.deleteAddress(user,id);
    }
}
