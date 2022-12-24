import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateTimeAlertDto } from './dto/CreateTimeAlert.dto';

@Injectable()
export class TimeAlertService {
  constructor(private readonly prismaService: PrismaService){}

  public async create({late, user_id}:CreateTimeAlertDto){
    const alertService = await this.prismaService.timeAlert.create({
      data: {
        user_id,
        late
      }
    });

    return alertService;
  }

  public async findAll(){
    const findAllAlertsSevice = await this.prismaService.timeAlert.findMany();

    return findAllAlertsSevice;
  }
}
