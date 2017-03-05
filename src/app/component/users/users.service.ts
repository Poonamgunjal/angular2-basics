import { Injectable } from '@angular/core';

@Injectable()
export class UsersService {
 private registeredUsers=['max','Anna','Chris'];

  constructor() { }

  getUsers(){
   return this.registeredUsers;
  }

}
