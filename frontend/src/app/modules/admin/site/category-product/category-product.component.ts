import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SERVER } from 'src/app/common/constants/app.constants';
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
  products: any;
  productToDelete = new Product();
  SERVER = SERVER;
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
    this.productService.getCategoryProducts(categoryId).subscribe(res => {
      console.log(res);
      this.products = res.data;
    });
  }

  deleteProduct(): void {
    this.productService.deleteOne(this.productToDelete?.id).subscribe(res => {
      console.log(res);
      this.products = this.products.filter((pro: Product) => pro.id !== this.productToDelete.id);
      this.productToDelete = new Product();
    });
  }

}
