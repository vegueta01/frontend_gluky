import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-post',
  templateUrl: './card-post.component.html',
  styleUrls: ['./card-post.component.scss']
})
export class CardPostComponent implements OnInit {
  @Input() title = '';
  @Input() post = '';
  constructor() { }

  ngOnInit(): void {
  }

}
