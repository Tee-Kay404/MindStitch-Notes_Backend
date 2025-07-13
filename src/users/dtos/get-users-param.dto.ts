import { ApiPropertyOptional } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsOptional } from "class-validator";

export class GetUsersParamDto {
    @ApiPropertyOptional({
        description: 'Get User with a specific ID',
        example: 1234
    })
    @IsOptional()
    @Type(()=> Number)
    id : number
}
