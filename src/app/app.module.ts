import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { UsersComponent } from './component/users/users.component';
import { UsersService } from './component/users/users.service';
import { CommunicatorComponent } from './component/communicator/communicator.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    CommunicatorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
