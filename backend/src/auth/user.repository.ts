import { EntityRepository, Repository } from "typeorm";
import * as bcrypt from 'bcrypt'
import { AuthCredentialDto } from "./dto/auth-credential.dto";
import { User } from "./user.entity";
import { ConflictException, InternalServerErrorException } from "@nestjs/common";

@EntityRepository(User)
export class UserRepository extends Repository<User>{
    

    async signUp(authCredentailDto: AuthCredentialDto): Promise<void>{
        const {username, password} = authCredentailDto;

        //make sure that both exist in database
        const user = new User()
        user.username= username;
        user.salt = await bcrypt.genSalt();
        user.password= await bcrypt.hash(password,user.salt);
        try{
             await user.save();
        }catch(error){
            if (error.code === 'ER_DUP_ENTRY'){
                throw new ConflictException('username already existes')
            }
            else{
                throw new InternalServerErrorException();
            }
        }
    }

    async validateUserPassword(authCredentialDto: AuthCredentialDto):Promise<string>{
        const {username, password}= authCredentialDto;

        //check that user exist
        const user =await this.findOne({username});
        console.log(`userfound`,user)
        if (user && await user.validatePassword(password)){
            return user.username;
        }else{
            return null;
        }


    }
}