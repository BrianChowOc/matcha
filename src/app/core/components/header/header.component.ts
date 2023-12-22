import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  user!: User;

  ngOnInit(): void {
    this.user = {
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
    };
  }
}
