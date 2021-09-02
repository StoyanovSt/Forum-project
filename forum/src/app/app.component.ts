import { Component, OnInit } from '@angular/core';
import { IBlog } from './shared/models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public blogs: IBlog[];

  constructor() {
    this.blogs = [];
  }

  ngOnInit(): void {
    this.blogs = [
      {
        title: 'Pets',
        description: 'What do you like more cats or dogs? Why? Share your opinion.'
      },
      {
        title: 'Mercedes or Audi',
        description: 'Open discussion about the brands.'
      },
      {
        title: 'Some title...',
        description: 'Some description goes here...'
      }
    ];
    
  }
}
