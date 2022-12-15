import { IsBoolean, IsString } from "class-validator";


export class CreateServiceDayDTO{
  @IsString()
  user_id: string;

  @IsBoolean()
  report_reading: boolean;
}