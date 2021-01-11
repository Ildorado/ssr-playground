import { Component, OnInit } from '@angular/core';
import { CustomHttpClientService } from '../custom-http-client.service';
import { Post } from '../../typescript/interfaces';
@Component({
  selector: 'app-get-posts',
  templateUrl: './get-posts.component.html',
  styleUrls: ['./get-posts.component.scss'],
})
export class GetPostsComponent implements OnInit {
  post!: Post;
  input = `fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then((response) => response.json())
    .then((json) => console.log(json));`;
  panelOpenState: boolean = false;
  constructor(private http: CustomHttpClientService) {}

  ngOnInit(): void {
    this.http
      .get<Post>('https://jsonplaceholder.typicode.com/posts/1')
      .subscribe((data) => {
        this.post = data;
      });
  }
}
