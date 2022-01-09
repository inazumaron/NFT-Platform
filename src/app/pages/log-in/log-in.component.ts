import { Component, OnInit } from '@angular/core';
import { AcctService } from 'src/app/acct.service';
import {Router} from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  username:string="";
  password:string="";

  constructor(
    private notification: NzNotificationService,
    private acctService: AcctService,
    private route:Router) {}

  ngOnInit(): void {
  }

  async logIn() {
    try {
      this.acctService.logIn(this.username, this.password);
      this.acctService.tempLogIn();
      this.route.navigate(['/market']);
    } catch (error) {
      this.notification.error("Error","Login failed");
    }
  }
}
