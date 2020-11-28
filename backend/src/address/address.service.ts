import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/auth/user.entity';
import { Repository } from 'typeorm';
import { Address } from './address.entity';
import { CreateAddressDto } from './dto/create-address.dto';

@Injectable()
export class AddressService {
    constructor(
        @InjectRepository(Address)
        private addressRepository: Repository<Address>
    ){}

    async addAddress(user: User, createAddressDto: CreateAddressDto):Promise<Address>{
        console.log(createAddressDto)
        const {address1,address2,city,state,postalCode}=createAddressDto;
        const address = new Address()
        address.address1=address1;
        address.address2=address2;
        address.city=city;
        address.state=state;
        address.postalCode=postalCode;
        address.user=user;
        return await this.addressRepository.save(address);
    }

    async getUserAddresses(user: User):Promise<Address[]>{
        return await this.addressRepository.find({user});
    }

    async deleteAddress(user: User ,id: number){
        const found = await this.addressRepository.findOne({id:id, user});
        if (!found)
        throw new NotFoundException(`address with id ${id} not found`)
        
        return this.addressRepository.delete({id});
    }
}
