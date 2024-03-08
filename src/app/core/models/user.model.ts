export class User {
  _id?: string;
  information!: {
    username: string;
    email: string;
    password: string;
  };
  profil!: {
    genre: string;
    sexualOrientation: string;
    birth: string;
    city: string;
  };
  interests!: Array<string>;
  biographie!: string;
  profilImg?: File;
  picture1?: File;
  picture2?: File;
  picture3?: File;
  picture4?: File;
  backgroundImage?: File;
}
