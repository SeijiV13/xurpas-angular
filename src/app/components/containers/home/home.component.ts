import { UserFormComponent } from './../../dumb/user-form/user-form.component';
import { User } from './../../../shared/models/User';
import { UserService } from './../../../components/services/user.service';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit{

  users: User[] = [];
  @ViewChild("userForm") userForm: UserFormComponent;
  selectedUser: User;
  constructor(private userService: UserService) {}
   

   ngOnInit(){

     this.getUsers();
   }

   getUsers() {
    this.users = this.userService.getUsers();
   }

   setSelectedUser(user) {
     this.userForm.postForm.patchValue(user);

   }

   
   submitValue(user) {
     console.log(user);
   }

}
