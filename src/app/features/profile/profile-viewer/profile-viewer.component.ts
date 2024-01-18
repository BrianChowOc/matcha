import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { User } from 'src/app/shared/models/user.model';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-profile-viewer',
  templateUrl: './profile-viewer.component.html',
  styleUrls: ['./profile-viewer.component.scss'],
})
export class ProfileViewerComponent implements OnInit {
  user!: User;
  interests!: string[];

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.userService
      .getUserById(this.route.snapshot.params['id'])
      .subscribe((user) => (this.user = user));
  }

  deleteUser() {
    this.userService
      .deleteUser(this.route.snapshot.params['id'])
      .pipe(tap((response) => console.log(response)))
      .subscribe();
    this.router.navigateByUrl('/');
  }
}
