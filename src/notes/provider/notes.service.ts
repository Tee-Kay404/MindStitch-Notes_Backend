import { Injectable } from '@nestjs/common';
import { Notes,} from '../notes.entity';
import { UserService } from 'src/users/providers/users.service';
import { InjectRepository } from '@nestjs/typeorm';
import { Post } from 'src/post/post.entity';
import { CreateNotesDto } from '../dto/create-note.dto';
import { User } from 'src/users/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class NotesService {
    /**
     * Injecting user service
     */
    constructor( private readonly usersService: UserService,
          /**
                  * Injecting post repository
                  */
                 @InjectRepository(User)
                 private readonly userRepository: Repository<User>,

                 /**
                  * Injecting note repository
                  */
                 @InjectRepository(Notes)
                 private readonly notesRepository: Repository<Notes>

    ) {}
    async findAllById(): Promise<Notes[]> {
  return this.notesRepository.find();
}


 async create(createNoteDto: CreateNotesDto): Promise<Notes> {
    const newNote = this.notesRepository.create(createNoteDto);
  return this.notesRepository.save(newNote);
}

}
