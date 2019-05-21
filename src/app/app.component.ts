import { Component, OnInit } from '@angular/core';
import {  UserService} from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  users = [];

  datafromService;

  constructor(protected userService: UserService) {}

  ngOnInit() {

   this.userService.getUsers()
      .subscribe(
        (data) => {
          for (let index = 0; index < 5; index++) {
          this.users.push(data['results'][index]);

          }

          console.log( this.users);
        },
        (error) => {
          console.error(error);
      }
    );

  }

}
