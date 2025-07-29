import { Module, forwardRef } from '@nestjs/common';
import { NotesController } from './notes.controller';
import { NotesService } from './provider/notes.service';
import { UsersModule } from 'src/users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Notes } from './notes.entity';
import { UserService } from 'src/users/providers/users.service';

@Module({
  controllers: [NotesController],
  providers: [NotesService, UserService],
  imports: [
    forwardRef(() => UsersModule),
    TypeOrmModule.forFeature([Notes])
  ],
  exports: [NotesService]
})
export class NotesModule {}
