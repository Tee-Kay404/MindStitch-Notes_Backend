import { BadRequestException, Injectable, RequestTimeoutException } from "@nestjs/common";
import { User } from "../user.entity";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class FindOneUserEmailProvider {
  constructor(
    /**
     * Injecting User Repository
     */
    @InjectRepository(User)
    private readonly userRepository: Repository<User>
  ) {}
  public async findUserByEmail(email: string) {
    let user: User | null = null;
    // if user exists
    try {
         user = await this.userRepository.findOneBy({
            email: email
        })
    } catch (error) {
        throw new RequestTimeoutException(error, {
            description: 'Could not fetch the user'
        })
    }
    // If user does not exist
    if(!user) {
        throw new BadRequestException(
            'This user does not exist',
            {
                description: 'Please confirm user credentials'
            }
        )
    }
    // if successful
    return user;
  }
}
