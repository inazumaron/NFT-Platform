import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { AcctService } from 'src/app/acct.service';

@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.css']
})
export class MarketComponent implements OnInit {

  isLoading : boolean = false;
  offers : any = [];

  sample_data = [
    { 'nft_id': 'nft1', 'amount':50, 'seller':'seller1', 'buyer':'description here', 'createdAt':'10/21/21'},
    { 'nft_id': 'nft2', 'amount':45, 'seller':'seller2', 'buyer':'description here', 'createdAt':'10/8/21'},
    { 'nft_id': 'nft3', 'amount':80, 'seller':'seller3', 'buyer':'description here', 'createdAt':'9/13/21'}
  ]

  constructor(
    private route:Router,
    private service: AcctService) { }

  ngOnInit() {
    this.offers = this.sample_data;
    /*
    try {
      this.offers = this.service.listOffers();
      this.isLoading = false;
    } catch (error) {
      console.log("error getting list");
      console.error(error);
      this.isLoading = false;
    }*/
  }

  trade(item) {
    this.route.navigate(['/trade',{name: item.nft_id, price: item.amount, mode: "false"}]);
  }
}
