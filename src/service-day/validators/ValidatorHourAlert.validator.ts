import { BadRequestException } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

class ValidatorHourAlertDto {
  user_id: string;
  hour: any;
}

export class ValidatorHourAlertValidator {
  constructor(private readonly prismaService: PrismaService) {}
  public async verifyAlertHour({ hour, user_id }: ValidatorHourAlertDto) {
    const searchHour = await this.prismaService.serviceDay.findFirst({
      where: {
        user_id,
      },
    });

    if (!searchHour)
      throw new BadRequestException('Horário do usuário não foi localizado!');

    if (hour < searchHour) {
      throw new BadRequestException('Não está no horário');
    }
  }
}
