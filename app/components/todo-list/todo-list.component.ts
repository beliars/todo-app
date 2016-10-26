import { Component, Input } from '@angular/core';

@Component({
    moduleId: module.id,
	selector: 'todo-list',
	templateUrl: 'todo-list.component.html',
	styleUrls: ['todo-list.component.css']
})

export class TodoListComponent {
    @Input() todos;

	todoDeleted(todo) {
		if (todo) {
			let item = this.todos.indexOf(todo);
			if (item > -1) {
				this.todos.splice(item, 1);
			}
		}
	}
}