import {Component, Input, OnInit} from '@angular/core';
import {Messege} from '../../../models/Messege';

@Component({
  selector: 'app-single-messege',
  templateUrl: './single-messege.component.html',
  styleUrls: ['./single-messege.component.css']
})
export class SingleMessegeComponent implements OnInit {

  @Input() messegeInput: Messege = new Messege('', '', '', '');

  constructor() {
  }

  ngOnInit() {
  }

}
