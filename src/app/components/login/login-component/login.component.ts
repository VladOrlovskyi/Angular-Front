import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {User} from '../../../models/User';
import {AuthService} from '../../../services/auth.service';
import {NgForm} from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User = new User('', '');
  principalUser: boolean;

  constructor(
    private authService: AuthService,
    private  http: HttpClient,
    private router: Router
  ) {

  }


  ngOnInit() {
    this.checkLogin();
  }

  private checkLogin() {
    this.authService.signinReq().subscribe((res: any) => {
      this.user = res.principal;
      this.principalUser = !!res.principal;
    });
  }

  loginUser(loginForm: NgForm) {
    this.authService.login(loginForm.value).subscribe((res: any) => {
      if (res.principal === undefined) {
        return window.alert('Користувач не знайдений! Спробуйте ще один довбаний раз!');
      } else {
        this.user = res.principal;
        this.checkLogin();
      }
    });
  }

  registrUser(registerForm: NgForm) {
    this.authService.register(registerForm.value).subscribe(res => {
      this.user = res;
      this.checkLogin();
    });
  }

  logoutUser() {
    this.authService.logout().subscribe((res: any) => {
      if (this.user === undefined) {
        return window.alert('Ви ще не зайшли!');
      } else {
        this.router.navigate(['/']);
        this.user = res;
        this.principalUser = !!res.principal;
        this.authService.setAdminLoggedIn(false);
        return this.authService.setUserLoggedIn(false);
      }
    });
  }
}


