import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateServiceDayDTO } from './DTO/CreateServiceDay.dto';
import { ServiceDayService } from './service-day.service';

@Controller('service-day')
export class ServiceDayController {
  constructor(private readonly serviceDayService: ServiceDayService) {}

  @Post()
  public create(@Body() createServiceDayDTO: CreateServiceDayDTO) {
    return this.serviceDayService.create(createServiceDayDTO);
  }

  @Get(':id')
  public findLatestItensPostServiceDay(@Param('id') id: string) {
    return this.serviceDayService.findLatestItensPostServiceDay(id);
  }
}
