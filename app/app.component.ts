import { Component } from '@angular/core';


@Component({
	selector: 'todo-app',
	templateUrl: './app/app.component.html',
	styleUrls: ['./app/app.component.css']
})

export class AppComponent {

	title: string;
	todos: string[];

	constructor() {
		this.title = 'ToDo App';
		this.todos = [];
	}

	addedTask(task) {
		this.todos.push(task);
	}
}