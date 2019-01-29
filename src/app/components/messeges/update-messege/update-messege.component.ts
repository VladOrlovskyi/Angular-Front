import {Component, OnInit} from '@angular/core';
import {Messege} from '../../../models/Messege';
import {ActivatedRoute} from '@angular/router';
import {MessegeService} from '../../../services/messege.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-update-messege',
  templateUrl: './update-messege.component.html',
  styleUrls: ['./update-messege.component.css']
})
export class UpdateMessegeComponent implements OnInit {

  messege: Messege;

  constructor(
    private activatedRoute: ActivatedRoute,
    private messegeService: MessegeService
  ) {
  }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((data) => {
      this.messege = <Messege>data;
    });
  }

  updateMessege(messegeForm: NgForm) {
    this.messege = {...this.messege, ...messegeForm.value};
    this.messegeService.update(this.messege._id, this.messege).subscribe((res) => {
      this.messege = res;
    });
  }

}
