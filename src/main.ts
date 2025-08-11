import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
    transform: true,
    transformOptions: {
      enableImplicitConversion: true
    }
  }));

  //  Swagger Configuration
  const config = new DocumentBuilder()
    .setTitle('NestJS MasterClass - Blog app API')
    .setDescription('Use the base API URL as https://mindstitch-notes-backend-6.onrender.com')
    .setTermsOfService('https://mindstitch-notes-backend-6.onrender.com')
    .setLicense('MIT License', 'https://github.com/Tee-Kay404')
    .addServer('https://mindstitch-notes-backend-6.onrender.com')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(process.env.PORT ?? 3000, '0.0.0.0');
}

bootstrap();
