import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { usersList } from './mock';
import { UserDto } from './UsersDto';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) {
  }

  getUsers(): Observable<UserDto[]> {
    // return of(usersList);
    return this.http.get<UserDto[]>('/api/users/all');
  }

  create(user: UserDto) {
    return this.http.post<{ user: UserDto }>('/api/auth/signup', user);
  }

  delete(userId: number) {
    return this.http.get(`/api/users/delete/${userId}`);
  }
}
