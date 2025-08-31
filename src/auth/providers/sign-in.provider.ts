import { forwardRef, Inject, Injectable, RequestTimeoutException, UnauthorizedException } from "@nestjs/common";
import { UserService } from "src/users/providers/users.service";
import { SignInDto } from "../dtos/sign-in.dto";
import { HashingProvider } from "./hashing.provider";

@Injectable()
export class SignInProvider {
  constructor(
    /**
     * Injecting userService
     */
    @Inject(forwardRef(() => UserService))
    private readonly userService: UserService,
    /**
     * Injecting hashProvider
     */
    @Inject()
    private readonly hashProvider: HashingProvider
  ) {}
  public async SignInUser(signInDto: SignInDto) {
    
     let user = await this.userService.findUserByEmail(signInDto.email);

    // Compare the password to the hashPassword
    let isEqual:  boolean = false;

    try {
      isEqual = await this.hashProvider.comparePasswords(
        signInDto.password,
        user.password
      );
    } catch (error) {
        throw new RequestTimeoutException(error, {
            description: 'Something went wrong',
        })
    }

    // if passwords don't match
    if(!isEqual) {
        throw new UnauthorizedException('Incorrect password')
    }
    return true;
  }
}
