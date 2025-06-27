import { 
    Controller, 
    Get, 
    Post, 
    Patch, 
    Put, 
    Delete , 
    Param, 
    Query, 
    Body, 
    Headers, 
    Ip,
    DefaultValuePipe,
    ParseIntPipe
} from '@nestjs/common';

@Controller('users')
export class UsersController {
    @Get('/{:id}')
    public getUsers(
        @Param("id", ParseIntPipe) id: number | undefined,
        @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
        @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
    ){
        console.log(id);
        console.log(limit);
        console.log(page);
       return 'You sent a request to users endpoint';
    }

    @Post()
    public createUser(
        @Body('status') status:  any, 
        @Headers() headers: any,
        @Ip() Ip: any
    ) {
        console.log(status);
        console.log(headers);
        console.log(Ip);
        return 'You sent a POST method to users endpoint';
    }

    @Patch()
    public request(
    
    ) {
       console.log()
    }
}
