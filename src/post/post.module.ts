import { Module } from '@nestjs/common';
import { PostController } from './post.controller';
import { PostService } from './providers/post.service';
import { UsersModule } from 'src/users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Post } from './post.entity';
import { MetaOption } from 'src/meta-options/meta-options.entity';

@Module({
  controllers: [PostController],
  providers: [PostService],
  imports: [UsersModule, TypeOrmModule.forFeature([Post, MetaOption])]
})
export class PostModule {}
