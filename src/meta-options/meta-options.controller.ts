import { Body, Controller, Delete, Post } from '@nestjs/common';
import CreatePostMetaOptionsDto from './dtos/create-post-meta-options.dto';
import { MetaOptionsService } from './providers/meta-options.service';

@Controller('meta-options')
export class MetaOptionsController {
    constructor(
        /**
         * Injecting MetaOptionService
         */
        private readonly metaOptionService: MetaOptionsService
    ) {}
    @Post() 
    public create(@Body() createPostMetaOption: CreatePostMetaOptionsDto) {
        return this.metaOptionService.create(createPostMetaOption);
    }
}
