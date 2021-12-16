import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {

  isLoading : boolean = false;

  data = [
    { 'name': 'nft 0', 'price':50, 'seller':'seller1', 'description':'something'},
    { 'name': 'space cat', 'price':45, 'seller':'seller2', 'description':'something'},
    { 'name': 'sample', 'price':80, 'seller':'seller3', 'description':'something'}
  ]

  constructor() { }

  ngOnInit() {
  }

}
