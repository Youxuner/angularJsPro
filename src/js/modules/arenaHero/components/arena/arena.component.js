import template from "./arena.component.html";
import { Hero } from "../../model/hero"

// Controller
class ArenaComponent {
    constructor($scope) {
        this._scope = $scope;
        this.heros = [
            new Hero("Andrea", 1000, 10000),
            new Hero("Group", 1, 10),
        ];
    }

    $onInit() {
        this._scope.$on("attackEv", (ev, hero) => hero === this.heros[0]
            ? this.heros[1].lifePoints -= this.heros[0].damage
            : this.heros[0].lifePoints -= this.heros[1].damage
        );
    }
}

ArenaComponent.$inject = ['$scope'];

// array info by export
export const arenaComponent = [
    "appArena",
    {
        controller: ArenaComponent,
        template,
    }

]