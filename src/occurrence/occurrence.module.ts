import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { OccurrenceController } from './occurrence.controller';
import { OccurrenceService } from './occurrence.service';

@Module({
  controllers: [OccurrenceController],
  providers: [OccurrenceService, PrismaService]
})
export class OccurrenceModule {}
