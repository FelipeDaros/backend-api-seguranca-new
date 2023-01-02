import { Injectable } from '@nestjs/common';
import { Panic } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { CreatePanicDto } from './dto/CreatePanic.dto';

@Injectable()
export class PanicService {
  constructor(private readonly prismaService: PrismaService) {}

  public async create(createPanicDto: CreatePanicDto): Promise<Panic> {
    const panic = await this.prismaService.panic.create({
      data: createPanicDto,
    });

    return panic;
  }

  public async findAll(): Promise<Panic[]> {
    return this.prismaService.panic.findMany();
  }

  public async update(id: string, payload: boolean): Promise<Panic> {
    const updated = await this.prismaService.panic.update({
      data: {
        verify: payload,
      },
      where: {
        id,
      },
    });

    return updated;
  }
}
