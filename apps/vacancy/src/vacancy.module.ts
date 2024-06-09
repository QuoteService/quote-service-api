import { Module } from '@nestjs/common';
import { VacancyController } from './vacancy.controller';
import { VacancyService } from './vacancy.service';

@Module({
  imports: [],
  controllers: [VacancyController],
  providers: [VacancyService],
})
export class VacancyModule {}
