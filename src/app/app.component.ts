import { Component, OnInit, HostBinding } from '@angular/core';
import { CustomHttpClientService } from './custom-http-client.service';
import { User } from '../typescript/interfaces';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  users: User[] = [];

  constructor(private http: CustomHttpClientService) {}

  @HostBinding('class')
  elementClass = 'mat-app-background';

  ngOnInit(): void {
  //   this.http
  //     .get<User[]>('https://jsonplaceholder.typicode.com/users')
  //     .subscribe((users) => {
  //       this.users = users;
  //     });
  }
}
