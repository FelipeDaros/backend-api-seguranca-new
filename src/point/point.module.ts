import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { PointController } from './point.controller';
import { PointService } from './point.service';

@Module({
  controllers: [PointController],
  providers: [PointService, PrismaService]
})
export class PointModule {}
