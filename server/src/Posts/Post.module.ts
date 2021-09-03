import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { postSchema } from './Post.model';
import { PostsController } from './Posts.controller';
import { PostsService } from './Posts.service';
@Module({
  imports: [MongooseModule.forFeature([{ name: 'Post', schema: postSchema }])],
  controllers: [PostsController],
  providers: [PostsService],
})
export class PostsModule {}
