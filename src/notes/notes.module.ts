import { Module, forwardRef } from '@nestjs/common';
import { NotesController } from './notes.controller';
import { NotesService } from './provider/notes.service';
import { UsersModule } from 'src/users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Notes } from './notes.entity';
import { UserService } from 'src/users/providers/users.service';
import { ConfigModule } from '@nestjs/config';
import profileConfig from 'src/users/config/profile.config';
import { UsersCreateManyProviders } from 'src/users/providers/users-create-many.providers';
import { CreateUserProvider } from 'src/users/providers/create-user.provider';

@Module({
  controllers: [NotesController],
  providers: [NotesService, UserService, UsersCreateManyProviders],
  imports: [
     UsersModule,
    TypeOrmModule.forFeature([Notes]),
    ConfigModule.forFeature(profileConfig),
  ],
  exports: [NotesService]
})
export class NotesModule {}
