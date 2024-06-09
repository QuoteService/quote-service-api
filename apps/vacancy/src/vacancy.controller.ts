import { Controller } from '@nestjs/common';
import { VacancyService } from './vacancy.service';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller()
export class VacancyController {
  constructor(private readonly vacancyService: VacancyService) {}

  @MessagePattern('createVacancy')
  async createVacancy(@Payload() payload: unknown) {
    console.log({ '[createVacancy]': { payload } });
    const response = await this.vacancyService.createVacancy(payload);
    console.log({ response });
    return response;
  }

  @MessagePattern('getVacancy')
  async getVacancy(@Payload() payload: unknown) {
    console.log({ '[getVacancy]': { payload } });
    const response = await this.vacancyService.getVacancy(payload);
    console.log({ response });
    return response;
  }

  @MessagePattern('getAllVacancies')
  async getAllVacancies(@Payload() payload: unknown) {
    console.log({ '[getAllVacancies]': { payload } });
    const response = await this.vacancyService.getAllVacancies(payload);
    console.log({ '[getAllVacancies]': { response } });
    return response;
  }

  @MessagePattern('updateVacancy')
  async updateVacancy(@Payload() payload: unknown) {
    console.log({ '[updateVacancy]': { payload } });
    const response = await this.vacancyService.updateVacancy(payload);
    console.log({ '[updateVacancy]': { response } });
    return response;
  }

  @MessagePattern('deleteVacancy')
  async deleteVacancy(@Payload() payload: unknown) {
    console.log({ '[deleteVacancy]': { payload } });
    const response = await this.vacancyService.deleteVacancy(payload);
    console.log({ '[deleteVacancy]': { response } });
    return response;
  }

  @MessagePattern('favouriteVacancy')
  async favouriteVacancy(@Payload() payload: unknown) {
    console.log({ '[favouriteVacancy]': { payload } });
    const response = await this.vacancyService.favouriteVacancy(payload);
    console.log({ '[favouriteVacancy]': { response } });
    return response;
  }

  @MessagePattern('jobPosting')
  async jobPosting(@Payload() payload: unknown) {
    console.log({ '[jobPosting]': { payload } });
    const response = await this.vacancyService.jobPosting(payload);
    console.log({ '[jobPosting]': { response } });
    return response;
  }
}
