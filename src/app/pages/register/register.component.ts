import { Component, OnInit } from '@angular/core';
import { AcctService } from 'src/app/acct.service';
import { NzNotificationService } from 'ng-zorro-antd';
import { Router } from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  username: string = "";
  password: string = "";
  password_rep: string = "";
  name: string = "";
  email: string = "";
  walletID: string = "";
  mobile_number: string = "";

  constructor(
    private service: AcctService,
    private route: Router,
    private notification: NzNotificationService
    ) { }

  ngOnInit() {
  }

  wrapper(){
    //check variables here
    if (this.password == this.password_rep){
      this.register();
    }else{
      this.notification.error("Error","Password/s dont match")
    }
  }

  async register(){ 
    try {
      this.service.register(this.username,this.password,this.name,this.email,this.walletID,this.mobile_number);
      this.notification.success("Success","Successfully registered");
      this.route.navigate(["/logIn"]);
    } catch (error) {
      this.notification.error("Failed","Something went wrong");
    }
  }

}
