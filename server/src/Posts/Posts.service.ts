import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Post } from './Post.model';

@Injectable()
export class PostsService {
  constructor(@InjectModel('Post') private readonly postModel: Model<Post>) {}

  async addPost(value: number, parentId: Types.ObjectId) {
    console.log('parent ID ' + parentId);
    const postId = new Types.ObjectId();
    const newPost = new this.postModel({ _id: postId, value });
    if (parentId != null) {
      newPost.parentId = parentId;
    } else {
      newPost.parentId = null;
    }
    const result = await newPost.save();
    return result;
  }

  async getPosts() {
    const posts = await this.postModel.find({ parentId: null });
    for (let i = 0; i < posts.length; i++) {
      let post = await this.populatePost(posts[i]);
      while (post.comment != null) {
        post = await this.populatePost(post.comment);
        console.log(post);
      }
    }
    return posts;
  }

  async populatePost(post: Post) {
    const comment: Post = await this.postModel.findOne({
      parentId: post._id,
    });
    post.comment = comment;
    return post;
  }
}
