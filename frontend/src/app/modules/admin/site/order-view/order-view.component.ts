import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-order-view',
  templateUrl: './order-view.component.html',
  styleUrls: ['./order-view.component.scss']
})
export class OrderViewComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'count', 'price'];
  dataSource!: MatTableDataSource<any>;
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

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
