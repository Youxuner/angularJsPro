import * as angular from "angular"
import "angular-resource";
import { todosListComponent } from "./components/todos-list/todos-list.component"
import { todoService } from "./services/todo.service";

const todosModule = angular.module("todos", []);

todosModule.component(...todosListComponent);
todosModule.service(...todoService);
todosModule.config(["$stateProvider", $stateProvider => {
    $stateProvider.state({
        component: "appTodos",
        name: "todos",
        url: "/todos",
    });
}]);

export {
    todosModule,
}