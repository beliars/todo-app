import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let todos = [
        { id: 1, task: "Learn Angular2", done: false },
        { id: 2, task: "Learn TypeScript", done: false },
        { id: 3, task: "Learn ES6", done: true }
    ];
    return {todos};
  }
}