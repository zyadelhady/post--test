import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Post } from './Post.model';

@Injectable()
export class PostsService {
  constructor(@InjectModel('Post') private readonly postModel: Model<Post>) {}

  async addPost(value: number) {
    const newPost = new this.postModel({ value, isComment: false });
    const result = await newPost.save();
    return result;
  }

  async AddComment(value: number, parentId: Types.ObjectId) {
    const _id = new Types.ObjectId();
    const newComment = new this.postModel({ _id, value });
    await this.postModel.bulkWrite([
      {
        insertOne: {
          document: newComment,
        },
      },
      {
        updateOne: {
          filter: { _id: parentId },
          update: { $push: { comments: _id } },
        },
      },
    ]);
    return newComment;
  }

  async getPosts() {
    const posts = await this.postModel.find({ isComment: false });
    await this.populatePosts(posts);
    return posts;
  }

  async populatePosts(posts: Post[]) {
    for (const post of posts) {
      await post.populate('comments');
      await this.populatePosts(post.comments);
    }
  }
}
