import {Component, Input, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {MessegeService} from '../../../services/messege.service';
import {Messege} from '../../../models/Messege';

@Component({
  selector: 'app-single-chat',
  templateUrl: './single-chat.component.html',
  styleUrls: ['./single-chat.component.css']
})
export class SingleChatComponent implements OnInit {
  messages: Messege[] = [];

  constructor(
    private messegeService: MessegeService
  ) {
  }

  ngOnInit() {

  }

  inChat() {
  }

  leaveChat() {

  }

  sendMessage(messageForm: NgForm) {
    this.messegeService.create(messageForm.value).subscribe((newMessage) => {
      this.messages.push(newMessage);
    });
  }

}
