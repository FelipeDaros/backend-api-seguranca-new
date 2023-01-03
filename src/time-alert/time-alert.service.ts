import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { TimeAlert } from '@prisma/client';
import { MessagesHelper } from 'src/helpers/messages.helper';
import { PrismaService } from 'src/prisma.service';
import { CreateTimeAlertDto } from './dto/CreateTimeAlert.dto';

@Injectable()
export class TimeAlertService {
  constructor(private readonly prismaService: PrismaService) {}

  public async create({
    late,
    user_id,
  }: CreateTimeAlertDto): Promise<TimeAlert> {
    const alertService = await this.prismaService.timeAlert.create({
      data: {
        user_id,
        late,
      },
    });

    return alertService;
  }

  public async findLatestTimeAlertUser(user_id: string): Promise<TimeAlert> {
    const latestTimeUser = await this.prismaService.timeAlert.findFirst({
      where: {
        user_id,
      },
      orderBy: {
        created_at: 'desc',
      },
    });

    if (!latestTimeUser) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: MessagesHelper.TIME_ALERT_NOT_FOUND,
        },
        HttpStatus.NOT_FOUND,
      );
    }

    return latestTimeUser;
  }

  public async findAll(): Promise<TimeAlert[]> {
    const findAllAlertsSevice = await this.prismaService.timeAlert.findMany();

    return findAllAlertsSevice;
  }

  public async findLatestById(user_id: string): Promise<TimeAlert[]> {
    const findLatest = await this.prismaService.timeAlert.findMany({
      where: {
        late: true,
        user_id: user_id,
      },
    });

    return findLatest;
  }
}
