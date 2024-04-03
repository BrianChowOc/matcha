import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription, tap } from 'rxjs';
import { User } from 'src/app/core/models/user.model';
import { AuthService } from 'src/app/core/services/auth.service';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-profile-viewer',
  templateUrl: './profile-viewer.component.html',
  styleUrls: ['./profile-viewer.component.scss'],
})
export class ProfileViewerComponent implements OnInit {
  user$!: Observable<User>;
  userId!: string;
  like: boolean = false;
  likeSubscription!: Subscription | undefined;

  interests!: string[];

  imageTab!: (string | File | ArrayBuffer | null | undefined)[];

  constructor(
    private userService: UserService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.user$ = this.userService.user$;
    this.userId = this.route.snapshot.params['id'];
    this.userService.getUserById(this.userId);
  }

  likeUser(userId: string | undefined) {
    if (!this.like) {
      this.like = true;
      this.likeSubscription = this.userService
        .likeUser(userId)
        .subscribe((res) => console.log(res));
    } else {
      this.like = false;
      this.likeSubscription = this.userService
        .unLikeUser(userId)
        .subscribe((res) => console.log(res));
    }
  }
}
