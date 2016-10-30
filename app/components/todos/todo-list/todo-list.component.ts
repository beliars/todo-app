import { Component, Input, Output, EventEmitter } from '@angular/core';

import { ITodo } from '../../../shared/todo.model';

@Component({
    moduleId: module.id,
	selector: 'todo-list',
	templateUrl: 'todo-list.component.html',
	styleUrls: ['todo-list.component.css'],
})

export class TodoListComponent {

	@Input() todos: ITodo[];
	@Output() deleted: EventEmitter<ITodo>;
	@Output() toggled: EventEmitter<ITodo>;

	constructor() {
		this.deleted = new EventEmitter<ITodo>();
		this.toggled = new EventEmitter<ITodo>();
		}

	get sortedTodos(): ITodo[] {
		return this.todos
			.map((todos) => todos)
			.sort((a, b) => {
				if (a.done && !b.done) return 1;
				else if (!a.done && b.done) return -1;
				else return 0;
			})
	}

	onTodoDeleted(todo: ITodo): void {
        this.deleted.emit(todo);
    }

	onTodoToggled(todo: ITodo): void {
        this.toggled.emit(todo);
    }
}