import { Injectable } from '@nestjs/common';
import CreatePostMetaOptionsDto from '../dtos/create-post-meta-options.dto';
import { Repository } from 'typeorm';
import { MetaOption } from '../meta-options.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class MetaOptionsService {
  
    constructor (
     /**
     * Injecting MetaOptionsRepository
     */
        @InjectRepository(MetaOption)
        private readonly metaOptionsRepository: Repository<MetaOption>
    ) {}

     public async create(createPostOptionDto: CreatePostMetaOptionsDto) {
            let metaOption = this.metaOptionsRepository.create(
                createPostOptionDto
            );
            return await this.metaOptionsRepository.save(metaOption);
     }
}
