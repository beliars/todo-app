import { Component } from '@angular/core';

import { Todo } from "./shared/todo";


@Component({
	selector: 'todo-app',
	templateUrl: './app/app.component.html',
	styleUrls: ['./app/app.component.css']
})

export class AppComponent {

	title: string;
	todos: Todo[];

	constructor() {
		this.title = 'ToDo App';
		this.todos = [];
	}

	addedTask(todo: Todo) {
		this.todos.push(todo);
	}
}