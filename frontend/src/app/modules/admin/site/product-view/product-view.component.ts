import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { APP_URL, productUrl } from 'src/app/common/constants/app.constants';
import { ProductService } from 'src/app/common/service/product.service';
import { Product } from '../model/product.model';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.scss']
})
export class ProductViewComponent implements OnInit {

  product: Product = new Product();
  APP_URL = APP_URL;
  images: any[] = [];
  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(res => {
      const productId = res.get('id');
      this.productService.getOne(productId).subscribe((product: Product) => {
        this.product = product;
        this.images = this.product?.images;
        console.log(this.product?.images);
      });
    });

  }

}
