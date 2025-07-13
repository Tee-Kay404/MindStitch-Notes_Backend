import { Optional } from "@nestjs/common";
import { IsArray, IsEnum, IsISO8601, IsJSON, IsNotEmpty, IsOptional, IsString, IsUrl, isURL, Matches, MinLength, ValidateNested } from "class-validator";
import { PostType } from "../enums/postType.enum";
import { postStatus } from "../enums/postStatus.enum";
import CreatePostMetaOptionsDto from "./create-post-meta-options.dto";
import { Type } from "class-transformer";
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

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

    @IsOptional()
    @ApiPropertyOptional({
       description: 'An array of tags passed as String values',
       example: ["tags", "typeScript"]
    })
    @IsArray()
    @IsString({ each: true})
    @MinLength(3, { each: true})
    tags?: string[];

    @IsOptional()
    @ApiPropertyOptional({
      type: 'array',
      required: false,
      items: {
        type: 'object',
        properties: {
          key: {
            title: 'string',
            description: 'The Key can be any String for your identifier for your meta option',
            example: 'sideBarEnabled'
          },
           value: {
            title: 'any',
            description: 'Any value you want to save to the key',
            example: 'true'
          }
        }
      }
    })
    @ValidateNested({each: true})
    @IsArray()
    @Type(()=> CreatePostMetaOptionsDto)
    metaOptions?: CreatePostMetaOptionsDto[];

}
