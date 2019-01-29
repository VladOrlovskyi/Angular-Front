import {Component, OnInit} from '@angular/core';
import {Chat} from '../../../models/Chat';
import {ActivatedRoute} from '@angular/router';
import {ChatService} from '../../../services/chat.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-update-chat',
  templateUrl: './update-chat.component.html',
  styleUrls: ['./update-chat.component.css']
})
export class UpdateChatComponent implements OnInit {

  chat: Chat;

  constructor(
    private activatedRoute: ActivatedRoute,
    private chatService: ChatService
  ) {
  }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((data) => {
      this.chat = <Chat>data;
    });
  }

  updateChat(chatForm: NgForm) {
    this.chat = {...this.chat, ...chatForm.value};
    this.chatService.update(this.chat._id, this.chat).subscribe((res) => {
      this.chat = res;
    });
  }


}
