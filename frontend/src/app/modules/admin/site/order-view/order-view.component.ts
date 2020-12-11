import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-view',
  templateUrl: './order-view.component.html',
  styleUrls: ['./order-view.component.scss']
})
export class OrderViewComponent implements OnInit {


  orders = [
    {
      id: '1',
      name: 'Books',
      productCount: 1,
      price: 15,
    },
    {
      id: '2',
      name: 'Notebook',
      productCount: 3,
      price: 10,
    },
    {
      id: '3',
      name: 'Pins',
      productCount: 5,
      price: 7,
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }
}
