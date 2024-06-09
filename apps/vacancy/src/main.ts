import { NestFactory } from '@nestjs/core';
import { VacancyModule } from './vacancy.module';

async function bootstrap() {
  const app = await NestFactory.create(VacancyModule);
  await app.listen(3000);
}
bootstrap();
