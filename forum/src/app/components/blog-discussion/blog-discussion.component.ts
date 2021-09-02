import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog-discussion',
  templateUrl: './blog-discussion.component.html',
  styleUrls: ['./blog-discussion.component.css']
})
export class BlogDiscussionComponent implements OnInit {
  message!: string;
  messages: string[] = [];
  currentTheme: string = this.activatedRoute.snapshot.params.currentTheme;

  constructor(private activatedRoute: ActivatedRoute ) { }

  ngOnInit(): void {
    
  }

  messageSubmitHandler(event: Event, message: HTMLInputElement): void {
    event.preventDefault();
    this.message = message.value;
    this.messages.push(this.message);
  }

}
