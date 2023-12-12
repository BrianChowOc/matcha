import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs';
import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  user!: User;

  ngOnInit(): void {
    this.user = {
      id: 1,
      firstname: "john",
      lastname: "doe",
      birth: "26/02/1988",
      imageUrl: "../assets/images/userImg.jpg",
      orientation: "gay",
      sex: "homme",
      location: "paris"
    }
  }
}
