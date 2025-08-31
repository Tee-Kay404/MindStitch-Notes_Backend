import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { UserService } from 'src/users/providers/users.service';
import { SignInDto } from '../dtos/sign-in.dto';
import { SignInProvider } from './sign-in.provider';

@Injectable()
export class AuthService {
    constructor(
        /**
         * Injecting User Service
         */ 
         @Inject(forwardRef(()=> UserService))
        private readonly userService: UserService,
        /**
         * Injecting SignInProvider
         */ 
         @Inject(forwardRef(()=> SignInProvider))
        private readonly signInProvider: SignInProvider
    ) {}
    public async login(signInDto: SignInDto) {
    /*  Find the user using email ID
        Throw exception if the user is not found
        Compare password to the hash
        Send Confirmation
    */
      return await this.signInProvider.SignInUser(signInDto)
    }
    
    public isAuth() {
        return true;
    }
}
