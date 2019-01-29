import {Component, OnInit} from '@angular/core';
import {Messege} from '../../../models/Messege';
import {MessegeService} from '../../../services/messege.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-all-messeges',
  templateUrl: './all-messeges.component.html',
  styleUrls: ['./all-messeges.component.css']
})
export class AllMessegesComponent implements OnInit {

  messeges: Messege[] = [];

  constructor(
    private messegeService: MessegeService
  ) {
  }


  ngOnInit() {
    this.getMesseges();
  }

  private getMesseges() {
    this.messegeService.getAll().subscribe((res) => {
      this.messeges = res ? res : [];
    });
  }

  removeMessege(messege: Messege) {
    this.messegeService.delete(messege._id).subscribe(() => {
      this.getMesseges();
    });
  }


  createMessege(messegeForm: NgForm) {
    this.messegeService.create(messegeForm.value).subscribe((newMessege) => {
      this.messeges.push(newMessege);
    });
  }
}
