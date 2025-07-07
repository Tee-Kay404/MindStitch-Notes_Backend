import { Type } from "class-transformer";
import { IsOptional } from "class-validator";

export class GetUsersParamDto {
    @IsOptional()
    @Type(()=> Number)
    id : number
}
