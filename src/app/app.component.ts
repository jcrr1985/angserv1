import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { FlexLayoutModule } from '@angular/flex-layout';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  users;

  constructor(protected userService: UserService) { }


      ngOnInit() {
/*Handled using then*/
        this.userService.getUsers()
          .then((d) => d.json())
          .then((res) => {
            this.users = res.results;
          });

/*Handled using Async/Await*/
        this.userService.AsyncAwaitGetUsers();
        }

      }







