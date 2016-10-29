import { Component } from '@angular/core';

@Component({
	selector: 'todo-app',
	templateUrl: './app/components/app.component.html',
	styleUrls: ['./app/components/app.component.css']
})

export class AppComponent {

	title: string;

	constructor() {
		this.title = 'ToDo App';
	}
}