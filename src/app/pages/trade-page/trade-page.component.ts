import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-trade-page',
  templateUrl: './trade-page.component.html',
  styleUrls: ['./trade-page.component.css']
})
export class TradePageComponent implements OnInit {

  item:string = "";
  price:string = "";
  seller:string = "";
  transactionId: string = "";
  chat_temp: any = [];
  chat_cont: string = "";

  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    this.item = this.route.snapshot.paramMap.get('name');
    this.price = this.route.snapshot.paramMap.get('price');
    this.seller = this.route.snapshot.paramMap.get('mode');
  }

  saveTID() {
    this.item = this.transactionId;
  }

  addChat() {
    this.chat_temp.push("You: "+this.chat_cont);
    if (this.chat_temp.length > 9)
      this.chat_temp.shift();
    this.chat_cont = "";
  }

}
