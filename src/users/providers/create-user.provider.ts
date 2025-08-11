import {
  BadRequestException,
  forwardRef,
  Inject,
  Injectable,
  RequestTimeoutException,
} from "@nestjs/common";
import { CreateUserDto } from "../dtos/create-user.dto";
import { User } from "../user.entity";
import { Repository } from "typeorm";
import { HashingProvider } from "src/auth/providers/hashing.provider";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class CreateUserProvider {
  constructor(
    /**
     * Injecting users repository
     */
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,

    /**
     * Injecting hashing provider
     */
    @Inject(forwardRef(() => HashingProvider))
    private readonly hashingProvider: HashingProvider
  ) {}
  public async createUser(createUserDto: CreateUserDto) {
    // Using exception handling
    let existingUser: User | null;

    try {
      // might save the details of the exception information which is sensitive
      existingUser = await this.userRepository.findOne({
        where: { email: createUserDto.email },
      });
    } catch (error) {
      throw new RequestTimeoutException(
        "Something went wrong, please try again later",
        {
          description: "Error connecting to the database",
        }
      );
    }

    if (existingUser) {
      throw new BadRequestException(
        "The user already exists, please check your email",
        {
          description: "Error trying to connect to the Database",
        }
      );
    }

    // Create a new user
    const hashedPassword = await this.hashingProvider.hashPasswords(
      createUserDto.password
    );

    let newUser = this.userRepository.create({
      ...createUserDto,
      password: hashedPassword,
    });

    try {
      newUser = await this.userRepository.save(newUser);
    } catch (error) {
      console.error("DB ERROR:", error); // 👈 Add this
      throw new RequestTimeoutException(
        "Unable to process your request , please try again later",
        { description: "Error connecting to the database" }
      );
    }

    return newUser;
  }
}
