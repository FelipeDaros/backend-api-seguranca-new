import { Body, Controller, Get, HttpCode, HttpStatus, Param, Patch, Post, Put } from '@nestjs/common';
import { CreateItemDto } from './DTO/CreateItenDTO';
import { UpdateItemDto } from './DTO/UpdateItenDTO';
import { ItensService } from './itens.service';

@Controller('itens')
export class ItensController {
  constructor(private readonly itensService: ItensService){}


  @Get()
  @HttpCode(HttpStatus.FOUND)
  public findAll(){
    return this.itensService.findAll();
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  public create(@Body() createItenDto: CreateItemDto){
    const iten = this.itensService.createIten(createItenDto);

    return iten
  }

  @Patch(':id')
  @HttpCode(HttpStatus.OK)
  public updateIten(@Param('id')id: string, @Body() updateItemDto: UpdateItemDto){
    return this.itensService.updateIten(id, updateItemDto);
  }
}
