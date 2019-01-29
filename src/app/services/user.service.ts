import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private host = 'http://localhost:3000';
  private loggedInStatus = false;

  constructor(
    private  http: HttpClient
  ) {
  }

  getById(id: string): Observable<User> {
    return this.http.get<User>(`${this.host}/api/users/${id}`);
  }

  getAll(): Observable<User[]> {
    return this.http.get<User[]>(`${this.host}/api/users`);
  }

  create(user: User): Observable<User> {
    return this.http.post<User>(`${this.host}/api/users`, user);
  }

  update(id: string, user: User): Observable<User> {
    return this.http.put<User>(`${this.host}/api/users/${id}`, user);
  }

  delete(id: string): Observable<User> {
    return this.http.delete<User>(`${this.host}/api/users/${id}`);
  }
}

