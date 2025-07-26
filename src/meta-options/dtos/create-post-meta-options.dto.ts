import { IsJSON, IsNotEmpty} from "class-validator"

export default class CreatePostMetaOptionsDto{
    @IsNotEmpty()
    @IsJSON()
    metaValue: string;
}