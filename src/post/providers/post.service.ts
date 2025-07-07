import { Injectable } from '@nestjs/common';
import { UserService } from 'src/users/providers/users.service';

@Injectable()
export class PostService {
    constructor(private readonly usersService: UserService) {}
    public findAll(userId: string) {
        const user = this.usersService.findById(userId)
                console.log(userId);

               return [
                {
                    user: user,
                    title: 'Type',
                    content: 'content'
                },
                {  
                    user: user,
                    title: 'Type 1',
                    content: 'content 2'
                },
               ]
    }
}
