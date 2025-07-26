import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsJSON, IsNotEmpty, IsOptional, IsString, IsUrl, Matches, MaxLength, MinLength } from "class-validator";

export class CreateTagDto{
   @IsString()
   @ApiProperty()
   @IsNotEmpty()
   @MinLength(3)
   @MaxLength(256)
   name: string;

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
   slug: string;

   @IsString()
   @ApiPropertyOptional()
   @IsOptional()
   description?: string;

    @IsString()
   @ApiPropertyOptional()
   @IsJSON()
   schema?: string;

    @IsString()
   @ApiPropertyOptional()
   @MaxLength(1024)
   @IsUrl()
   featuredImageUrl?: string;}