import { Body, Injectable } from '@nestjs/common';
import { UserService } from 'src/users/providers/users.service';
import { CreatePostDto } from '../dto/create-post.dto';
import { Post } from '../post.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { MetaOption } from 'src/meta-options/meta-options.entity';

@Injectable()
export class PostService {
    /**
     * Injecting user service
     */
    constructor(
        private readonly usersService: UserService,

        /**
         * Injecting post repository
         */
        @InjectRepository(Post)
        private readonly postRepository: Repository<Post>,
        /**
         * Injecting the metaOptions repository
         */
        @InjectRepository(MetaOption)
        public readonly metaOptionsRepository: Repository<MetaOption>

    ) {}
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

    // Create new Post 
    public async create(@Body() createPostDto: CreatePostDto) {
        let metaOption: MetaOption | null = null;
        const { metaOptions, ...mainPostDto } = createPostDto

        if (metaOptions) {
            metaOption = this.metaOptionsRepository.create(metaOptions)
            await this.metaOptionsRepository.save(metaOption)
        }

         let post = this.postRepository.create({
            ...mainPostDto,
            ...(metaOption && ({
                metaOptions: metaOption
            }))

         })
        // Add metaOptions to the post
         if(metaOption) {
            post.metaOptions = metaOption;
         }

        // return the post to the user
        return await this.postRepository.save(post)



        //  create metaOptions
        //  let metaOption = createPostDto.metaOptions? this.metaOptionsRepository.create(createPostDto.metaOptions) : null

        //  if(metaOption) {
        //     await this.metaOptionsRepository.save(metaOption);
        //  }
        // //  let ok = createPostDto.metaOptions
        // // create post
        // let post = this.postRepository.create(createPostDto);

        // Add metaOptions to the post


        // return the post to the user
    }
}
