import {Component, OnInit} from '@angular/core';
import {User} from '../../../models/User';
import {UserService} from '../../../services/user.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {

  users: User[] = [];

  constructor(
    private  userServise: UserService
  ) {
  }

  ngOnInit() {
    this.getUsers();
  }


  private getUsers() {
    this.userServise.getAll().subscribe((res) => {
      this.users = res ? res : [];
    });
  }

  removeUser(user: User) {
    this.userServise.delete(user._id).subscribe(() => {
    });
    this.getUsers();
  }


  createUser(userForm: NgForm) {
    this.userServise.create(userForm.value).subscribe((newUser) => {
      this.users.push(newUser);
    });
  }
}

