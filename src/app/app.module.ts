import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { AllUsersComponent } from './components/users/all-users/all-users.component';
import { AllMessegesComponent } from './components/messeges/all-messeges/all-messeges.component';
import { AllChatsComponent } from './components/chats/all-chats/all-chats.component';
import { SingleUserComponent } from './components/users/single-user/single-user.component';
import { SingleMessegeComponent } from './components/messeges/single-messege/single-messege.component';
import { SingleChatComponent } from './components/chats/single-chat/single-chat.component';
import {FormsModule} from '@angular/forms';
import { UpdateUserComponent } from './components/users/update-user/update-user.component';
import { UpdateMessegeComponent } from './components/messeges/update-messege/update-messege.component';
import { UpdateChatComponent } from './components/chats/update-chat/update-chat.component';
import { LoginComponent } from './components/login/login-component/login.component';
import {AuthInterceptorService} from './services/auth-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AllUsersComponent,
    AllMessegesComponent,
    AllChatsComponent,
    SingleUserComponent,
    SingleMessegeComponent,
    SingleChatComponent,
    UpdateUserComponent,
    UpdateMessegeComponent,
    UpdateChatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
