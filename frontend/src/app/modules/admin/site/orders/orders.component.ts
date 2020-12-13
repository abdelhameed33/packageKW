import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { OrderStatus } from '../model/order-status.enum';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

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


  displayedColumns: string[] = ['id', 'date', 'count', 'value', 'status'];
  dataSource!: MatTableDataSource<any>;
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor() { }

  ngOnInit(): void {
    this.rerender();
  }

  rerender(): void {
    this.dataSource = new MatTableDataSource(this.orders);
    /*
    Hint: the intial page size for the table will be the result size; I did that because the table doesn't load element in DOM,
    as result some function are not working well like save and you have to move to other pages to fix that.
    */
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
