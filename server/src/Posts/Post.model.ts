import { Schema, Types } from 'mongoose';

export const postSchema = new Schema({
  value: { type: Number, required: true },
  parentId: { type: Schema.Types.ObjectId, ref: 'Post', default: 'null' },
  comment: { type: Object, default: 'null' },
});

export interface Post {
  _id: Types.ObjectId;
  value: number;
  parentId: Types.ObjectId;
  comment: Post;
}
