import { Test, TestingModule } from '@nestjs/testing';
import { VacancyController } from './vacancy.controller';
import { VacancyService } from './vacancy.service';

describe('VacancyController', () => {
  let vacancyController: VacancyController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [VacancyController],
      providers: [VacancyService],
    }).compile();

    vacancyController = app.get<VacancyController>(VacancyController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(vacancyController.getHello()).toBe('Hello World!');
    });
  });
});
