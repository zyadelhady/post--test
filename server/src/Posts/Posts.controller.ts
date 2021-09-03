import { Body, Controller, Get, Header, Post } from '@nestjs/common';
import { Types } from 'mongoose';
import { PostsService } from './Posts.service';

@Controller('posts')
export class PostsController {
  constructor(private readonly Postservice: PostsService) {}

  @Post()
  @Header('content-type', 'text/json')
  addPost(
    @Body('value') value: number,
    @Body('parentId') parentId: Types.ObjectId,
  ) {
    return this.Postservice.addPost(value, parentId);
  }

  @Get()
  @Header('content-type', 'text/json')
  getPosts() {
    return this.Postservice.getPosts();
  }
}