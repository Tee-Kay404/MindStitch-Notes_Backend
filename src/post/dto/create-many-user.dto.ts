import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import {
    IsArray,
  IsNotEmpty,
  ValidateNested,
} from "class-validator";
import { CreateUserDto } from "src/users/dtos/create-user.dto";

export class UserCreateManyDto {
    @ApiProperty({
        type: 'array',
        required: true,
        items: {
           type: 'User'
        }
    })
  @IsArray()
  @IsNotEmpty()
  @ValidateNested({each: true})
  @Type(()=> CreateUserDto)
  users: CreateUserDto[];


}
