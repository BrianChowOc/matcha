export class User {
  id!: number;
  username!: string;
  sex!: string;
  orientation!: string;
  birth!: string;
  location!: string;
  interests!: Array<string>;
  description!: string;
  imageUrl!: string;
  imageList!: Array<string>;
  backgroundImage?: string;
}
