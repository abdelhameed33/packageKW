import { Component, OnInit } from '@angular/core';
import { OrderStatus } from '../model/order-status.enum';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  orders = [
    {
      id: '2320',
      date: '11/12/2020',
      productCount: 11,
      value: 15,
      status: OrderStatus.Done
    },
    {
      id: '587',
      date: '11/12/2020',
      productCount: 10,
      value: 11,
      status: OrderStatus.InProgress
    },
    {
      id: '2320',
      date: '11/12/2020',
      productCount: 11,
      value: 15,
      status: OrderStatus.Done
    },
  ];
  constructor() { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      lengthMenu: [5, 10, 25],
      processing: true,
    };
  }

}
