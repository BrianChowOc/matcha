import { Component, OnInit } from '@angular/core';
import { Observable, of, tap } from 'rxjs';
import { User } from 'src/app/shared/models/user.model';
import { UserService } from '../../../../shared/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  users$!: Observable<User[]>;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.users$ = this.userService.users$;
    this.userService.getUsers();
  }
}
