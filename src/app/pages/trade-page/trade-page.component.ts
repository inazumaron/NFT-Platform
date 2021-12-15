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

  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    this.item = this.route.snapshot.paramMap.get('name');
    this.price = this.route.snapshot.paramMap.get('price');
  }

}
