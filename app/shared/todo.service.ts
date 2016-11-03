import { Injectable } from '@angular/core'
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/throw';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { ITodo } from './todo.model';

@Injectable()

export class TodoService {

    private todosUrl = 'app/todos';

    constructor(private http: Http) {
    }

    getTodos(): Observable<ITodo[]> {
        return this.http.get(this.todosUrl)
            .map(res => res.json().data as ITodo[])
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

    private post(todo: ITodo): Observable<ITodo> {
        let body = JSON.stringify(todo);
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers});
        console.log(todo);
        return this.http.post(this.todosUrl, body, options)
            .map(res => res.json().data)
            .catch(this.handleError);
    }

    private put(todo: ITodo): Observable<ITodo> {
        let body = JSON.stringify(todo);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers });
        console.log(todo);
        return this.http.put(this.todosUrl + '/' + todo.id, body, options)
            .map(res => todo)
            .catch(this.handleError);
    }

    private delete(todo: ITodo): Observable<ITodo> {
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers});
        console.log(todo);
        return this.http.delete(this.todosUrl + '/' + todo.id, options)
            .map(res => todo)
            .catch(this.handleError);
    }

    private handleError(error) {
        console.log('An error has occurred!', error);
        return Observable.throw(error.message || error);
    }
}