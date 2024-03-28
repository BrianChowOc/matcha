import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/core/models/user.model';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { UserService } from 'src/app/core/services/user.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  user$!: Observable<User>;

  constructor(
    private authService: AuthService,
    private router: Router,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.user$ = this.userService.ownUser$;
    this.userService.getOwnUser();
  }

  onLogout() {
    this.authService.logout();
    this.router.navigateByUrl('/connexion');
  }

  redirectToHomePage() {
    this.router.navigateByUrl('/');
  }
}
