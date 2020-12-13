import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AuthenticationService } from 'src/app/common/service/authentication.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users: any[] = [];
  displayedColumns: string[] = ['name', 'role', 'email', 'phone', 'action'];
  dataSource!: MatTableDataSource<any>;
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private authService: AuthenticationService
  ) { }

  ngOnInit(): void {
    this.authService.getUsers().subscribe(res => {
      console.log(res);
      this.users = res;
      this.rerender();
    });
  }

  rerender(): void {
    this.dataSource = new MatTableDataSource(this.users);
    /*
    Hint: the intial page size for the table will be the result size; I did that because the table doesn't load element in DOM,
    as result some function are not working well like save and you have to move to other pages to fix that.
    */
    // this.paginator.pageSize = this.categories.length;
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
