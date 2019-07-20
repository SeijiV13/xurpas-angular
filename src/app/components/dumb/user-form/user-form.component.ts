import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms";
@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
 @Input() userDetails: any;
 @Output() formValueEmitter = new EventEmitter();
 formTitle = "Create User";
 postForm: FormGroup;


  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.initializeForm();
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
