import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from 'passport-local';
import { MessagesHelper } from "src/helpers/messages.helper";
import { AuthService } from "../auth.service";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy){
  constructor(private readonly authService: AuthService){
    super({usernameField: 'name'});
  }

  async validate(name: string, password: string){
    const user = await this.authService.validateUser(name, password);

    if(!user){
      throw new UnauthorizedException(MessagesHelper.INVALID_LOGIN);
    }

    return user;
  }
}