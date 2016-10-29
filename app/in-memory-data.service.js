"use strict";
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var todos = [
            { id: 1, task: "Learn Angular2", done: false },
            { id: 2, task: "Learn TypeScript", done: false },
            { id: 3, task: "Learn ES6", done: false }
        ];
        return { todos: todos };
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-data.service.js.map