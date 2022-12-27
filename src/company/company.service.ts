import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Company } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { CreateCompanyDTO } from './DTO/CreateCompany.dto';

@Injectable()
export class CompanyService {
  constructor(private prismaService: PrismaService){}

  public async create({name, city}:CreateCompanyDTO): Promise<Company>{
    const companyExits = await this.prismaService.company.findUnique({
      where: {
        name
      }
    });

    if(companyExits){
      throw new HttpException({
        status: HttpStatus.AMBIGUOUS,
        error: "Essa empresa já está cadastrada!"
      }, HttpStatus.AMBIGUOUS);
    }
    
    const company = await this.prismaService.company.create({
      data: {
        name,
        city
      }
    });

    return company;
  }

  public async findAll(): Promise<Company[]>{
    return this.prismaService.company.findMany();
  }

  public async stationCompany(post_id: string){
    const stationCompany = await this.prismaService.post.findFirst({
      where: {
        id: post_id
      },
      include: {
        company: true
      }
    })

    return stationCompany;
  } 
}
