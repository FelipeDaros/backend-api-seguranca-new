import { Controller, Get, Post } from '@nestjs/common';
import { CreateTimeAlertDto } from './dto/CreateTimeAlert.dto';
import { TimeAlertService } from './time-alert.service';

@Controller('time-alert')
export class TimeAlertController {
  constructor(private readonly timeAlertService: TimeAlertService){}


  @Post()
  public create(createTimeAlertDto: CreateTimeAlertDto){
    return this.timeAlertService.create(createTimeAlertDto);
  }

  @Get()
  public findAll(){
    this.timeAlertService.findAll();
  }
}
