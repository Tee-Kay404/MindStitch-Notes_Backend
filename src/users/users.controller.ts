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
import { ApiOperation, ApiQuery, ApiTags } from '@nestjs/swagger';

@Controller('users')
@ApiTags('Users')
export class UsersController {

    constructor( private readonly userService: UserService) {}   

    @Get('/{:id}')
    @ApiOperation({
        summary: 'fetches a list of registered users on the application'
    })
    @ApiQuery({
        name: 'limit',
        type: 'number',
        required: false,
        description: 'nmber of entries returned per query',
        example: '10'
    })
    @ApiQuery({
        name: 'page',
        type: 'number',
        required: false,
        description: 'the position of the page number you want the Api to return',
        example: '10'
    })
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
