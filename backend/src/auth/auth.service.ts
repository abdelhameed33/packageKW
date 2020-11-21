import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthCredentialDto } from './dto/auth-credential.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { JwtPayload } from './jwt-payload.interface';
import { UserRepository } from './user.repository';

@Injectable()
export class AuthService {


    constructor(
        @InjectRepository(UserRepository)
        private userRepository: UserRepository,
        private jwtService: JwtService){

        }

    async signUp(createUserDto: CreateUserDto):Promise<void>{
        return this.userRepository.signUp(createUserDto);
    }

    async signIn(authCredentialDto: AuthCredentialDto):Promise<{accessToken:string}>{
        const email = await this.userRepository.validateUserPassword(authCredentialDto);
        if (!email){
            throw new UnauthorizedException();
        }
        //generating access token
        const payload:JwtPayload= {email};
        const accessToken = await this.jwtService.sign(payload);
        return {accessToken};
    }
}
