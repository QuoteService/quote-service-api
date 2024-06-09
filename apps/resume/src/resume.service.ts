import { Injectable } from '@nestjs/common';

@Injectable()
export class ResumeService {
  getHello(): string {
    return 'Hello World!';
  }
}
