import { Schema, Document } from 'mongoose';

export const postSchema = new Schema({
  value: { type: Number, required: true },
  comments: [{ type: Schema.Types.ObjectId, ref: 'Post' }],
  isComment: { type: Boolean, default: true },
});

export interface IPost extends Document {
  value: number;
  isComment: boolean;
  comments: IPost[];
}
