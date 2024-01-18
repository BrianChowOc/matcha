import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { tap } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  emailCtrl!: FormControl;
  passwordCtrl!: FormControl;

  constructor(
    private formBuilder: FormBuilder,
    private auth: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.emailCtrl = this.formBuilder.control('', Validators.required);
    this.passwordCtrl = this.formBuilder.control('', Validators.required);
  }

  onLogin() {
    this.auth
      .login(this.emailCtrl.value, this.passwordCtrl.value)
      .pipe(
        tap(() => {
          if (this.auth.isAuthenticated()) this.router.navigateByUrl('/');
        })
      )
      .subscribe();
  }
}
