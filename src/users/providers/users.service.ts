import { BadRequestException, forwardRef, HttpException, HttpStatus, Inject, Injectable, RequestTimeoutException } from "@nestjs/common";
import { GetUsersParamDto } from "../dtos/get-users-param.dto";
import { AuthService } from "src/auth/providers/auth.service";
import { User } from "../user.entity";
import { DataSource, Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateUserDto } from "../dtos/create-user.dto";
import { ConfigService, ConfigType } from "@nestjs/config";
import profileConfig from "../config/profile.config";
import { throws } from "assert";
import { UsersCreateManyProviders } from "./users-create-many.providers";
import { UserCreateManyDto } from "src/post/dto/create-many-user.dto";
import { CreateUserProvider } from "./create-user.provider";

/**
 * Class to connect to users table and perform business operation
 */
@Injectable()
export class UserService {
  constructor(
    /**
     * Injecting user repository
     */
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    /**
     * Injecting Config service
     */
    private readonly configService: ConfigService,
    /**
     * Injecting profileConfig
     */
    @Inject(profileConfig.KEY)
     private readonly profileConfiguration: ConfigType<typeof profileConfig>,

     /**
      * Injecting createManyUsersProviders
      */
     private readonly createManyUser: UsersCreateManyProviders,

     /**
      * Injecting createUserProvider
      */
     private readonly createUserProvider: CreateUserProvider,
  ) {}

  /**
   * create a new user
   */
  public async createUser(createUserDto: CreateUserDto) {
    return  this.createUserProvider.createUser(createUserDto);
  }

  /**
   * The method to find all the user from the database
   */
  public findAll(
    getUserParamDto: GetUsersParamDto,
    limit: number,
    page: number
  ) {

    //  const environment = this.configService.get<string>('S3_BUCKET');
    //  console.log(environment);

    //  console.log(this.profileConfiguration);
    //  console.log(this.profileConfiguration.apiKey);

    throw new HttpException(
      {
        status: HttpStatus.MOVED_PERMANENTLY,
        error: 'The Api endpoint doest not exist',
        fileName: 'users.dervice.ts',
        line: 88
      },
      HttpStatus.MOVED_PERMANENTLY,
      {
        cause: new Error(),
        description: 'Occured because API endppoint was permanently moved'
      }
    )
    
  }

  /**
   * find a single user by the id of the user
   */
  public async findById(id: number) {
    let user:  User | null;

    try {
      user = await this.userRepository.findOneBy({
       id,
    });
    } catch (error) {
      throw new RequestTimeoutException(
        'Unable to process your request , please try again later',
        {
          description: 'Error connecting to the database'
        }
      )
    }

    if(!user) {
      throw new BadRequestException(
        'This user does not exist',
        {
          description: 'Error connecting to the database'
        }
      )
    }
    return user;
  }
  // Injecting createManyUserProvider
   public async createMany(createUseManyDto: UserCreateManyDto) {
       return await this.createManyUser.createMany(createUseManyDto);
  }
}
