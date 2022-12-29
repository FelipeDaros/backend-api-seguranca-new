import { Body, Controller, Get, HttpCode, HttpStatus, Param, Patch, Post, Req, Request, UseGuards } from '@nestjs/common';
import { ApiBody } from '@nestjs/swagger';
import { UserCreateDto } from './DTO/userCreate.dto';
import { UsersService } from './users.service';

interface IProps{
  id: string;
  password: string;
  newPassord: string;
}

@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService
  ){}

  @Get()
  @HttpCode(200)
  public findUsers(){
    return this.usersService.findUsers();
  }

  /*@Get(':id')
  @HttpCode(HttpStatus.FOUND)
  public findUserById(@Param('id')id: string){
    return this.usersService.findUserById(id);
  }*/

  @Post()
  @HttpCode(204)
  public created(@Body() userCreateDto: UserCreateDto){
    return this.usersService.createUser(userCreateDto);
  }

  @Patch(':id')
  @HttpCode(HttpStatus.OK)
  public updateUserName(@Param('id')id: string, @Body() name: string){
    return this.usersService.updateUserName(id, name);
  }

  @Patch('/password/:id')
  @HttpCode(HttpStatus.OK)
  public updateUserPassword(@Param('id')id: string,@Body() iprops: IProps){
    return this.usersService.updateUserPassword(iprops);
  }

}
