import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Chat} from '../models/Chat';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private host = 'http://localhost:3000';

  constructor(
    private  http: HttpClient
  ) {
  }

  getById(id: number): Observable<Chat> {
    return this.http.get<Chat>(`${this.host}/api/chats/${id}`);
  }

  getAll(): Observable<Chat[]> {
    return this.http.get<Chat[]>(`${this.host}/api/chats`);
  }

  create(chat: Chat): Observable<Chat> {
    return this.http.post<Chat>(`${this.host}/api/chats`, chat);
  }

  update(id: number, chat: Chat): Observable<Chat> {
    return this.http.put<Chat>(`${this.host}/api/chats/${id}`, chat);
  }

  delete(id: number): Observable<Chat> {
    return this.http.delete<Chat>(`${this.host}/api/chats/${id}`);
  }
}
