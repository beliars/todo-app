"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
var TodoService = (function () {
    function TodoService(http) {
        this.http = http;
        this.todosUrl = 'app/todos';
    }
    TodoService.prototype.getTodos = function () {
        return this.http.get(this.todosUrl)
            .toPromise()
            .then(function (res) { return res.json().data; })
            .catch(this.handleError);
    };
    TodoService.prototype.addTodo = function (todo) {
        return this.post(todo);
    };
    TodoService.prototype.saveTodo = function (todo) {
        return this.put(todo);
    };
    TodoService.prototype.deleteTodo = function (todo) {
        return this.delete(todo);
    };
    TodoService.prototype.post = function (todo) {
        var body = JSON.stringify(todo);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        console.log(todo);
        return this.http.post(this.todosUrl, body, options)
            .toPromise()
            .then(function (res) { return res.json().data; })
            .catch(this.handleError);
    };
    TodoService.prototype.put = function (todo) {
        var body = JSON.stringify(todo);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        console.log(todo);
        return this.http.put(this.todosUrl + '/' + todo.id, body, options)
            .toPromise()
            .then(function (res) { return todo; })
            .catch(this.handleError);
    };
    TodoService.prototype.delete = function (todo) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        console.log(todo);
        return this.http.delete(this.todosUrl + '/' + todo.id, options)
            .toPromise()
            .then(function (res) { return todo; })
            .catch(this.handleError);
    };
    TodoService.prototype.handleError = function (error) {
        console.log('An error has occurred!', error);
        return Promise.reject(error.message || error);
    };
    TodoService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], TodoService);
    return TodoService;
}());
exports.TodoService = TodoService;
//# sourceMappingURL=todo.service.js.map