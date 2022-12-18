import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateServiceDayDTO } from './DTO/CreateServiceDay.dto';

@Injectable()
export class ServiceDayService {
  constructor(
    private prismaService: PrismaService
  ){}

  public async create(createServiceDay: CreateServiceDayDTO){
    const create = this.prismaService
  }
}
