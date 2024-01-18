import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/app/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  login(
    email: string,
    password: string
  ): Observable<{ token: string; userId: string }> {
    const credentials = { email, password };
    return this.http
      .post<{ token: string; userId: string }>(
        `${this.apiUrl}/auth/login`,
        credentials
      )
      .pipe(
        tap((response) => {
          this.setToken(response.token, response.userId);
        })
      );
  }

  logout(): void {
    this.removeToken();
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
