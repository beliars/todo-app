import { Component, Input } from '@angular/core';

import { Todo } from "../../shared/todo";

@Component({
    moduleId: module.id,
	selector: 'todo-list',
	templateUrl: 'todo-list.component.html',
	styleUrls: ['todo-list.component.css']
})

export class TodoListComponent {
    @Input() todos: Todo[];

	todoDeleted(todo: Todo) {
		if (todo) {
			let item = this.todos.indexOf(todo);
			if (item > -1) {
				this.todos.splice(item, 1);
			}
		}
	}
}