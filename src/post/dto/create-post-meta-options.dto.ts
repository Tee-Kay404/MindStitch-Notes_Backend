import { IsNotEmpty, IsString } from "class-validator"

export default class CreatePostMetaOptionsDto{

    @IsString()
    @IsNotEmpty()
    key: string

    @IsNotEmpty()
    value: any
}