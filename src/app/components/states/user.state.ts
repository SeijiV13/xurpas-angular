
import { tap } from 'rxjs/operators';
import { UserService } from './../services/user.service';
import { GetUsers, SetSelectedUser } from './../actions/user.actions';
import { User } from './../../shared/models/User';
import { State, Selector, StateContext, Action, Store } from '@ngxs/store';

export class UserStateModel {
    users: User[];
    selectedUser: User
}

@State<UserStateModel> ({
    name: "userState",
    defaults: {
      users: [],
      selectedUser: new User()
    }
})

export class UserState {
    constructor(private userService: UserService) {}
    @Selector()
   static getUserState(state: UserStateModel) {
        return state;
    }

    @Selector()
    static getUsersState(state: UserStateModel) {
        return state.users;
    }

    @Selector()
    static getSelectedUserState(state: UserStateModel) {
        return state.selectedUser;
    }

    @Action(GetUsers)
    getUsers( {getState, patchState}: StateContext<UserStateModel>) {
      const state = getState();
      return this.userService.getUsers().pipe(
          tap((users: User[]) => {
              patchState({
                 users: users
              })
          })
      )
    }

    @Action(SetSelectedUser)
    setSelectedUser( {patchState}: StateContext<UserStateModel>, {payload}: SetSelectedUser) {
      patchState({
          selectedUser: payload
      })
    }
}