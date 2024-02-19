import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/models/user.model';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  user!: User;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.user = {
      _id: 1,
      information: {
        username: 'lejohn',
        email: 'fakeEmail',
        password: 'fakePassword',
      },
      profil: {
        genre: 'homme',
        sexualOrientation: 'gay',
        birth: '26/02/1988',
        city: 'Paris',
      },
      interests: ['sport', 'cooking', 'music'],
      biographie: "j'aime manger des pommes",
      imageList: [
        '../assets/images/random-user-image.jpg',
        '../assets/images/random-user-image.jpg',
        '../assets/images/random-user-image.jpg',
        '../assets/images/random-user-image.jpg',
      ],
      backgroundImage: '../assets/images/background-user-image.jpg',
    };
  }

  onLogout() {
    this.authService.logout();
    this.router.navigateByUrl('/connexion');
  }
}
