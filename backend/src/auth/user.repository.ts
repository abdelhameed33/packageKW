import { EntityRepository, Repository } from "typeorm";
import * as bcrypt from 'bcrypt'
import { AuthCredentialDto } from "./dto/auth-credential.dto";
import { User } from "./user.entity";
import { ConflictException, InternalServerErrorException } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";

@EntityRepository(User)
export class UserRepository extends Repository<User>{
    

    async signUp(createUserDto: CreateUserDto): Promise<void>{
        const {fullname, email,phone, password} = createUserDto;

        //make sure that both exist in database
        const user = new User()
        user.email= email;
        user.phone=phone;
        user.fullname=fullname;
        user.salt = await bcrypt.genSalt();
        user.password= await bcrypt.hash(password,user.salt);
        try{
             await user.save();
        }catch(error){
            if (error.code === 'ER_DUP_ENTRY'){
                throw new ConflictException('email already existes')
            }
            else{
                throw new InternalServerErrorException();
            }
        }
    }

    async validateUserPassword(authCredentialDto: AuthCredentialDto):Promise<string>{
        const {email, password}= authCredentialDto;

        //check that user exist
        const user =await this.findOne({email});
        console.log(`userfound`,user)
        if (user && await user.validatePassword(password)){
            return user.email;
        }else{
            return null;
        }


    }
}