import { Component, OnInit } from '@angular/core';
import { AcctService } from 'src/app/acct.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  userName:string = "Sample Username";
  realName:string = "Sample Name";
  Email : string = "Sample Email";
  Wallet : string = "sAmp13_W@l13T";
  mobile_number: string = "09101010";

  constructor(private acctService:AcctService,
    private route:Router) { }

  ngOnInit() {
    /*
    try {
      var data = this.acctService.getSelf();
      this.userName = data['username'];
      this.realName = data['name'];
      this.Email = data['email'];
      this.Wallet = data['mobile_number'];
    } catch (error) {
      console.error(error);
      console.error("could not retrieve data");
    }*/
    
  }

  logOut() {
    try {
      this.acctService.logOut(this.userName);
      this.acctService.tempLogOut();
      this.route.navigate(['/logIn']);
    } catch (error) {
      console.error(error);
    }
  }
}
