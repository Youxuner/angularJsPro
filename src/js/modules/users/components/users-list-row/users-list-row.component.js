// import template from "./users-list-row.component.html";

class UsersListComponent {
    constructor() {
        this.user = null;
    }

    $onInit() {
        console.log(this.user);
    }
}

// export const usersListRowComponent = [
//     'appUsersListRow',
//     {
//         // bindings: {
//         //     user: '<'
//         // },
//         controller: usersListRowComponent,
//         //template,
//     }
// ]