import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OffersComponent implements OnInit {

  isLoading: boolean = false;
  typeShown: boolean = false; //type is for buyer/seller. true - product are yours, false - your offers to product

  data = [
    { name: 'your nft1', type: true, price: '10', party2: 'Joe'},
    { name: 'your nft3', type: true, price: '20', party2: 'Bob'},
    { name: 'your nft5', type: true, price: '30', party2: 'no offers'},
    { name: 'nft2', type: false, price: '15', party2: 'Tim'},
    { name: 'nft4', type: false, price: '25', party2: 'Mike'},
    { name: 'nft6', type: false, price: '35', party2: 'Douge'}
  ]

  constructor(private route:Router) { }

  ngOnInit() {
  }

  change(): void {
    this.typeShown = !this.typeShown;
  }

  trade(item) {
    if (!item.type)
      this.route.navigate(['/trade',{name: item.name, price: item.price, mode:"false"}]);
    else
      this.route.navigate(['/trade',{name: item.name, price: item.price, mode:"true"}]);
  }

}
