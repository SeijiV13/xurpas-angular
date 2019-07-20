import { User } from './../../shared/models/User';
export class GetUsers {
    static readonly type = "[User] Get users";
}

export class AddUser {
    static readonly type = "[User] Add User";
    constructor(user: User){}
}

export class UpdateUser {
    static readonly type = "[User] Update User";
    constructor(payload: User) {}
}

export class DeleteUser {
    static readonly type = "[User] Delete User";
    constructor(payload: string){}
}

export class SetSelectedUser {
    static readonly type = "[User] Set Selected User";
    constructor(public payload: User) {}
}