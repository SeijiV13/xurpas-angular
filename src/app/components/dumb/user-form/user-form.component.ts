import { User } from './../../../shared/models/User';
import { Observable } from 'rxjs';
import { Select } from '@ngxs/store';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms";
import { UserState } from './../../states/user.state';
@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
 @Input() userDetails: any;
 @Output() formValueEmitter = new EventEmitter();
 @Select(UserState.getSelectedUserState) selecteUser$: Observable<User>;
 formTitle = "Create User";
 postForm: FormGroup;


  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.initializeForm();
    this.selecteUser$.subscribe((data) => {
      this.postForm.patchValue(data);
    })
    // this.listenToPostForm()
  }

  initializeForm() {
    this.postForm = this.formBuilder.group({
      name: [""],
      age: [""],
      address: [""]
    });
  }

  getValue() {
    this.formValueEmitter.emit(this.postForm.value);
  }

  clear() {
    this.postForm.reset();
  }

  listenToPostForm() {
    this.postForm.valueChanges.subscribe((formValue) => {
      console.log(formValue);
    })
  }
}
