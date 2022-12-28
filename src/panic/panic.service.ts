import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class PanicService {
  constructor(private readonly prismaService: PrismaService){}


}
