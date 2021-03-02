import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormValueInterface } from 'src/app/core/models/forms';

@Component({
  selector: 'app-card-post',
  templateUrl: './card-post.component.html',
  styleUrls: ['./card-post.component.scss']
  // TODO: apply dumb component
})
export class CardPostComponent implements OnInit {
  @Input() postId = '';
  @Input() title = '';
  @Input() body = '';
  @Input() state: 'pending' | 'published' | 'rejected' = null;
  @Output() editButton: EventEmitter<FormValueInterface> = new EventEmitter<FormValueInterface>();
  @Output() deleteButton: EventEmitter<FormValueInterface> = new EventEmitter<FormValueInterface>();
  constructor() { }

  ngOnInit(): void {
  }

  get iconState() {
    switch (this.state) {
      case 'pending':
        return 'warning_amber';
      case 'rejected':
        return 'cancel';
      case 'published':
        return 'done_all';
      default:
        return 'help_outline';
    }
  }

  get colorState() {
    switch (this.state) {
      case 'pending':
        return 'darkorange';
      case 'rejected':
        return 'red';
      case 'published':
        return 'green';
      default:
        return 'red';
    }
  }

  editButtonEmit(){
    this.editButton.emit({
      title: this.title,
      body: this.body,
      postId: this.postId,
    });
  }

  deleteButtonEmit() {
    this.deleteButton.emit({
      title: this.title,
      body: this.body,
      postId: this.postId,
    });
  }

}
