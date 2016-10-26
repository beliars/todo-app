import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    moduleId: module.id,
	selector: 'todo-item',
	templateUrl: 'todo-item.component.html',
	styleUrls: ['todo-item.component.css']
})

export class TodoItemComponent {
    @Input() todo;
    @Output() deleted;

    constructor() {
        this.deleted = new EventEmitter();
    }

    delete() {
        this.deleted.emit(this.todo);
    }
}