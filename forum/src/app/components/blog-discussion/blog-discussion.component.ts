import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-discussion',
  templateUrl: './blog-discussion.component.html',
  styleUrls: ['./blog-discussion.component.css']
})
export class BlogDiscussionComponent implements OnInit {
  message!: string;
  messages: string[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  messageSubmitHandler(event: Event, message: HTMLInputElement): void {
    event.preventDefault();
    this.message = message.value;
    this.messages.push(this.message);
  }

}
