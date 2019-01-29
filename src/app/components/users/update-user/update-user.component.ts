import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {User} from '../../../models/User';
import {NgForm} from '@angular/forms';
import {UserService} from '../../../services/user.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  user: User;

  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: UserService
  ) {
  }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((data) => {
      this.user = <User>data;
    });
  }


  updateUser(userForm: NgForm) {
    this.user = {...this.user, ...userForm.value};
    this.userService.update(this.user._id, this.user).subscribe((res) => {
      this.user = res;
    });
  }
}
