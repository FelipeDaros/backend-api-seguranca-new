import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { UserCreateDto } from './DTO/userCreate.dto';
import * as bcrypt from 'bcrypt';;

interface IProps{
  id: string;
  password: string;
  newPassord: string
}

@Injectable()
export class UsersService{
  constructor(
    private prisma: PrismaService,
    ) {}

  public async updateUserPassword({id, password, newPassord}: IProps){
    const findUser = await this.prisma.users.findUnique({
      where: {
          id
      }
    })
    
    if(!findUser){
      throw new HttpException({
        status: HttpStatus.NOT_FOUND,
        error: "Usuário não encontrado!"
      }, HttpStatus.NOT_FOUND);
    }

    const passwordVerify = await bcrypt.compare(password, findUser.password);
    const newPass = await bcrypt.hash(newPassord, 10);

    if(!passwordVerify){
      throw new HttpException({
        status: HttpStatus.BAD_REQUEST,
        error: "A antiga senha não confere"
      }, HttpStatus.BAD_REQUEST);
    }

    return this.prisma.users.update({
      where: {id},
      data: {
        password: newPass
      }
    })
  }

  public async updateUserName(id: string, name: string){
    const findUser = await this.prisma.users.findUnique({
      where: {
          id
      }
    })

    if(!findUser){
      throw new HttpException({
        status: HttpStatus.NOT_FOUND,
        error: "Usuário não encontrado!"
      }, HttpStatus.NOT_FOUND);
    }

    const user = await this.prisma.users.update({
      where: {
        id
      },
      data: {
        name
      }
    });

    return user;
  }

  public async findUsers(){
    return await this.prisma.users.findMany();
  }

  public async createUser({email, name, password, post_id}: UserCreateDto){
    const findUserEmail = await this.prisma.users.findFirst({
      where: {
        email
      }
    });

    if(findUserEmail){
      throw new HttpException({
        status: HttpStatus.AMBIGUOUS,
        error: "Email já cadastrado!"
      }, HttpStatus.AMBIGUOUS);
    }

    const passwordHash = await bcrypt.hash(password, 10);

    const userCreated = await this.prisma.users.create({
      data: {
        email,
        name,
        password: passwordHash,
        isAdmin: 0,
        post_id
      }
    });

    return userCreated;
  }
  
}
