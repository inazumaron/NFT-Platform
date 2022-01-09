import { Component, OnInit } from '@angular/core';
import { AcctService } from 'src/app/acct.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  constructor(private acctService: AcctService,
    private route:Router) {}

  ngOnInit(): void {
  }

  logIn() {
    this.acctService.tempLogIn();
    this.route.navigate(['/market']);
  }
}
