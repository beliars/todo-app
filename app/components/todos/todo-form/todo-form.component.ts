import { Component, Output, EventEmitter } from '@angular/core';

import { Todo } from "../../../shared/todo.model";

@Component({
    moduleId: module.id,
	selector: 'todo-form',
	templateUrl: 'todo-form.component.html',
	styleUrls: ['todo-form.component.css']
})

export class TodoFormComponent {

	@Output() created: EventEmitter<Todo>;

	constructor() {
		this.created = new EventEmitter<Todo>();
		}

    create(task: string) {
		if (task) {
			let todo = new Todo(task);
			this.created.emit(todo);
		}
	}
}