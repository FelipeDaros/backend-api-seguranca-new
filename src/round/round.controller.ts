import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { CreateRoundDto } from './dto/CreateRound.dto';
import { RoundService } from './round.service';

@Controller('round')
@UseGuards(AuthGuard("jwt"))
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
