import {User} from './User';
import {Chat} from './Chat';
import {Data} from '@angular/router';

export class Messege {
  _id: number;
  constructor(
    public date: string = '',
    public text: string = '',
    public user: string = '',
    public chat: string = '',
  ) {

  }
}
