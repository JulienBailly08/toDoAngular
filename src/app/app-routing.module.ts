import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SingleTodoComponent } from './single-todo/single-todo.component';
import { TodoComponent } from './todo/todo.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'todos', component: TodoComponent},
  {path:'not-found', component: NotFoundComponent},
  {path:'contact', component: ContactComponent},
  {path:'single-todo/:id', component: SingleTodoComponent},
  {path:'**',pathMatch:'full', redirectTo:'not-found'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
