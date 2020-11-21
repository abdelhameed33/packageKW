import { Body, Controller, Get, Post, UseGuards, ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { AuthCredentialDto } from './dto/auth-credential.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { GetUser } from './get-user.decerator';
import { User } from './user.entity';

@Controller('auth')
export class AuthController {

    constructor(
        private authService: AuthService,
        private configService: ConfigService){}

    @Post('/signup')
    signUp(@Body(ValidationPipe) createUserDto: CreateUserDto):Promise<void>{
        return this.authService.signUp(createUserDto);
    }

    @Post('/signin')
    signIn(@Body() authCredentialDto: AuthCredentialDto):Promise<{accessToken:string}>{
        return this.authService.signIn(authCredentialDto);
    }

    @Get('/hello')
    @UseGuards(AuthGuard())
    getHi(@GetUser()user:User){
        console.log(user)
        return 'hi';
    }
}
