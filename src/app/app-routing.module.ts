import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {AllUsersComponent} from './components/users/all-users/all-users.component';
import {AllMessegesComponent} from './components/messeges/all-messeges/all-messeges.component';
import {AllChatsComponent} from './components/chats/all-chats/all-chats.component';
import {UpdateUserComponent} from './components/users/update-user/update-user.component';
import {UpdateMessegeComponent} from './components/messeges/update-messege/update-messege.component';
import {UpdateChatComponent} from './components/chats/update-chat/update-chat.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'users', component: AllUsersComponent},
  {path: 'messeges', component: AllMessegesComponent},
  {path: 'chats', component: AllChatsComponent},
  {path: 'single-user/:id', component: UpdateUserComponent},
  {path: 'single-messege/:id', component: UpdateMessegeComponent},
  {path: 'single-chat/:id', component: UpdateChatComponent},
  {path: 'login', loadChildren: './components/login/login.module#LoginModule'}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
