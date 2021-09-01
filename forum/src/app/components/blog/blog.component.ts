import { Component, Input, OnInit } from '@angular/core';
import { IBlog } from 'src/app/shared/models';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  @Input()
  currentBlog!: IBlog;

  constructor() { }

  ngOnInit(): void {
  }

}
