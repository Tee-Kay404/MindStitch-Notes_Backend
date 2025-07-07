import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './providers/auth.service';
import { UserService } from 'src/users/providers/users.service';

@Module({
  controllers: [AuthController],
  providers: [AuthService, UserService]
})
export class AuthModule {}
