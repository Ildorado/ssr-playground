import { Component, OnInit } from '@angular/core';
import { CustomHttpClientService } from './custom-http-client.service';

interface User {
  name: string;
  email: string;
  website: string;
}

@Component({
  selector: 'app-root',
  template: `
    <div>
      <h1 i18n="@@usersListTitle">Users List</h1>
      <button i18n="@@getUsersButton">Get Users</button>
      <div *ngIf="users && users.length">
        <div *ngFor="let user of users">
          <div>Name: {{ user.name }}</div>
          <div>Email: {{ user.email }}</div>
          <div>Site: {{ user.website }}</div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  users: User[] = [];

  constructor(private http: CustomHttpClientService) {}

  ngOnInit(): void {
    this.http
      .get<User[]>('https://jsonplaceholder.typicode.com/users')
      .subscribe((users) => {
        this.users = users;
      });
  }
}
