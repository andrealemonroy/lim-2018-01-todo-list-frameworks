import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { FormsModule } from '@angular/forms';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { ListComponent } from './components/list/list.component';
import { TodolistComponent } from './components/todolist/todolist.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    TodolistComponent
  ],
  imports: [
    BrowserModule,
    AngularFontAwesomeModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
