import { Controller, Get, Param } from '@nestjs/common';
import { PostService } from './providers/post.service';

@Controller('post')
export class PostController {
    constructor(private readonly postService: PostService) {}

    @Get('/{:userId}')
    public getPost(@Param('userId') userId: string) {
        return this.postService.findAll(userId);
    }
}
