import {
  BadRequestException,
  Body,
  Injectable,
  NotFoundException,
  RequestTimeoutException,
} from "@nestjs/common";
import { CreatePostDto } from "../dto/create-post.dto";
import { Post } from "../post.entity";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { MetaOption } from "src/meta-options/meta-options.entity";
import { UserService } from "src/users/providers/users.service";
import { Tag } from "src/tags/tags.entity";
import { TagsService } from "src/tags/providers/tags.service";
import { PatchPostsDto } from "../dto/patch-post.dto";
import { postStatus } from "../enums/postStatus.enum";
import { GetPostDto } from "../dto/get-post.dto";
import { PaginationProvider } from "src/common/pagination/provider/pagination-provider";
import { number } from "joi";
import { Paginated } from "src/common/pagination/interfaces/paginated-interface";

@Injectable()
export class PostService {
  constructor(
    /**
     * Injecting user service
     */
    private readonly usersService: UserService,

    /**
     * Injecting post repository
     */
    @InjectRepository(Post)
    private readonly postRepository: Repository<Post>,

    /**
     * Injecting the Tags service
     */
    private readonly tagsService: TagsService,

    /**
     * Injecting the metaOptions repository
     */
    @InjectRepository(MetaOption)
    private readonly metaOptionsRepository: Repository<MetaOption>,

    /**
     * Injecting the paginated provider
     */
    
    private readonly paginationProvider: PaginationProvider
  ) {}
  // Find All User
  public async findAll(postQuery: GetPostDto, userId: string): Promise<Paginated<Post>> {   
     let posts = await this.paginationProvider.paginateQuery({
        limit:  postQuery.limit,
        page: postQuery.page
      },
    this.postRepository);

    return posts;
  }

  // Create new Post
  public async create(@Body() createPostDto: CreatePostDto) {
    const { tags: tag, metaOptions, ...mainPostDto } = createPostDto;

    const author = await this.usersService.findById(createPostDto.authorId);

    let tags = createPostDto.tags
      ? await this.tagsService.findMultipleTags(createPostDto.tags)
      : [];

    // If author not found, throw error before using it
    if (!author) {
      throw new NotFoundException(
        `User with id ${createPostDto.authorId} not found`
      );
    }

    let metaOption: MetaOption | null = null;
    if (metaOptions) {
      metaOption = this.metaOptionsRepository.create(metaOptions);
      await this.metaOptionsRepository.save(metaOption);
    }

    const post = this.postRepository.create({
      ...mainPostDto,
      tags: tags,
      author, // Now TypeScript is happy
      ...(metaOption && { metaOptions: metaOption }),
    });

    return await this.postRepository.save(post);
  }

  // Delete Post
  public async deletePost(id: number) {
    // delete the post
    await this.postRepository.delete(id);
    // delete meta-options
    //    await this.metaOptionsRepository.delete(post!.metaOptions!.id);

    // let inversePost = await this.metaOptionsRepository.find({
    //     where: {id: post!.metaOptions!.id},
    //     relations: {
    //         post: true
    //     }
    //   })

    //   console.log(inversePost);

    return { delete: true, id };
  }

  public async updatePost(patchPostDto: PatchPostsDto) {
    // Find the tags
    let tags: Tag[] | null;
    try {
      tags = patchPostDto.tags
        ? await this.tagsService.findMultipleTags(patchPostDto.tags)
        : [];
    } catch (error) {
      throw new RequestTimeoutException(
        "Unable to process your request , please try again later",
        {
          description: "Error connecting to the database",
        }
      );
    }

    if (!tags || tags.length !== patchPostDto.tags?.length) {
      throw new BadRequestException("This post does not exist", {
        description: "Error connecting to the database",
      });
    }

    // Find the post
    let post: Post | null;
    try {
      post = await this.postRepository.findOneBy({
        id: patchPostDto.id,
      });
    } catch (error) {
      throw new RequestTimeoutException("This post does not exist", {
        description: "Error connecting to the database",
      });
    }

    if (!post) {
      throw new BadRequestException("The postID does not exist", {
        description: "Error connecting to the database",
      });
    }

    // Update the properties
    post!.title = patchPostDto.title ?? post!.title;
    post!.content = patchPostDto.content ?? post!.content;
    post!.postStatus = patchPostDto.status ?? post!.postStatus;
    post!.category = patchPostDto.postType ?? post!.category;
    post!.slug = patchPostDto.slug ?? post!.slug;
    post!.featuredImageUrl =
      patchPostDto.featuredImageUrl ?? post!.featuredImageUrl;
    post!.publishOn = patchPostDto.publishOn ?? post!.publishOn;

    // assign a new tags
    post!.tags = tags;

    // save the post and return

    try {
      await this.postRepository.save(post!);
    } catch (error) {
      throw new BadRequestException(
        "Unable to process youur request , pls try again later"
      );
    }
    return post;
  }
}
