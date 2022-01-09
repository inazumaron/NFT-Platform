import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { AcctService } from 'src/app/acct.service';

@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.css']
})
export class MarketComponent implements OnInit {

  isLoading : boolean = true;
  offers : any = [];

  data = [
    { 'name': 'nft1', 'price':50, 'seller':'seller1', 'description':'something', 'rating':3},
    { 'name': 'nft2', 'price':45, 'seller':'seller2', 'description':'something', 'rating':2},
    { 'name': 'nft3', 'price':80, 'seller':'seller3', 'description':'something', 'rating':5}
  ]

  constructor(
    private route:Router,
    private service: AcctService) { }

  ngOnInit() {
    try {
      this.offers = this.service.listOffers();
      this.isLoading = false;
    } catch (error) {
      console.log("error getting list");
      console.error(error);
      this.isLoading = false;
    }
  }

  trade(item) {
    this.route.navigate(['/trade',{name: item.name, price: item.price, mode: "false"}]);
  }
}
