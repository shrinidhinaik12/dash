import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ButtonComponent } from './button/button.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { DashComponent } from './dash/dash.component';
import { TasksComponent } from './tasks/tasks.component';
import { PostsComponent } from './posts/posts.component';
import { AlbumsComponent } from './albums/albums.component';
import { AddtaskComponent } from './addtask/addtask.component';
import { CommentsComponent } from './comments/comments.component';
import { PhotoComponent } from './photo/photo.component';
import { PhotosComponent } from './photos/photos.component';


const routes: Routes = [
  {path: 'button', component: ButtonComponent},
  {path: '', component: SignupComponent},
  {path: 'login', component: LoginComponent},
  {path: 'dash', component: DashComponent},
  {path: 'tasks', component: TasksComponent},
  {path: 'posts', component: PostsComponent},
  {path: 'albums', component: AlbumsComponent},
  {path: 'addtask', component: AddtaskComponent},
  {path: 'comments', component: CommentsComponent},
  {path: 'photo', component: PhotoComponent},
  {path: 'photos', component: PhotosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
