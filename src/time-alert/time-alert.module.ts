import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { TimeAlertController } from './time-alert.controller';
import { TimeAlertService } from './time-alert.service';

@Module({
  controllers: [TimeAlertController],
  providers: [TimeAlertService, PrismaService]
})
export class TimeAlertModule {}
