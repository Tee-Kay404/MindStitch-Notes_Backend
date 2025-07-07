import { Controller } from '@nestjs/common';
import { UserService } from 'src/users/providers/users.service';

@Controller('auth')
export class AuthController {
    constructor (private readOnly userService: UserService) {}
}
