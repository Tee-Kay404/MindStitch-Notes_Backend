import {
  ConflictException,
  Injectable,
  RequestTimeoutException,
} from "@nestjs/common";
import { User } from "../user.entity";
import { CreateUserDto } from "../dtos/create-user.dto";
import { DataSource } from "typeorm";
import { UserCreateManyDto } from "src/post/dto/create-many-user.dto";

@Injectable()
export class UsersCreateManyProviders {
  constructor(
    /**
     * Injecting DataSource
     */

    private readonly dataSource: DataSource
  ) {}

  public async createMany(createManyUserDto: UserCreateManyDto) {
    let newUsers: User[] = [];

    //  Create Query Runner Instance
    const queryRunner = this.dataSource.createQueryRunner();

    try {
      // Connect Query Runner to dataSource
      await queryRunner.connect();

      // Start Connection
      await queryRunner.startTransaction();
    } catch (error) {
      throw new RequestTimeoutException("Could not release the transaction", {
        description: String(error),
      });
    }
    try {
      for (let user of createManyUserDto.users) {
        let newUser = queryRunner.manager.create(User, user);
        let result = await queryRunner.manager.save(newUser);
        newUsers.push(result);
      }
      // if successful, commit
      await queryRunner.commitTransaction();
    } catch (error) {
      // If unsuccessul, rollback
      await queryRunner.rollbackTransaction();
      throw new ConflictException("Could not complete the transaction ", {
        description: String(error),
      });
    } finally {
      try {
        // Release transaction
        await queryRunner.release();
      } catch (error) {
        throw new RequestTimeoutException("Could not release the transaction", {
          description: String(error),
        });
      }
    }
    return newUsers;
  }
}
