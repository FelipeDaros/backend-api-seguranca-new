import { Module } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma.service';
import { UsersModule } from './users/users.module';
import { ItensModule } from './itens/itens.module';
import { CompanyModule } from './company/company.module';
import { PostModule } from './post/post.module';
import { PostItensModule } from './post-itens/post-itens.module';
import { ServiceDayModule } from './service-day/service-day.module';


@Module({
  controllers: [AppController],
  providers: [AppService, PrismaService],
  imports: [UsersModule, ItensModule, CompanyModule, PostModule, PostItensModule, ServiceDayModule],
})
export class AppModule {}
