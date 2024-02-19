import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/app/environments/environment';
import { User } from 'src/app/shared/models/user.model';

@Injectable()
export class UserService {
  constructor(private http: HttpClient) {}

  addUser(user: FormData): Observable<User> {
    return this.http.post<User>(`${environment.apiUrl}/auth/signup`, user);
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${environment.apiUrl}/user`);
  }

  getUserById(id: string | null): Observable<User> {
    return this.http.get<User>(`${environment.apiUrl}/user/${id}`);
  }

  updateUser(id: string | null, updatedUserData: User): Observable<User> {
    return this.http.put<User>(
      `${environment.apiUrl}/user/${id}`,
      updatedUserData
    );
  }

  updateProfileImage(id: string | null, imageData: FormData): Observable<User> {
    return this.http.put<User>(
      `${environment.apiUrl}/user/${id}/profile-image`,
      imageData
    );
  }

  deleteUser(id: string | null): Observable<User> {
    return this.http.delete<User>(`${environment.apiUrl}/user/${id}`);
  }
}
