export interface ITodo {
    id: number;
    task: string;
    done: boolean;
}

export class Todo implements ITodo{
    id: number;
    task: string;
    done: boolean;

    constructor(task: string) {
        this.task = task;
        this.done = false;
    }
}