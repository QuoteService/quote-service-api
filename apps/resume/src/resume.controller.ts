import { Controller, Get } from '@nestjs/common';
import { ResumeService } from './resume.service';
import { MessagePattern, Payload } from "@nestjs/microservices";

@Controller()
export class ResumeController {
  constructor(private readonly resumeService: ResumeService) {}

  @MessagePattern('createResume')
  async createResume(@Payload() payload: unknown) {
    console.log({ '[createResume]': { payload } });

  }
}
