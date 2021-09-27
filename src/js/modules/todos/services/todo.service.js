import { Todo } from "../models/todo"

class TodoService {
    constructor($http, $resource) {
        this._http = $http;
        this._resource = $resource;

        this._todoResource = $resource("http://jsonplaceholder.typicode.com/todos/:todoId");
    }

    list() {
        return this._http.get("http://jsonplaceholder.typicode.com/todos").then(
            resp => resp.data.map(todo => new Todo(todo.userId, todo.id, todo.title, todo.completed))
        );
    }

    get(todoId) {
        return this._todoResource.get({todoId}).$promise.then(
            resp => new Todo(resp.userId, resp.id, resp.title, resp.completed)
        )
    }

}

TodoService.$inject = ["$http", "$resource"];

export const todoService = [
    "todoService",
    TodoService,
]