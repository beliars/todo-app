import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './components/app.component';
import { TodoService } from './shared/todo.service';
import { FormComponent } from './components/form/form.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, FormComponent, TodoListComponent, TodoItemComponent ],
  providers: [ TodoService ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }