import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { CompanyModule } from './company/company.module';
import { OvzModule } from './ovz/ovz.module';

@Module({
  imports: [CompanyModule, OvzModule],
  controllers: [UserController],
  providers: [UserService],
})
export class AppModule {}
