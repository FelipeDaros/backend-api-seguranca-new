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

    Array.from({length: createServiceDay.itens_id.length}).map(async(data, index) => {
      await this.prismaService.serviceDayItens.create({
        data: {
          itens_id: createServiceDay.itens_id[index],
          post_id: createServiceDay.post_id,
          user_id: createServiceDay.user_id
        }
      });
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
