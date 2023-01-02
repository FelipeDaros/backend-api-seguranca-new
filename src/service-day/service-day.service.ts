import { Injectable } from '@nestjs/common';
import { ServiceDayItens } from '@prisma/client';
import dayjs from 'dayjs';
import { PrismaService } from 'src/prisma.service';
import { CreateServiceDayDTO } from './DTO/CreateServiceDay.dto';
import { ValidatorHourAlertValidator } from './validators/ValidatorHourAlert.validator';

@Injectable()
export class ServiceDayService {
  constructor(
    private prismaService: PrismaService,
    private readonly validatorHourAlertValidator: ValidatorHourAlertValidator,
  ) {}

  public async create(createServiceDay: CreateServiceDayDTO) {
    console.log();

    const create = await this.prismaService.serviceDay.create({
      data: {
        user_id: createServiceDay.user_id,
        report_reading: createServiceDay.report_reading,
      },
    });

    createServiceDay.itens_id.forEach(async (element) => {
      await this.prismaService.serviceDayItens.create({
        data: {
          itens_id: element,
          post_id: createServiceDay.post_id,
          user_id: createServiceDay.user_id,
        },
      });
      console.log({
        itens_id: element,
        post_id: createServiceDay.post_id,
        user_id: createServiceDay.user_id,
      });
    });

    return create;
  }

  public async findLatestItensPostServiceDay(
    post_id: string,
  ): Promise<ServiceDayItens[]> {
    const latest = await this.prismaService.serviceDayItens.findMany({
      where: {
        post_id,
      },
      include: {
        itens: true,
      },
    });

    return latest;
  }
}
