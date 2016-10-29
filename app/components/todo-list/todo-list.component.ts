import { Component, OnInit } from '@angular/core';

import { Todo, ITodo } from '../../shared/todo.model';
import { TodoService } from '../../shared/todo.service';

@Component({
    moduleId: module.id,
	selector: 'todo-list',
	templateUrl: 'todo-list.component.html',
	styleUrls: ['todo-list.component.css'],
})

export class TodoListComponent implements OnInit {

	todos: ITodo[];

	constructor(private todoService: TodoService) {
		this.todos = [];
	}

	ngOnInit() {
		this.todoService.getTodos().then(todos => this.todos = todos);
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

	todoDeleted(todo: ITodo): void {
		this.todoService.deleteTodo(todo);
	}
}