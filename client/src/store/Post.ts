export interface IPost {
  _id: number;
  value: number;
  parents: [any];
  comment: { value: number };
}
