import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { User } from "src/app/shared/models/user.model";

@Injectable()

export class UserService {
    getUsers(): Observable<User[]> {
            return of([
                {
                    id: 1,
                    firstname: 'john',
                    lastname: 'doe',
                    birth: '26/02/1988',
                    imageUrl: '../assets/images/userImg.jpg',
                    orientation: 'gay',
                    sex: 'homme',
                    location: 'paris',
                  },
                  {
                    id: 2,
                    firstname: 'john',
                    lastname: 'doe',
                    birth: '26/02/1988',
                    imageUrl: '../assets/images/userImg.jpg',
                    orientation: 'gay',
                    sex: 'homme',
                    location: 'paris',
                  },
                  {
                    id: 3,
                    firstname: 'john',
                    lastname: 'doe',
                    birth: '26/02/1988',
                    imageUrl: '../assets/images/userImg.jpg',
                    orientation: 'gay',
                    sex: 'homme',
                    location: 'paris',
                  },
                  {
                    id: 4,
                    firstname: 'john',
                    lastname: 'doe',
                    birth: '26/02/1988',
                    imageUrl: '../assets/images/userImg.jpg',
                    orientation: 'gay',
                    sex: 'homme',
                    location: 'paris',
                  },
                  {
                    id: 5,
                    firstname: 'john',
                    lastname: 'doe',
                    birth: '26/02/1988',
                    imageUrl: '../assets/images/userImg.jpg',
                    orientation: 'gay',
                    sex: 'homme',
                    location: 'paris',
                  },
                  {
                    id: 6,
                    firstname: 'john',
                    lastname: 'doe',
                    birth: '26/02/1988',
                    imageUrl: '../assets/images/userImg.jpg',
                    orientation: 'gay',
                    sex: 'homme',
                    location: 'paris',
                  }
            ])
    }
}