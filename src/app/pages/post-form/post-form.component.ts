import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { FormValueInterface } from 'src/app/core/models/forms';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss'],
})
export class PostFormComponent implements OnInit {

  @ViewChild(FormGroupDirective) myNgForm;
  @Output() formSubmit: EventEmitter<FormValueInterface> = new EventEmitter<FormValueInterface>();
  @Input() formValues: Subject<FormValueInterface> = new Subject<FormValueInterface>();
  postForm: FormGroup;
  constructor() {
    this.postForm = new FormGroup({
      title: new FormControl(null, [Validators.required, Validators.maxLength(255)]),
      body: new FormControl(null, [Validators.required]), // TODO: add max length from data base
      postId: new FormControl(null),
    });
   }
  
  ngOnInit(): void {
    this.formValues.subscribe((values) => {
      this.myNgForm.resetForm()
      this.postForm.get("title").setValue(values.title);
      this.postForm.get("body").setValue(values.body);
      this.postForm.get("postId").setValue(values.postId);
    });
  }

  onSubmit() {
    this.formSubmit.emit(this.postForm.value);
  }
}
