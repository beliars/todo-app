import { Component, OnInit } from '@angular/core';

import { Todo, ITodo } from "../../shared/todo.model";
import { TodoService } from "../../shared/todo.service";

@Component({
    moduleId: module.id,
	selector: 'todos',
	templateUrl: 'todos.component.html',
	styleUrls: ['todos.component.css']
})

export class TodosComponent implements OnInit {
    
    todos: ITodo[];

    constructor(private todoService: TodoService) {
		this.todos = [];
	}

	ngOnInit() {
		this.todoService.getTodos().subscribe(todos => this.todos = todos);
	}

    onTodoCreated(todo: ITodo): void {
        this.todoService.addTodo(todo).subscribe(todo => this.addTodo(todo));
    }

    onTodoDeleted(todo: ITodo): void {
		this.todoService.deleteTodo(todo).subscribe(todo => this.deleteTodo(todo));
	}

    onTodoToggled(todo: ITodo): void {
		this.todoService.saveTodo(todo).subscribe(todo => {});
	}

    private addTodo(todo: ITodo): void {
        this.todos.push(todo);
    }

    private deleteTodo(todo): void {
        let index = this.todos.indexOf(todo);
        if (index > -1) {
            this.todos.splice(index, 1);
        }
    }
}