import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  /*Quick console.log()*/
  cl(q: any) {
    console.log(q);
  }
  /*End of Quick console.log()*/

  getUsers() {
    // return this.http.get('https://randomuser.me/api/?results=25');
    return fetch('https://randomuser.me/api/?results=25');
  }



  async AsyncAwaitGetUsers() {
    const cat = await fetch('https://randomuser.me/api/?results=25');
    const catJson = await cat.json();
    console.log(catJson);

  }
}
