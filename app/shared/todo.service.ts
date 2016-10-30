import { Injectable } from '@angular/core'
import { Http, Headers, RequestOptions, Response } from '@angular/http';

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

    saveTodo(todo: ITodo) {
        return this.put(todo);
    }

    deleteTodo(todo: ITodo) {
        return this.delete(todo);
    }

    private post(todo: ITodo): Promise<ITodo> {
        let body = JSON.stringify(todo);
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers});
        console.log(todo);
        return this.http.post(this.todosUrl, body, options)
            .toPromise()
            .then(res => res.json().data)
            .catch(this.handleError);
    }

    private put(todo: ITodo): Promise<ITodo> {
        let body = JSON.stringify(todo);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers });
        console.log(todo);
        return this.http.put(this.todosUrl + '/' + todo.id, body, options)
            .toPromise()
            .then(res => todo)
            .catch(this.handleError);
    }

    private delete(todo: ITodo): Promise<ITodo> {
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers});
        console.log(todo);
        return this.http.delete(this.todosUrl + '/' + todo.id, options)
            .toPromise()
            .then(res => todo)
            .catch(this.handleError);
    }

    private handleError(error) {
        console.log('An error has occurred!', error);
        return Promise.reject(error.message || error);
    }
}