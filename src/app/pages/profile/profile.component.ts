import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

}
