import * as angular from "angular";
import { userDetailComponent } from "./components/user-detail/user-detail.component";
// import { usersListRowComponent } from "./components/users-list-row/users-list-row.component";
import { usersListComponent } from "./components/users-list/users-list.component";
import { usersListRowDirective } from "./directives/users-list-row.directive";
import { userService } from "./services/user.service";

const usersModule = angular.module("users", []);

usersModule.component(...usersListComponent);
usersModule.component(...userDetailComponent);
//usersModule.component(...usersListRowComponent);

usersModule.directive(...usersListRowDirective);

usersModule.service(...userService);

usersModule.config(["$stateProvider", $stateProvider => {
    $stateProvider.state({
        component: "appUsersList",
        name: "users",
        url: "/users"
    });

    $stateProvider.state({
        component: "appUserDetail",
        name: "user-detail",
        url: "/users/:userId"
    })
}]);
usersModule.config(["$httpProvider", $httpProvider => {
    $httpProvider.interceptors.push(() => {
      return {
        request: config => {
          Object.assign(config.headers, {
              "Authentication": "Bearer: 123455789ASSDEDDDF"
          });
          
          console.log(config);
          return config;
        }
      };
    });
  }])

export {
    usersModule
};