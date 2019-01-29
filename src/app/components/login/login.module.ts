import {NgModule} from '@angular/core';
import {LoginComponent} from './login-component/login.component';
import {LoginRoutingModule} from './login-routing.module';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [
    LoginComponent
  ]
})

export class LoginModule {

}
