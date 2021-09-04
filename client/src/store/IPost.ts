export interface IPost {
  _id: string;
  value: number;
  comments: IPost[];
}
