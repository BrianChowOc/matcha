import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from 'src/app/shared/models/user.model';

@Injectable()
export class UserService {
  getUsers(): Observable<User[]> {
    return of([
      {
        id: 1,
        username: 'lejohn',
        sex: 'homme',
        orientation: 'gay',
        birth: '26/02/1988',
        location: 'paris',
        interests: ['sport', 'cooking', 'music'],
        description: "j'aime manger des pommes",
        imageUrl: '../assets/images/random-user-image.jpg',
        imageList: ['../assets/images/random-user-image.jpg'],
      },
      {
        id: 2,
        username: 'lejohn',
        sex: 'homme',
        orientation: 'gay',
        birth: '26/02/1988',
        location: 'paris',
        interests: ['sport', 'cooking', 'music'],
        description: "j'aime manger des pommes",
        imageUrl: '../assets/images/random-user-image.jpg',
        imageList: ['../assets/images/random-user-image.jpg'],
      },
      {
        id: 3,
        username: 'lejohn',
        sex: 'homme',
        orientation: 'gay',
        birth: '26/02/1988',
        location: 'paris',
        interests: ['sport', 'cooking', 'music'],
        description: "j'aime manger des pommes",
        imageUrl: '../assets/images/random-user-image.jpg',
        imageList: ['../assets/images/random-user-image.jpg'],
      },
      {
        id: 4,
        username: 'lejohn',
        sex: 'homme',
        orientation: 'gay',
        birth: '26/02/1988',
        location: 'paris',
        interests: ['sport', 'cooking', 'music'],
        description: "j'aime manger des pommes",
        imageUrl: '../assets/images/random-user-image.jpg',
        imageList: ['../assets/images/random-user-image.jpg'],
      },
      {
        id: 5,
        username: 'lejohn',
        sex: 'homme',
        orientation: 'gay',
        birth: '26/02/1988',
        location: 'paris',
        interests: ['sport', 'cooking', 'music'],
        description: "j'aime manger des pommes",
        imageUrl: '../assets/images/random-user-image.jpg',
        imageList: ['../assets/images/random-user-image.jpg'],
      },
      {
        id: 6,
        username: 'lejohn',
        sex: 'homme',
        orientation: 'gay',
        birth: '26/02/1988',
        location: 'paris',
        interests: ['sport', 'cooking', 'music'],
        description: "j'aime manger des pommes",
        imageUrl: '../assets/images/random-user-image.jpg',
        imageList: ['../assets/images/random-user-image.jpg'],
      },
    ]);
  }

  getUser(): Observable<User> {
    return of({
      id: 6,
      username: 'lejohn',
      sex: 'homme',
      orientation: 'gay',
      birth: '26/02/1988',
      location: 'paris',
      interests: ['sport', 'cooking', 'music'],
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras facilisis, dolor id aliquet faucibus, elit lectus vestibulum Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras facilisis, dolor id aliquet faucibus, elit lectus vestibulumLorem ipsum dolor sit amet, consectetur adipiscing elit. Cras facilisis, dolor id aliquet faucibus, elit lectus vestibulum',
      imageUrl: '../assets/images/random-user-image.jpg',
      imageList: [
        '../assets/images/random-user-image.jpg',
        '../assets/images/random-user-image.jpg',
        '../assets/images/random-user-image.jpg',
        '../assets/images/random-user-image.jpg',
      ],
      backgroundImage: '../assets/images/background-user-image.jpg',
    });
  }
}
