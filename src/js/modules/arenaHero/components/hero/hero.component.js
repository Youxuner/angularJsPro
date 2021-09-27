import template from "./hero.component.html";

export class HeroComponent {
    constructor($scope) {
        this.maxLifePoints = null;
        this._scope = $scope;
    }

    $onInit() {
        console.log("$onInit()");
        // this.hero = this.h;
        // console.log(this.h);
        this.maxLifePoints = this.hero.lifePoints;
        console.log(this.maxLifePoints);
    }

    attack() {
        this._scope.$emit("attackEv", this.hero);
    }
}

HeroComponent.$inject = ['$scope'];

export const heroComponent = [
    "appHero",
    {
        bindings : {
            hero: '='
        },
        controller: HeroComponent,
        template,
    }
]