import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, Subscription, of } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  emailCtrl!: FormControl;
  passwordCtrl!: FormControl;
  loginForm!: FormGroup;

  subscription!: Subscription;
  showLoginError$!: Observable<boolean>;

  constructor(
    private formBuilder: FormBuilder,
    private auth: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initLoginForm();
  }

  initLoginForm() {
    this.emailCtrl = this.formBuilder.control('', Validators.required);
    this.passwordCtrl = this.formBuilder.control('', Validators.required);
    this.loginForm = this.formBuilder.group({
      email: this.emailCtrl,
      password: this.passwordCtrl,
    });
  }

  onLogin(): void {
    const email = this.emailCtrl.value;
    const password = this.passwordCtrl.value;
    this.subscription = this.auth
      .login(email, password)
      .subscribe((success) => {
        if (success) {
          this.router.navigateByUrl('/');
        } else {
          this.showLoginError$ = of(true);
        }
      });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
