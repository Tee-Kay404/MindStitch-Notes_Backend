import { IsArray, IsEnum, IsInt, IsISO8601, IsJSON, IsNotEmpty, IsNumber, IsOptional, IsString, IsUrl, isURL, Matches, MaxLength, MinLength, ValidateNested } from "class-validator";
import { PostType } from "../enums/postType.enum";
import { postStatus } from "../enums/postStatus.enum";
import CreatePostMetaOptionsDto from "../../meta-options/dtos/create-post-meta-options.dto";
import { Type } from "class-transformer";
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { CreateTagDto } from "src/tags/dtos/create-tags.dto";

export class CreatePostDto{
//     title: String
// * postType: enum(post, page, story, series)
// * slug: String
// * status: enum(draft, scheduled, reviewed,)
// * content?: string
// * schema? : string
// * featuredImageUrl : string
// * publishOn: string
// * tags: string[]
// * keyOptions: [{key: value}]

    @IsString()
    @ApiProperty({
      example: 'This is a title',
      description: 'this shows the title'
    })
    @MinLength(4)
    @MaxLength(30)
    @IsNotEmpty()
    title: string

    @IsNotEmpty()
    @ApiProperty({
      enum: PostType,
      description: 'Possible values, post, series, page, story'
    })
    @IsEnum(PostType)
    postType: PostType

    @IsString()
    @ApiProperty({
      example: "For Example - 'my-url'",
      description: 'my-blog-post'
    })
    @IsNotEmpty()
    @MaxLength(30)
    @Matches(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, {
    message: 'Slug must contain only lowercase letters, numbers, and hyphens (no trailing hyphen).',
  })
   slug: string

    @IsNotEmpty()
    @ApiProperty({
      enum: postStatus,
      description: "Possible values, 'draft', 'scheduled', 'reviewed', 'published'"
    })
    @IsEnum(postStatus)
    status: postStatus

 
    @IsOptional()
    @ApiPropertyOptional({
       example: 'This is the post Content',
       description: 'post-content'
    })
    @IsString()
    content?: string

    @IsOptional()
     @ApiPropertyOptional({
       description: 'Serialize your Json object else an error will be thrown',
       example: '{\"key\":\"value\"}'
    })
    @IsJSON()
    schema: string
    
    @IsOptional()
    @MaxLength(30)
    @ApiPropertyOptional({
       description: 'Featured image image on your posts',
       example: 'http://example.com/image.png'
    })
    @IsUrl()
    featuredImageUrl  : string

    @IsISO8601()
     @ApiPropertyOptional({
       description: 'The date on which your image was posted',
       example: '2024-03-16T07:46:32+0000'
    })
    @IsOptional()
    publishOn?: Date

    @ApiPropertyOptional({
    description: 'Array of ids of tags passed as integers in an array',
    example: [1, 2],
  })
  @IsOptional()
  @IsArray()
  @IsInt({ each: true })
  tags?: number[];

    @IsOptional()
    @ApiPropertyOptional({
      type: 'object',
      required: [],
      additionalProperties: false, 
      items: {
        title: 'object',
        properties: {
          metavalue: { 
            type: 'json',
            description: 'The MetaValue is a Json String',
            example: '{"sideBarEnabled" : true}'
          },
        }
      }
    })
    @ValidateNested({each: true})
    @Type(()=> CreatePostMetaOptionsDto)
    metaOptions?: CreatePostMetaOptionsDto | null;

    @ApiProperty({
      type: 'integer',
      required: true,
      example: 1
    })
    @IsNotEmpty()
    @IsInt()
    authorId: number

}
