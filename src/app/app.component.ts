import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  age   = 27;
  person={
    name:'MAX',
     age:27
  }
 getName(){
   return 'MAX';
 }
  setAge(age:number){
    this.age=age;
  }
}
