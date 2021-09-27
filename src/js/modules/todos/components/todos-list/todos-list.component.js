import template from "./todos-list.component.html";

class TodosListComponent {
    constructor(todoService) {
        this._todoService = todoService;
    }

    $onInit() {
        this._todoService.list().then(todos =>  this.todos = todos);
        console.log(this.todos);
    }
}

TodosListComponent.$inject = ["todoService"];

export const todosListComponent = [
    "appTodos",
    {
        controller: TodosListComponent,
        template,
    }
]