import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { ServiceDayController } from './service-day.controller';
import { ServiceDayService } from './service-day.service';

@Module({
  controllers: [ServiceDayController],
  providers: [ServiceDayService, PrismaService]
})
export class ServiceDayModule {}
