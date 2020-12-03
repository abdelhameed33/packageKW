import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/common/service/product.service';
import { Category } from '../model/category.model';
import { Product } from '../model/product.model';
import { CategoryService } from '../service/category.service';
@Component({
  selector: 'app-category-product',
  templateUrl: './category-product.component.html',
  styleUrls: ['./category-product.component.scss']
})
export class CategoryProductComponent implements OnInit {

  currentCategory: Category = new Category();
  products: Product[] = [];
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private categoryService: CategoryService,
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(res => {
      const categoryId = res.get('id');
      console.log(categoryId);
      this.getCategory(categoryId);
      this.getCategoryProducts(categoryId);
    });


  }

  getCategory(categoryId: any): void {
    this.categoryService.getById(categoryId).subscribe(res => {
      this.currentCategory = res;
    });
  }

  getCategoryProducts(categoryId: any): void {
    this.productService.getCategoryProduct(categoryId).subscribe(res => {
      console.log(res);
      this.products = res;
    });
  }

}
