import template from "./user-detail.component.html";

class UserDetailComponent {
    constructor($stateParams, userService) {
        this._stateParams = $stateParams;
        this._userService = userService;
    }

    $onInit() {
        // this.toShow = false;
        console.log(this._stateParams.userId);
        this._userService.get(this._stateParams.userId).then(u => this.user = u);
    }

    // userDetail(id) {
    //     this._userService.get(this.id).then(user => this.user = user);
    //     this.toShow = true;
    // }
}

UserDetailComponent.$inject = ["$stateParams","userService"];

export const userDetailComponent = [
    "appUserDetail",
    {
        // bindings: {
        //     id: "<"
        // },
        controller: UserDetailComponent,
        template,
    }
]