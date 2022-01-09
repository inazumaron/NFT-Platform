import { Component } from '@angular/core';
import { AcctService } from './acct.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'nft-trading';
  loggedIn: boolean = false;

  s: AcctService;
  constructor(theService: AcctService) {
    this.s = theService;
  }

  ngOnInit() {
    this.s.logChange(this.doThis.bind(this));
  }

  doThis() {
    this.loggedIn = !this.loggedIn;
  }
}
