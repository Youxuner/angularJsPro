// Styles
import "../scss/style.scss";

// Modules
import { usersModule } from "./modules/users/users.module";
import { arenaModule } from "./modules/arenaHero/arenaHero.module";
import { todosModule } from "./modules/todos/todos.module";

// Dependencies
import "jquery";
import "bootstrap/dist/js/bootstrap";
// import * as resource from "angular-resource";
import "angular-resource";
import * as angular from "angular";
import "@uirouter/angularjs";

import appImprovedHighlight from './directives/improved-highlight/improved-highlight.directive';
import appHighlight from './directives/highlight/highlight.directive';

const appModule = angular.module("App", [
  "ui.router",
  "ngResource",
  usersModule.name,
  arenaModule.name,
  todosModule.name,  
]);
// appModule.directive("appHighlight", [() => {

// }])

// appModule.directive(...hightLightDirective);
appModule.directive(...appImprovedHighlight);
appModule.directive(...appHighlight);

appModule.controller("HomeController", function HomeController() {
  this.title = "My first AngularJS app!";
  this.subtitle =
    "This framework looks awesome, but I've still got a lot to learn...";
});

appModule.controller("MyController", ["$scope", "$rootScope", function(scope, rootScope) {
  
  /**
  * @param {boolean} isSum
  *
  */
  scope.handleCounter = function(isSum) {
    console.log(typeof isSum);
    if (isSum)
      scope.value++;
    else
      scope.value--;
  }

  scope.value = 0;

  scope.$on("customEv", (p1, p2, p3) => console.log(p1, p2, p3));
}]);

appModule.controller("OtherController", ["$scope", function(scope) {
  setTimeout(() => scope.$emit("customEv", "Ciao", 1254), 10000);
}]);