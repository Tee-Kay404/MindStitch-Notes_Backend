import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateNotesDto } from './dto/create-note.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { NotesService } from './provider/notes.service';

@Controller('notes')
@ApiTags('Notes')
export class NotesController {
    constructor(private readonly notesService: NotesService) {}
   @Get(':userId')
public getNote(@Param('userId') userId: string) {
    return this.notesService.findAllById();
}

    
    
        @ApiOperation({
            summary: 'Creates a new Note',
        })
        @ApiResponse({
            status: 201,
            description: 'You get a response if your post is created successfully'
        })
    @Post()
    public createNote(@Body() createNote: CreateNotesDto) {
       return this.notesService.create(createNote);
    }
    
}
