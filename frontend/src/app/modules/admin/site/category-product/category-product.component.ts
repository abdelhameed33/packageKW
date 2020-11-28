import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from '../model/category.model';
import { CategoryService } from '../service/category.service';

@Component({
  selector: 'app-category-product',
  templateUrl: './category-product.component.html',
  styleUrls: ['./category-product.component.scss']
})
export class CategoryProductComponent implements OnInit {

  currentCategory: Category = new Category();
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private categoryService: CategoryService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(res => {
      const categoryId = res.get('id');
      console.log(categoryId);
      this.getCategory(categoryId);
    });

  }

  getCategory(categoryId: any): void {
    this.categoryService.getById(categoryId).subscribe(res => {
      this.currentCategory = res;
    });
  }

}
