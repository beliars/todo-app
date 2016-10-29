export interface ITodo {
    task: string;
    done: boolean;
}

export class Todo implements ITodo{
    task: string;
    done: boolean;

    constructor(task: string) {
        this.task = task;
        this.done = false;
    }
}