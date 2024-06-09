import { Controller, Get } from '@nestjs/common';
import { ResumeService } from './resume.service';

@Controller()
export class ResumeController {
  constructor(private readonly resumeService: ResumeService) {}

  @Get()
  getHello(): string {
    return this.resumeService.getHello();
  }
}
