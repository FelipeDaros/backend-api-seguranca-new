import { Module } from '@nestjs/common';
import { OccurrenceController } from './occurrence.controller';
import { OccurrenceService } from './occurrence.service';

@Module({
  controllers: [OccurrenceController],
  providers: [OccurrenceService]
})
export class OccurrenceModule {}
