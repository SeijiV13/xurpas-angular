import { SetSelectedUser } from './../../actions/user.actions';
import { Observable } from 'rxjs';
import { UserState } from './../../states/user.state';
import { User } from './../../../shared/models/User';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Store, Select } from '@ngxs/store';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  @Input() users: User[];
  @Select(UserState.getUsersState) users$: Observable<User[]>;
  constructor(private store: Store) { }

  ngOnInit() {
    this.users$.subscribe((users: User[]) => {
      this.users = users;
    })
  }

  displayData(user) {
     this.store.dispatch(new SetSelectedUser(user));
  }

}
