import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { ResumeModule } from './resume/resume.module';
import { VacancyModule } from './vacancy/vacancy.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [AuthModule, ResumeModule, VacancyModule, UserModule],
})
export class AppModule {}
