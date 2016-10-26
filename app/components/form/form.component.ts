import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    moduleId: module.id,
	selector: 'todo-form',
	templateUrl: 'form.component.html',
	styleUrls: ['form.component.css']
})

export class FormComponent {

	@Output() added;

	constructor() {
		this.added = new EventEmitter();
	}

    addTask(task) {
		if (task) {
			this.added.emit(task);
		}
	}
}