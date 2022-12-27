import { HttpCode, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { MessagesHelper } from 'src/helpers/messages.helper';
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

  public async findLatestTimeAlertUser(user_id: string){
    const latestTimeUser = await this.prismaService.timeAlert.findFirst({
      where: {
        user_id
      }
    });

    if(!latestTimeUser){
      throw new HttpException({
        status: HttpStatus.NOT_FOUND,
        error: MessagesHelper.TIME_ALERT_NOT_FOUND
      }, HttpStatus.NOT_FOUND);
    }
  }

  public async findAll(){
    const findAllAlertsSevice = await this.prismaService.timeAlert.findMany();

    return findAllAlertsSevice;
  }
}
