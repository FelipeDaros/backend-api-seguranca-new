import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import * as bcrypt from "bcrypt";
import { MessagesHelper } from 'src/helpers/messages.helper';
import { JwtService } from '@nestjs/jwt';
import { Users } from '@prisma/client';

@Injectable()
export class AuthService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly jwtService: JwtService
  ){}
  async validateUser(name: string, password: string){
   
    try {
      const user = await this.prismaService.users.findFirst({
        where: {
          name
        }
      });

      const validPassword = await bcrypt.compare(password, user.password);

      if(!validPassword){
        throw new UnauthorizedException(MessagesHelper.INVALID_LOGIN);
      }

      return user;

    } catch (error) {
      return null
    }

    
  }

  async login({id, post_id}: Users){
    const payload = {sub: id };

    return {
      token: this.jwtService.sign(payload),
      id,
      post_id
    }
  }
}
