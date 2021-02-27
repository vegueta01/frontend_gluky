import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormValueInterface } from 'src/app/core/models/forms';


@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {

  @Output() formValue = new EventEmitter<FormValueInterface>();
  constructor() { }
  postForm: FormGroup;
  ngOnInit(): void {
    this.postForm = new FormGroup({
      title: new FormControl(null, [Validators.required, Validators.maxLength(255)]),
      post: new FormControl(null, [Validators.required]), // TODO: add max length from data base
    })
  }

  onSubmit() {
    this.formValue.emit(this.postForm.value)
  }
}
