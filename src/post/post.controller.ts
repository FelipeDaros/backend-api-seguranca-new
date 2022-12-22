import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post } from '@nestjs/common';
import { CreatePostDTO } from './DTO/CreatePost.dto';
import { PostService } from './post.service';

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

  @Get('/find-itens-post/:id')
  public findItensPost(@Param("id") id: string){
    return this.postService.findItensPost(id);
  }
}
