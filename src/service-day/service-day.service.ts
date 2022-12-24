import { Injectable } from '@nestjs/common';
import { ServiceDayItens } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { CreateServiceDayDTO } from './DTO/CreateServiceDay.dto';

@Injectable()
export class ServiceDayService {
  constructor(
    private prismaService: PrismaService
  ){}

  public async create(createServiceDay: CreateServiceDayDTO){
    const create = await this.prismaService.serviceDay.create({
      data: {
        user_id: createServiceDay.user_id,
        report_reading: createServiceDay.report_reading
      }
    });

    createServiceDay.itens_id.map(async(i) => {
      await this.prismaService.$queryRaw`INSERT INTO 'service-day-itens' (post_id, itens_id, user_id) VALUES (${createServiceDay.post_id}, ${i}, ${createServiceDay.user_id})`;
    });

    return create;
  }

  public async findLatestItensPostServiceDay(post_id: string): Promise<ServiceDayItens[]>{
    const latest = await this.prismaService.serviceDayItens.findMany({
      where: {
        post_id
      },
      include: {
        itens: true
      }
    });

    return latest;
  }
}
