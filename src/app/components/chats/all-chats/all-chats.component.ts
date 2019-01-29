import {Component, OnInit} from '@angular/core';
import {Chat} from '../../../models/Chat';
import {ChatService} from '../../../services/chat.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-all-chats',
  templateUrl: './all-chats.component.html',
  styleUrls: ['./all-chats.component.css']
})
export class AllChatsComponent implements OnInit {

  chats: Chat[] = [];

  constructor(
    private chatService: ChatService
  ) {
  }

  ngOnInit() {
    this.getChats();
  }

  private getChats() {
    this.chatService.getAll().subscribe((res) => {
      this.chats = res ? res : [];
    });
  }

  removeChat(chat: Chat) {
    this.chatService.delete(chat._id).subscribe(() => {
      this.getChats();
    });
  }

  createChat(chatForm: NgForm) {
    this.chatService.create(chatForm.value).subscribe((newChat) => {
      this.chats.push(newChat);
    });
  }

}
