import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthCredentialDto } from './dto/auth-credential.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { ResUserDto } from './dto/res-user.dto';
import { JwtPayload } from './jwt-payload.interface';
import { UserRole } from './user-role.enum';
import { User } from './user.entity';
import { UserRepository } from './user.repository';

@Injectable()
export class AuthService {


    constructor(
        @InjectRepository(UserRepository)
        private userRepository: UserRepository,
        private jwtService: JwtService) {

    }

    async signUp(createUserDto: CreateUserDto, userRole: UserRole): Promise<void> {
        return this.userRepository.signUp(createUserDto, userRole);
    }

    async getAllUser(): Promise<ResUserDto[]> {
        return this.userRepository.find({ role: UserRole.CLIENT }).then(res => {

            return res.map(obj => {
                console.log('------------------');
                console.log(obj);
                return new ResUserDto(obj);
            });

        });
    }

    async signIn(authCredentialDto: AuthCredentialDto): Promise<{ accessToken: string }> {
        const email = await this.userRepository.validateUserPassword(authCredentialDto);
        if (!email) {
            throw new UnauthorizedException();
        }
        //generating access token
        const payload: JwtPayload = { email };
        const accessToken = await this.jwtService.sign(payload);
        return { accessToken };
    }
}
