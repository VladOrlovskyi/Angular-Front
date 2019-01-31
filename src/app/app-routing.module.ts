import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {AllUsersComponent} from './components/users/all-users/all-users.component';
import {AllMessegesComponent} from './components/messeges/all-messeges/all-messeges.component';
import {AllChatsComponent} from './components/chats/all-chats/all-chats.component';
import {UpdateUserComponent} from './components/users/update-user/update-user.component';
import {UpdateMessegeComponent} from './components/messeges/update-messege/update-messege.component';
import {UpdateChatComponent} from './components/chats/update-chat/update-chat.component';
import {SingleUserComponent} from './components/users/single-user/single-user.component';
import {SingleMessegeComponent} from './components/messeges/single-messege/single-messege.component';
import {SingleChatComponent} from './components/chats/single-chat/single-chat.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'users', component: AllUsersComponent},
  {path: 'messeges', component: AllMessegesComponent},
  {path: 'chats', component: AllChatsComponent},
  {path: 'single-user/:id', component: SingleUserComponent},
  {path: 'single-messege/:id', component: SingleMessegeComponent},
  {path: 'single-chat/:id', component: SingleChatComponent},
  {path: 'login', loadChildren: './components/login/login.module#LoginModule'}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
