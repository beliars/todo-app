import { Component, Output, EventEmitter } from '@angular/core';

import { Todo } from "../../shared/todo";

@Component({
    moduleId: module.id,
	selector: 'todo-form',
	templateUrl: 'form.component.html',
	styleUrls: ['form.component.css']
})

export class FormComponent {

	@Output() added: EventEmitter<Todo>;

	constructor() {
		this.added = new EventEmitter<Todo>();
	}

    addTask(task: string) {
		if (task) {
			let todo = new Todo(task);
			this.added.emit(todo);
		}
	}
}