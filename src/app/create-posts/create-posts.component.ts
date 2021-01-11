import { Component, OnInit } from '@angular/core';
import { CustomHttpClientService } from '../custom-http-client.service';
import { Post } from '../../typescript/interfaces';
@Component({
  selector: 'app-create-posts',
  templateUrl: './create-posts.component.html',
  styleUrls: ['./create-posts.component.scss'],
})
export class CreatePostsComponent implements OnInit {
  post!: Post;
  input = `fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));`;

  panelOpenState: boolean = false;
  constructor(private http: CustomHttpClientService) {}

  ngOnInit(): void {
    this.http
      .set<Post>('https://jsonplaceholder.typicode.com/posts', {
        title: 'foo',
        body: 'bar',
        userId: 1,
      })
      .subscribe((data) => {
        this.post = data;
      });
  }
}
