import { forwardRef, Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UserService } from './providers/users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { ConfigModule } from '@nestjs/config';
import { UsersCreateManyProviders } from './providers/users-create-many.providers';
import { CreateUserProvider } from './providers/create-user.provider';
import profileConfig from './config/profile.config';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  controllers: [UsersController],
  providers: [UserService, UsersCreateManyProviders, CreateUserProvider],
  imports: [TypeOrmModule.forFeature([User]), ConfigModule.forFeature(profileConfig), forwardRef(()=> AuthModule)],
  exports: [
    UserService,
    TypeOrmModule, 
    CreateUserProvider
  ],
})
export class UsersModule {}

