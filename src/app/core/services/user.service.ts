import { HttpClient } from '@angular/common/http';
import { Injectable, NgZone } from '@angular/core';
import { BehaviorSubject, Observable, catchError, map, of, tap } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth.service';
import { environment } from 'src/app/environments/environment';
import { User } from 'src/app/core/models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private _ownUser$ = new BehaviorSubject<User>(new User());
  get ownUser$(): Observable<User> {
    return this._ownUser$.asObservable();
  }

  private _users$ = new BehaviorSubject<User[]>([]);
  get users$(): Observable<User[]> {
    return this._users$.asObservable();
  }

  private _user$ = new BehaviorSubject<User>(new User());
  get user$(): Observable<User> {
    return this._user$.asObservable();
  }

  constructor(private http: HttpClient, private authService: AuthService) {}

  addUser(user: FormData): Observable<User> {
    return this.http.post<User>(`${environment.apiUrl}/auth/signup`, user);
  }

  getUsers() {
    this.http
      .get<User[]>(`${environment.apiUrl}/user`)
      .pipe(
        tap((users) => {
          this._users$.next(
            users.filter(
              (user) => user._id !== String(this.authService.getUserId())
            )
          );
        })
      )
      .subscribe();
  }

  getUserById(id: string | null) {
    this.http
      .get<User>(`${environment.apiUrl}/user/${id}`)
      .pipe(
        catchError(() => {
          this._ownUser$.error('An error occurred');
          return [];
        })
      )
      .subscribe((user) => this._user$.next(user));
  }

  getOwnUser() {
    this.http
      .get<User>(`${environment.apiUrl}/user/${this.authService.getUserId()}`)
      .pipe(
        catchError(() => {
          this._ownUser$.error('An error occurred');
          return [];
        })
      )
      .subscribe((ownUser) => this._ownUser$.next(ownUser));
  }

  updateUser(id: string | null, updatedUserData: FormData): Observable<User> {
    return this.http.put<User>(
      `${environment.apiUrl}/user/${id}`,
      updatedUserData
    );
  }

  deleteUser(id: string | null): Observable<User> {
    return this.http.delete<User>(`${environment.apiUrl}/user/${id}`);
  }

  likeUser(userLikedId: string | undefined) {
    return this.http.put<User>(
      `${environment.apiUrl}/user/${this.authService.getUserId()}/like`,
      { userLikedId }
    );
  }

  unLikeUser(userLikedId: string | undefined) {
    return this.http.put<User>(
      `${environment.apiUrl}/user/${this.authService.getUserId()}/unlike`,
      { userLikedId }
    );
  }
}
