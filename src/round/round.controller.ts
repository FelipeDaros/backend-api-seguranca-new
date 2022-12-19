import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateRoundDto } from './dto/CreateRound.dto';
import { RoundService } from './round.service';

@Controller('round')
export class RoundController {
  constructor(
    private readonly roundService: RoundService
  ){}

  @Get()
  public findAll(){
    return this.roundService.findAll();
  }

  @Post()
  public create(@Body() createRoundDto: CreateRoundDto){
    return this.roundService.create(createRoundDto);
  }

  @Get(":id")
  public findRoundsUser(@Param("id") id: string){
    return this.roundService.findRoundsUser(id);
  }
}
