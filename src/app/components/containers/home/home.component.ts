import { User } from './../../../shared/models/User';
import { UserService } from './../../../components/services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit{

  users: User[] = [];

  constructor(private userService: UserService) {}
   

   ngOnInit(){

     this.getUsers();
   }

   getUsers() {
     this.users = this.userService.getUsers();
   }

   
   submitValue(user) {
     console.log(user);
   }

}
