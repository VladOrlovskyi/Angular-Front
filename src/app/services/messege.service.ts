import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Messege} from '../models/Messege';

@Injectable({
  providedIn: 'root'
})
export class MessegeService {
  private host = 'http://localhost:3000';

  constructor(
    private http: HttpClient
  ) {
  }

  getById(id: number): Observable<Messege> {
    return this.http.get<Messege>(`${this.host}/api/messeges/${id}`);
  }

  getAll(): Observable<Messege[]> {
    return this.http.get<Messege[]>(`${this.host}/api/messeges`);
  }

  create(messege: Messege): Observable<Messege> {
    return this.http.post<Messege>(`${this.host}/api/messeges`, messege);
  }

  update(id: number, messege: Messege): Observable<Messege> {
    return this.http.put<Messege>(`${this.host}/api/messeges/${id}`, messege);
  }

  delete(id: number): Observable<Messege> {
    return this.http.delete<Messege>(`${this.host}/api/messeges/${id}`);
  }
}
