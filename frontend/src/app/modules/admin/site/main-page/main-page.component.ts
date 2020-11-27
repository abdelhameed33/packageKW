import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Category } from '../model/category.model';
import { CategoryService } from '../service/category.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  persons = [{
    id: 4,
    firstName: 'Ahmed',
    lastName: 'Eldeeb'
  }];
  categories: Category[] = [];
  currentCategory = new Category('', '');
  // We use this trigger because fetching the list of persons can be quite long,
  // thus we ensure the data is fetched before rendering
  dtTrigger: Subject<any> = new Subject<any>();

  constructor(
    private categoryService: CategoryService
  ) { }

  ngOnInit(): void {

    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      lengthMenu: [5, 10, 25],
      processing: true,
    };
    this.getAllCategories();

  }

  reInintialize(): void {
    this.currentCategory = new Category();
  }
  getAllCategories(): void {
    this.categoryService.get().subscribe(res => {
      this.categories = res;
    });
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
    });
  }

}
