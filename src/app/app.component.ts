import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'matcha';
  showHeader!: boolean;
  
  constructor(
    private router: Router,
  ) {
    console.log(router.url);
    this.router.events.pipe(
      filter(event=> event instanceof NavigationEnd)
    ).subscribe((event) => {
      if (event instanceof NavigationEnd)
        this.showHeader = !event.url.includes("/connexion");
    });
  }
}
