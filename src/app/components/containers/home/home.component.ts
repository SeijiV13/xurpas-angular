import { GetUsers } from './../../actions/user.actions';
import { Store } from '@ngxs/store';
import { UserFormComponent } from './../../dumb/user-form/user-form.component';
import { User } from './../../../shared/models/User';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit{

  users: User[] = [];

  selectedUser: User;
  constructor(private store: Store) {}
   

   ngOnInit(){

     this.getUsers();
   }

   getUsers() {
      this.store.dispatch(new GetUsers).subscribe((data) => {});
   }
  
   submitValue(user) {
     console.log(user);
   }

}
