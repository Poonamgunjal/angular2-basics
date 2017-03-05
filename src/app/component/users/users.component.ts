import { Component, OnInit,Input,EventEmitter,Output } from '@angular/core';
import { UsersService } from './users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers:[UsersService]
})
export class UsersComponent implements OnInit {

showInfo=false;
//users=['max','Anna','Chris'];
//@Input() users: any;
@Output() alertThrown = new EventEmitter<string>();
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
