import template from "./users-list-row.component.html";

export const usersListRowDirective = [
    "appUsersListRow",
    () => {
        return {
            link: (scope, el, attr) => {
                //console.log(attr);
                scope.user = JSON.parse(attr.appUsersListRow);
                //console.log(scope.user);
            },
            scope: {
                appUsersListRow: "@"
            },
            template
        };
    }
];