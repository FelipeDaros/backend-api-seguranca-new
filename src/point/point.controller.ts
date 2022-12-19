import { Body, Controller, Post } from '@nestjs/common';
import { CreatePointDto } from './dto/CratePoint.dto';
import { PointService } from './point.service';

@Controller('point')
export class PointController {
  constructor(private readonly pointService: PointService){}

  @Post()
  public create(@Body() createPointDto:CreatePointDto){
    return this.pointService.create(createPointDto);
  }
}
