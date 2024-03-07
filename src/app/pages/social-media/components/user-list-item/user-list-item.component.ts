import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/core/models/user.model';

@Component({
  selector: 'app-user-list-item',
  templateUrl: './user-list-item.component.html',
  styleUrls: ['./user-list-item.component.scss'],
})
export class UserListItemComponent implements OnInit {
  @Input() user!: User;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  onProfile() {
    this.router.navigateByUrl(`profile/${this.user._id}`);
  }
}
