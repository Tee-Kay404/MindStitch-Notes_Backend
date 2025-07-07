import {Injectable} from "@nestjs/common";
import { GetUsersParamDto } from "../dtos/get-users-param.dto";

@Injectable()
export class UserService{
    public findAll(
        getUserParamDto: GetUsersParamDto,
        limit: number,
        page: number,
    ) {
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
            firstname : 'TEE_KAY',
            email: 'Danlowo@gmai,.com'
        }
    ]
    }

    public findById(id: string) {
        return {
            id: 1234,
            firstname: 'TEE_KAY',
            email: 'tikay404#gmail.com'
        }
    }
}