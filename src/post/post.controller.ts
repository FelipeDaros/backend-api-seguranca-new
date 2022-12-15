import { Body, Controller, Get, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { CreatePostDTO } from './DTO/CreatePost.dto';
import { PostService } from './post.service';

interface ICreateItens{
  nameIten: string;
}

@Controller('post')
export class PostController {
  constructor(private postService: PostService){}

  @Get()
  @HttpCode(HttpStatus.FOUND)
  public findAll(){
    return this.postService.findAll();
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  public created(@Body() createPostDTO: CreatePostDTO){
    return this.postService.create(createPostDTO);
  }

  @Get('/find-itens-post')
  @HttpCode(HttpStatus.FOUND)
  public findItensPost(@Body() body: any){
    const {id} = body;
    return this.postService.findItensPost(id);
  }
}
