import { Component, OnInit,Input,EventEmitter,Output } from '@angular/core';
import { UsersService } from './users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers:[UsersService]
})
export class UsersComponent implements OnInit {

value='Enter a info';
showInfo=false;
//users=['max','Anna','Chris'];
//@Input() users: any;

@Input() userData:string;

//this.value=this.userData;

@Output() alertThrown = new EventEmitter<string>();
@Output() info = new EventEmitter<string>();

  onClick() {
    this.info.emit(this.userData);
  }
color='green';
   users: any[];

    constructor(private usersService:UsersService){
    this.users=this.usersService.getUsers();
    }

  ngOnInit() {
  }
  onShowAlert(){
 this.alertThrown.emit('This is a my message');
  }
}
