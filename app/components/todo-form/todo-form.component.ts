import { Component } from '@angular/core';

import { Todo } from "../../shared/todo.model";
import { TodoService } from "../../shared/todo.service";

@Component({
    moduleId: module.id,
	selector: 'todo-form',
	templateUrl: 'todo-form.component.html',
	styleUrls: ['todo-form.component.css']
})

export class TodoFormComponent {


	constructor(private todoService: TodoService) {	}

    addTask(task: string) {
		if (task) {
			let todo = new Todo(task);
			this.todoService.addTodo(todo);
		}
	}
}