import { Component } from '@angular/core';
import { UsersService } from './component/users/users.service';
@Component({
  selector: 'app-root',
   //directives: [app-communicator],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  //providers:[UsersService]
})
export class AppComponent {
  title = 'app works!';
  age   = 27;
  childData='hiiii';

//registeredUsers=['max','Anna','Chris'];

  person={
    name:'MAX',
     age:27
  }

  users: any[];

  constructor(private usersService:UsersService){
  this.users=this.usersService.getUsers();
  }
 getName(){
   return 'MAX';
 }
  setAge(age:number){
    this.age=age;
  }

  onChildAlert(message: string){
    alert(message);
  }
 childInfo(message: string){
// console.log('message',this.childData,message);
this.childData=message;
   // alert(message);
  }

   child2Info(message: string){
  // console.log('message',this.childData,message);
  this.childData=message;
     // alert(message);
    }
}
