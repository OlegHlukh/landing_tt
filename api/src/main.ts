import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.setGlobalPrefix('api');
  app.enableCors({
    origin: true,
  });
  const port = process.env.PORT ?? 8000;

  app.useStaticAssets(join(__dirname, '..', '.uploads'));

  await app.listen(port);
}

bootstrap();
