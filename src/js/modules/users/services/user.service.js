import { User } from "../models/user";

class UserService {
    constructor($http, $resource) {
        this._http = $http;
        this._resource = $resource;

        this._userResource = $resource("http://jsonplaceholder.typicode.com/users/:userId");
    }

    list() {
        return this._http.get("http://jsonplaceholder.typicode.com/users").then(
            resp => resp.data.map(user => new User(user.id, user.name, user.email))
        );
    }

    get(userId) {
        // const url = "http://jsonplaceholder.typicode.com/users/".concat(id);
        // console.log(url);
        return this._userResource.get({userId}).$promise.then(
            resp => new User(resp.id, resp.name, resp.email)
        );
    }
}

UserService.$inject = ["$http", "$resource"]

export const userService = [
    "userService",
    UserService,
]