import { Body, Controller, Get, Param, Post } from '@nestjs/common';

import { CreateTimeAlertDto } from './dto/CreateTimeAlert.dto';
import { TimeAlertService } from './time-alert.service';

@Controller('time-alert')
export class TimeAlertController {
  constructor(private readonly timeAlertService: TimeAlertService){}


  @Post()
  public create(@Body() createTimeAlertDto: CreateTimeAlertDto){
    return this.timeAlertService.create(createTimeAlertDto);
  }

  @Get()
  public findAll(){
    return this.timeAlertService.findAll();
  }

  @Get("/latest/:id")
  public findLatestById(@Param("id") user_id: string){
    return this.timeAlertService.findLatestById(user_id);
  }

  @Get("/user/:id")
  public findLatestTimeAlertUser(@Param("id") user_id: string){
    return this.timeAlertService.findLatestTimeAlertUser(user_id);
  }
}
