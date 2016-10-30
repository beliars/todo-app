import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { TodoService } from './shared/todo.service';
import { AppComponent } from './components/app.component';
import { TodosComponent } from './components/todos/todos.component';
import { TodoFormComponent } from './components/todos/todo-form/todo-form.component';
import { TodoListComponent } from './components/todos/todo-list/todo-list.component';
import { TodoItemComponent } from './components/todos/todo-item/todo-item.component';

@NgModule({
  imports: [ BrowserModule, HttpModule, InMemoryWebApiModule.forRoot(InMemoryDataService) ],
  declarations: [ AppComponent, TodosComponent, TodoFormComponent, TodoListComponent, TodoItemComponent ],
  providers: [ TodoService ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }