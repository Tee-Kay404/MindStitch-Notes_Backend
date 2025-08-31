import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { UsersModule } from "./users/users.module";
import { PostModule } from "./post/post.module";
import { AuthModule } from "./auth/auth.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { MetaOptionsModule } from "./meta-options/meta-options.module";
import { PracticeModule } from "./practice/practice.module";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { TagsModule } from "./tags/tags.module";
import appConfig from "./config/app.config";
import databaseConfig from "./config/database.config";
import environmentValidation from "./config/environment.validation";
import { PaginationProvider } from "./common/pagination/provider/pagination-provider";
import { PaginationModule } from "./common/pagination/pagination.module";

const ENV = process.env.NODE_ENV;

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      //  envFilePath: ['.env.development']  
       envFilePath: `.env.${ENV}`,
       load: [appConfig, databaseConfig],
       validationSchema: environmentValidation
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: "postgres",
        host: configService.get('database.host'),
        port: configService.get('database.port')  || 5432,
        username: configService.get('database.user'),
        password: configService.get('database.password'),
        database: configService.get('database.name'),
        autoLoadEntities: configService.get('database.autoLoadEntities'),
        synchronize: configService.get('database.synchronize'),
      }),
    }),
    UsersModule,
    PostModule,
    AuthModule,
    MetaOptionsModule,
    PracticeModule,
    TagsModule,
    PaginationModule,
],
  controllers: [AppController],
  providers: [AppService, PaginationProvider],
})
export class AppModule {}
