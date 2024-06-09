import { Test, TestingModule } from '@nestjs/testing';
import { ResumeController } from './resume.controller';
import { ResumeService } from './resume.service';

describe('ResumeController', () => {
  let resumeController: ResumeController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ResumeController],
      providers: [ResumeService],
    }).compile();

    resumeController = app.get<ResumeController>(ResumeController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(resumeController.getHello()).toBe('Hello World!');
    });
  });
});
