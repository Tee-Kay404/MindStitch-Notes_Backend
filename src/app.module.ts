import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { PostModule } from './post/post.module';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/user.entity';
import { TagsModule } from './tags/tags.module';
import { MetaOptionsModule } from './meta-options/meta-options.module';
import { PracticeModule } from './practice/practice.module';
import { ProviderService } from './provider/service/provider.service';


@Module({
  imports: [
    UsersModule, 
    PostModule, 
    AuthModule,
    TypeOrmModule.forRootAsync({
      imports: [],
      inject: [],
      useFactory: () => ({
        type: 'postgres',
      autoLoadEntities: true,
      synchronize: true,
      port: 5432,
      username: 'postgres',
      password: '2005tony',
      host: 'localhost',
      database: 'nestjs-blog'
      })
  }),
    TagsModule,
    MetaOptionsModule,
    PracticeModule
],
  controllers: [AppController],
  providers: [AppService, ProviderService],
})
export class AppModule {}


