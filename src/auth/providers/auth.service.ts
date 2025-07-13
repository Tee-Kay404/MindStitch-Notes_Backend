import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { UserService } from 'src/users/providers/users.service';

@Injectable()
export class AuthService {
    constructor(
        // Injecting User Service
        @Inject(forwardRef(()=> UserService))
        private readonly userService: UserService
    ) {}
    public login(email: string, password: string, id: string) {
        // check if the user exists
        const user = this.userService.findById('1234');
        // login
        // token
        return 'SAMPLE_TOKEN';
    }
    
    public isAuth() {
        return true;
    }
}
