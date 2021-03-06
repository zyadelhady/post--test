import { Body, Controller, Get, Header, Post } from '@nestjs/common';
import { Types } from 'mongoose';
import { PostsService } from './Posts.service';

@Controller('posts')
export class PostsController {
  constructor(private readonly Postservice: PostsService) {}

  @Post()
  @Header('content-type', 'text/json')
  addPost(@Body('value') value: number) {
    return this.Postservice.addPost(value);
  }

  @Post('/comment')
  @Header('content-type', 'text/json')
  addComment(
    @Body('value') value: string,
    @Body('parentId') parentId: Types.ObjectId,
    @Body('op') op: string,
  ) {
    return this.Postservice.AddComment(value, parentId, op);
  }

  @Get()
  @Header('content-type', 'text/json')
  getPosts() {
    return this.Postservice.getPosts();
  }
}
