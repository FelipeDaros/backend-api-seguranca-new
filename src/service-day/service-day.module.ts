import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { ServiceDayController } from './service-day.controller';
import { ServiceDayService } from './service-day.service';
import { ValidatorHourAlertValidator } from './validators/ValidatorHourAlert.validator';

@Module({
  controllers: [ServiceDayController],
  providers: [ServiceDayService, PrismaService, ValidatorHourAlertValidator]
})
export class ServiceDayModule {}
