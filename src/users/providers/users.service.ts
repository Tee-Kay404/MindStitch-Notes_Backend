import {forwardRef, Inject, Injectable} from "@nestjs/common";
import { GetUsersParamDto } from "../dtos/get-users-param.dto";
import { AuthService } from "src/auth/providers/auth.service";
import { User } from "../user.entity";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateUserDto } from "../dtos/create-user.dto";

/**
 * Class to connect to users table and perform business operation
 */
@Injectable()
export class UserService{
/**
 * Injecting user repository
 */

    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>
    )
    {}

    /**
     * create a new user
     */
    public async createUser(createUserDto: CreateUserDto) {
        //  Check if user exist with the same email
         const existingUser = await this.userRepository.findOne({
            where : {email: createUserDto.email}
         })
        // Handle Exceptions

        // Create a new user
        let newUser = this.userRepository.create(createUserDto);
        newUser = await this.userRepository.save(newUser);

        return newUser; 
    }
    
    /**
     * The method to find all the user from the database
     */
    public findAll(
        getUserParamDto: GetUsersParamDto,
        limit: number,
        page: number,
    ) {
        return [
        {
            firstName : 'TEE_KAY',
            email: 'tikay404@gmail.com'
        },
        {
            firstName : 'Maestro',
            email: 'Maestro007@gmail.com'
        },
        {
            firstName : 'Danlowo',
            email: 'Danlowo@gmail.com'
        }
    ]
    }

    /**
     * find a single user by the id of the user
     */
    public findById(id: string) {
        return {
            id: 1234,
            firstName: 'TEE_KAY',
            email: 'tikay404#gmail.com'
        }
    }
}