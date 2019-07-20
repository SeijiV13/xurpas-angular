import { User } from './../../../shared/models/User';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  @Input() users: User[];
  @Output() selectedDataEmitter = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  displayData(user) {
      this.selectedDataEmitter.emit(user);
  }

}
