import { Module } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma.service';
import { UsersModule } from './users/users.module';
import { ItensModule } from './itens/itens.module';
import { CompanyModule } from './company/company.module';
import { PostModule } from './post/post.module';
import { ServiceDayModule } from './service-day/service-day.module';
import { OccurrenceModule } from './occurrence/occurrence.module';
import { RoundModule } from './round/round.module';
import { PointModule } from './point/point.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';


@Module({
  controllers: [AppController],
  providers: [AppService, PrismaService],
  imports: [ConfigModule.forRoot(), UsersModule, ItensModule, CompanyModule, PostModule, ServiceDayModule, OccurrenceModule, RoundModule, PointModule, AuthModule],
})
export class AppModule {}
