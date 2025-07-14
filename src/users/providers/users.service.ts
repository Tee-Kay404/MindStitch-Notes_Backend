import {forwardRef, Inject, Injectable} from "@nestjs/common";
import { GetUsersParamDto } from "../dtos/get-users-param.dto";
import { AuthService } from "src/auth/providers/auth.service";

/**
 * Class to connect to users table and perform business operation
 */
@Injectable()
export class UserService{
    /**
     * injecting authService from AuthModule
    */
    constructor(
        @Inject(forwardRef(()=> AuthService))
        private readonly authService: AuthService
    ) {}

    /**
     * The method to find all the user from the database
     */
    public findAll(
        getUserParamDto: GetUsersParamDto,
        limit: number,
        page: number,
    ) {
        const isAuth = this.authService.isAuth();
        console.log(isAuth);
        return [
        {
            firstname : 'TEE_KAY',
            email: 'tikay404@gmail.com'
        },
        {
            firstname : 'Maestro',
            email: 'Maestro007@gmail.com'
        },
        {
            firstname : 'Danlowo',
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
            firstname: 'TEE_KAY',
            email: 'tikay404#gmail.com'
        }
    }
}