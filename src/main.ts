import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Проект СкайТикет')
    .setDescription('Бэкенд проекта')
    .setVersion('1.0.0')
    .addTag('Команда Микеланджело')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/api/docs', app, document);
  app.enableCors();
  await app.listen(process.env.PORT || 5000);
}
bootstrap();
