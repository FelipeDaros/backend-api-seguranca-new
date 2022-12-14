import { Module } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma.service';
import { UsersModule } from './users/users.module';


@Module({
  controllers: [AppController],
  providers: [AppService, PrismaService],
  imports: [UsersModule],
})
export class AppModule {}
