import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-communicator',
  templateUrl: './communicator.component.html',
  styleUrls: ['./communicator.component.css']
})
export class CommunicatorComponent implements OnInit {

@Input() passData:any;
@Output() communicate = new EventEmitter<string>();

  onClick() {
    this.communicate.emit(this.passData);
  }
  constructor() { }

  ngOnInit() {
  console.log('passData',this.passData);
  }
}
