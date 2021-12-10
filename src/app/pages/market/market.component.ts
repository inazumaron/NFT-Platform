import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.css']
})
export class MarketComponent implements OnInit {

  data = [
    { 'name': 'nft1', 'price':50, 'seller':'seller1', 'description':'something', 'rating':3},
    { 'name': 'nft2', 'price':45, 'seller':'seller2', 'description':'something', 'rating':2},
    { 'name': 'nft3', 'price':80, 'seller':'seller3', 'description':'something', 'rating':5}
  ]

  constructor() { }

  ngOnInit() {
  }

}
