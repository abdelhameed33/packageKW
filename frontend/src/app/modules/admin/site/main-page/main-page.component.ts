import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subject } from 'rxjs';
import { MainService } from 'src/app/common/service/main.service';
import { Category } from '../model/category.model';
import { CategoryService } from '../service/category.service';
declare var $: any;

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit, AfterViewInit {

  categories: Category[] = [];
  subCategories: Category[] = [];
  currentCategory = new Category('', '');
  analytics: any[] = [];
  displayedColumns: string[] = ['name', 'childs', 'action'];
  subCategoryColumns: string[] = ['name', 'count', 'action'];
  dataSource!: MatTableDataSource<Category>;
  subDataSource!: MatTableDataSource<Category>;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild('MatPaginator1')
  subPaginator!: MatPaginator;
  @ViewChild('MatSort1') subSort!: MatSort;
  parentId: any;

  constructor(
    private categoryService: CategoryService,
    private mainService: MainService
  ) {
    // Assign the data to the data source for the table to render

  }

  ngAfterViewInit(): void {
    try {
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.subDataSource.paginator = this.subPaginator;
      this.subDataSource.sort = this.subSort;
    } catch (e) { }
  }

  ngOnInit(): void {
    this.getAllCategories();

    this.mainService.getAnalyticsData().subscribe(res => {
      console.log(res);
      this.analytics = res;
    });

  }

  rerender(): void {
    this.dataSource = new MatTableDataSource(this.categories);
    this.subDataSource = new MatTableDataSource(this.subCategories);
    /*
    Hint: the intial page size for the table will be the result size; I did that because the table doesn't load element in DOM,
    as result some function are not working well like save and you have to move to other pages to fix that.
    */
    // this.paginator.pageSize = this.categories.length;
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.subDataSource.paginator = this.subPaginator;
    this.subDataSource.sort = this.subSort;
  }
  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  subFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.subDataSource.filter = filterValue.trim().toLowerCase();

    if (this.subDataSource.paginator) {
      this.subDataSource.paginator.firstPage();
    }
  }


  reInintialize(): void {
    this.currentCategory = new Category();
  }
  getAllCategories(): void {
    this.categoryService.get().subscribe(res => {
      this.categories = res;
      this.rerender();
    });
  }

  getSubCategories(parentid: any): void {
    this.parentId = parentid;
    if (this.parentId) {
      this.categoryService.get({ parentid }).subscribe(res => {
        this.subCategories = res;
        this.rerender();
      });
    }
  }


  saveOrUpdate(): void {
    let result;
    if (this.currentCategory.id) {
      result = this.categoryService.update(this.currentCategory);
    } else {
      result = this.categoryService.save(this.currentCategory);
    }
    result.subscribe(res => {
      console.log(res);
      this.getAllCategories();
      this.getSubCategories(this.parentId);
      $('#add-category').modal('hide');
    });
  }

  deleteCategory(): void {
    this.categoryService.delete(this.currentCategory).subscribe(res => {
      console.log(res);
      this.getAllCategories();
      this.subCategories = this.subCategories.filter(cat => cat.id !== this.currentCategory.id);
      this.currentCategory = new Category('', '');
    });
  }

}
