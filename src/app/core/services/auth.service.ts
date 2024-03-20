import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, catchError, map, of, tap, throwError } from 'rxjs';
import { environment } from 'src/app/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient, private router: Router) {}

  login(email: string, password: string): Observable<boolean> {
    const credentials = { email, password };
    return this.http
      .post<{ token: string; userId: string }>(
        `${this.apiUrl}/auth/login`,
        credentials
      )
      .pipe(
        tap((response) => {
          this.setToken(response.token, response.userId);
        }),
        map(() => true),
        catchError((error) => {
          console.error(
            'Une erreur est survenue lors de la connexion :',
            error
          );
          return of(false);
        })
      );
  }

  logout(): void {
    this.removeToken();
  }

  redirectToLogin() {
    this.router.navigateByUrl('/connexion');
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  getUserId(): string | null {
    return localStorage.getItem('userId');
  }

  private setToken(token: string, userId: string): void {
    localStorage.setItem('token', token);
    localStorage.setItem('userId', userId);
  }

  private removeToken(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
  }
}
