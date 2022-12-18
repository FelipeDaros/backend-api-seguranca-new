import { Controller, Post } from '@nestjs/common';
import { CreateOccurrenceDto } from './dto/CreateOccurrence.dto';
import { OccurrenceService } from './occurrence.service';

@Controller('occurrence')
export class OccurrenceController {
  constructor(
    private readonly occurrenceService: OccurrenceService
  ){}

  @Post()
  public create(createOccurrenceDto:CreateOccurrenceDto){
    return this.occurrenceService.create(createOccurrenceDto);
  }
}
