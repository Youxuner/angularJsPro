import * as angular from "angular";

import { arenaComponent } from "./components/arena/arena.component";
import { heroComponent } from "./components/hero/hero.component";
// import { heroDirective } from "./directives/hero.directive";

const arenaModule = angular.module("arenaHero", []);
arenaModule.component(...arenaComponent);
arenaModule.component(...heroComponent);

arenaModule.config(["$stateProvider", $stateProvider => {
    $stateProvider.state({
        component: "appArena",
        name: "arena",
        url: "/arena",
    });
}]);
// arenaModule.directive(...heroDirective);

// arenaModule.controller("MyController", ["$scope", "$rootScope", function(scope, rootScope) {

// }

export {
    arenaModule
};