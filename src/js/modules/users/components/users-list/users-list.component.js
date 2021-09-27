import { User } from "../../models/user";
import template from "./users-list.component.html";

class UsersListComponent {
    constructor(userService) {
        this._userService = userService;
        this.users = [
            new User(1, "Alessio", "Alex@gamil.com"),
            new User(2, "Alex", "alessio@gmail.com"),
            new User(3, "Zhang", "zhang@gmail.com")
        ];
    }

    $onInit() {
        this._userService.list().then(users => this.users = users)
        // this._http.get("http://jsonplaceholder.typicode.com/users").then(
        //     resp => this.users = resp.data.map(user => new User(user.id, user.name, user.email))
        // );
    }
}

UsersListComponent.$inject = ["userService"];

export const usersListComponent = [
    "appUsersList",
    {
        controller: UsersListComponent,
        template,
    }
];