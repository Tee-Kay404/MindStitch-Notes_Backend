import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { PostService } from './providers/post.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreatePostDto } from './dto/create-post.dto';
import { PatchPostsDto } from './dto/patch-post.dto';

@Controller('post')
@ApiTags('Post')
export class PostController {
    constructor(private readonly postService: PostService) {}

    @Get('default')
    public getPost(@Param('default') initial: string) {
        return this.postService.findAll(initial);
    }

    @ApiOperation({
        summary: 'Creates a blog Post',
    })
    @ApiResponse({
        status: 201,
        description: 'You get a response if your post is created successfully'
    })
    @Post()
    public createPost(@Body() createPost: CreatePostDto) {
        return this.postService.create(createPost)
    }

      @ApiOperation({
        summary: 'Updates an existing blog Post',
    })
    @ApiResponse({
        status: 200,
        description: 'You get a 200 response if your post is updated successfully'
    })
    @Patch()
    public updatePost(@Body() patchPostsDto: PatchPostsDto) {
       console.log(patchPostsDto)
    }
}


/*
Structure of request body to create a new post
*****
* title: String
* postType: enum(post, page, story, series)
* slug: String
* status: enum(dradt, scheduled, reviewed,)
* content?: string
* schema? : string
* featuredImageUrl : string
* publishOnDate: string
* tags: string[]
* keyOptions: [{key: value}]
*/