import { Injectable } from '@angular/core'

import { ITodo } from './todo.model';
import { todos } from './todo.data';

@Injectable()

export class TodoService {

    getTodos(): Promise<ITodo[]> {
        return new Promise(resolve => setTimeout(() => resolve(todos), 1000));
    }

    addTodo(todo: ITodo) {
        todos.push(todo);
    }

    deleteTodo(todo: ITodo) {
        let item = todos.indexOf(todo);
        if (item > -1) {
            todos.splice(item, 1);
        }
    }
}