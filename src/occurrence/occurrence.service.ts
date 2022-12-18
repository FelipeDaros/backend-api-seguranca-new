import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateOccurrenceDto } from './dto/CreateOccurrence.dto';

@Injectable()
export class OccurrenceService {
  constructor(
    private readonly prismaService: PrismaService
  ){}

  public async create(createOccurrenceDto:CreateOccurrenceDto){
    const occurenceCreate = this.prismaService.occurrence.create({
      data: {
        resume: createOccurrenceDto.resume,
        locale: createOccurrenceDto.locale,
        user_id: createOccurrenceDto.user_id
      }
    });

    return occurenceCreate;
  }
}
