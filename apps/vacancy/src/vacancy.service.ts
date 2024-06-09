import { Injectable } from '@nestjs/common';

@Injectable()
export class VacancyService {
  getHello(): string {
    return 'Hello World!';
  }
}
