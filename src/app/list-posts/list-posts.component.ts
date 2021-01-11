import { Component, OnInit } from '@angular/core';
import { CustomHttpClientService } from '../custom-http-client.service';
import { Post } from '../../typescript/interfaces';

@Component({
  selector: 'app-list-posts',
  templateUrl: './list-posts.component.html',
  styleUrls: ['./list-posts.component.scss'],
})
export class ListPostsComponent implements OnInit {
  posts!: any;
  input = `fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((json) => console.log(json));`;
  panelOpenState: boolean = false;
  constructor(private http: CustomHttpClientService) {}

  ngOnInit(): void {
    this.http
      .get<Post[]>('https://jsonplaceholder.typicode.com/posts')
      .subscribe((data) => {
        this.posts = [...data.slice(0, 2), '...', data[data.length - 1]];
      });
  }
}
