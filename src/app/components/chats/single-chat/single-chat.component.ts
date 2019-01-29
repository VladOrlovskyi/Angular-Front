import {Component, Input, OnInit} from '@angular/core';
import {Chat} from '../../../models/Chat';

@Component({
  selector: 'app-single-chat',
  templateUrl: './single-chat.component.html',
  styleUrls: ['./single-chat.component.css']
})
export class SingleChatComponent implements OnInit {

  @Input() chatInput: Chat = new Chat('');

  constructor() { }

  ngOnInit() {
  }

}
