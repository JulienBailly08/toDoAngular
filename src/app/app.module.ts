
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { registerLocaleData } from '@angular/common';

import { LOCALE_ID, NgModule } from '@angular/core';
import localeFr from '@angular/common/locales/fr';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SingleTodoComponent } from './single-todo/single-todo.component';
import { ContactComponent } from './contact/contact.component';
registerLocaleData(localeFr, 'fr');

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    HeaderComponent,
    HomeComponent,
    NotFoundComponent,
    SingleTodoComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: "fr-FR" }],
  bootstrap: [AppComponent]
})
export class AppModule { }
