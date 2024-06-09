import { NestFactory } from '@nestjs/core';
import { ResumeModule } from './resume.module';

async function bootstrap() {
  const app = await NestFactory.create(ResumeModule);
  await app.listen(3000);
}
bootstrap();
