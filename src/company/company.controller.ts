import { Body, Controller, Get, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { CompanyService } from './company.service';
import { CreateCompanyDTO } from './DTO/CreateCompany.dto';

@Controller('company')
export class CompanyController {
  constructor(private companyService: CompanyService){}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  public create(@Body() createCompanyDTO: CreateCompanyDTO){
    return this.companyService.create(createCompanyDTO);
  }

  @Get()
  @HttpCode(HttpStatus.FOUND)
  public findAll(){
    return this.companyService.findAll();
  }
}
