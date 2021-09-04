import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { IPost } from './Post.model';

@Injectable()
export class PostsService {
  constructor(@InjectModel('Post') private readonly postModel: Model<IPost>) {}

  async addPost(value: number) {
    const newPost = new this.postModel({ value, isComment: false });
    const result = await newPost.save();
    return result;
  }

  async AddComment(value: string, parentId: Types.ObjectId, op: string) {
    const parentValue = (await this.postModel.findById(parentId)).value;
    if (!parentValue) {
      throw new HttpException('no parent with this id', HttpStatus.NOT_FOUND);
    }
    let newValue = 0;
    const parseValue = parseInt(value);

    console.log(op);

    switch (op) {
      case '+':
        newValue = parentValue + parseValue;
        break;
      case '-':
        newValue = parentValue - parseValue;
        break;
      case '*':
        newValue = parentValue * parseValue;
        break;
      case '/':
        if (parseValue === 0)
          throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
        newValue = parentValue / parseValue;
        break;
      default:
        throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
    }
    const _id = new Types.ObjectId();
    const newComment = new this.postModel({ _id, value: newValue });
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

  async populatePosts(posts: IPost[]) {
    for (const post of posts) {
      await post.populate('comments');
      await this.populatePosts(post.comments);
    }
  }
}
