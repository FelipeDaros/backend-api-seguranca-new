import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { CreatePostItensDTO } from './DTO/CreatePostItens.dto';
import { PostItensService } from './post-itens.service';

@Controller('post-itens')
export class PostItensController {
  constructor(private postItensService: PostItensService){}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  public created(@Body() createPostItensDTO: CreatePostItensDTO){
    return this.postItensService.createItensPostService(createPostItensDTO);
  }
}
