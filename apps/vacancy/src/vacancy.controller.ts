import { Controller, Get } from '@nestjs/common';
import { VacancyService } from './vacancy.service';

@Controller()
export class VacancyController {
  constructor(private readonly vacancyService: VacancyService) {}

  @Get()
  getHello(): string {
    return this.vacancyService.getHello();
  }
}
