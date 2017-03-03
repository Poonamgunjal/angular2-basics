import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

showInfo=false;
users=['max','Anna','Chris'];
color='green';
  constructor() { }

  ngOnInit() {
  }

}
