import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsISO8601, IsOptional, IsString } from "class-validator";

export class CreateNotesDto{
   @ApiPropertyOptional({
      example: 'This is a title',
      description: 'This shows the title'
   })
   @IsString()
   @IsOptional()
   title: string;

  @ApiPropertyOptional()
   @IsString()
   @IsOptional()
   body: string;
 
}