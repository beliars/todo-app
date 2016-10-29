import { Injectable } from '@angular/core'
import { Http, Headers } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { ITodo } from './todo.model';

@Injectable()

export class TodoService {

    private todosUrl = 'app/todos';

    constructor(private http: Http) {
    }

    getTodos(): Promise<ITodo[]> {
        return this.http.get(this.todosUrl)
            .toPromise()
            .then(res => res.json().data as ITodo[])
            .catch(this.handleError);
    }

    addTodo(todo: ITodo) {
        return this.post(todo);
    }

    deleteTodo(todo: ITodo) {
       return this.delete(todo);
        }

    private post(todo: ITodo): Promise<ITodo> {
        let headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post(this.todosUrl, JSON.stringify(todo), {headers})
            .toPromise()
            .then(res => res.json().data)
            .catch(this.handleError);
    }

    private delete(todo: ITodo): Promise<ITodo> {
        let headers = new Headers({'Content-Type': 'application/json'});
        return this.http.delete(this.todosUrl + '/' + todo.id , {headers})
            .toPromise()
            .then(res => todo)
            .catch(this.handleError);
    }

    private handleError(error) {
        console.log('An error has occurred!', error);
        return Promise.reject(error.message || error);
    }
}