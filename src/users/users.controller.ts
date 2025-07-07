import { 
    Controller, 
    Get, 
    Post, 
    Patch, 
    Param, 
    Query, 
    Body, 
    Headers, 
    Ip,
    DefaultValuePipe,
    ParseIntPipe,
    ValidationPipe
} from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { GetUsersParamDto } from './dtos/get-users-param.dto';
import { PatchUserDto} from './dtos/patch-users.dto';
import { UserService } from './providers/users.service';

@Controller('users')
export class UsersController {

    constructor( private readonly userService: UserService) {}   

    @Get('/{:id}')
    public getUsers(
        @Param() getUserParamDto: GetUsersParamDto,
        @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
        @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
    ){
       return this.userService.findAll(getUserParamDto, page, limit);
    }

    @Post()
    public createUser(
        @Body() createUserDto: CreateUserDto, 
    ) {
        console.log(createUserDto instanceof CreateUserDto);
        return 'You sent a POST method to users endpoint';
    }

    @Patch()
    public patchUser(
    @Body() patchUserDto: PatchUserDto
    ) {
       return patchUserDto;
    }
}
