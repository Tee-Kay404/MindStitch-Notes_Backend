import { Injectable } from '@nestjs/common';
import { CreateTagDto } from '../dtos/create-tags.dto';
import { In, Repository } from 'typeorm';
import { Tag } from '../tags.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class TagsService {

    constructor (
        /**
         * injecting Tags repository
         */
        @InjectRepository(Tag)
        private readonly tagsRepository: Repository<Tag>
    ) {}

    /**
     * Create tags method
     */
    public async createTag(createTagsDto: CreateTagDto) {
        let tag = this.tagsRepository.create(createTagsDto);
        return await this.tagsRepository.save(tag);
    }

    public async findMultipleTags(tags: number[]) {
       let result = this.tagsRepository.find({
        where: {
            id: In(tags)
        }
       })
       return result;
    }

    public async deleteTag(id: number) {
       await this.tagsRepository.delete(id);

       return {
         deleted: true,
         id
       }
    }

    public async softRemove(id: number) {
       await this.tagsRepository.softDelete(id);

       return {
         deleted: true,
         id
       }
    }
}
