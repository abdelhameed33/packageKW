import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { APP_URL, productUrl } from 'src/app/common/constants/app.constants';
import { ProductService } from 'src/app/common/service/product.service';
import { PromotionService } from 'src/app/common/service/promotion.service';
import { Product } from '../model/product.model';
declare var $: any;

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.scss']
})
export class ProductViewComponent implements OnInit {

  product: any = null;
  APP_URL = APP_URL;
  images: any[] | undefined = [];
  salePercent = 0;
  newPrice = 0;
  endDate = new Date().toLocaleString();

  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute,
    private promotionService: PromotionService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(res => {
      const productId = res.get('id');

      this.promotionService.get(productId).subscribe(res => {
        console.log(res);
      })
      this.productService.getOne(productId).subscribe((product: Product) => {
        this.product = product;
        this.images = this.product?.images;
        console.log(this.product?.images);
      });
    });

  }

  computeNewPrice(): void {
    this.newPrice = this.product?.price - (this.product?.price * this.salePercent) / 100;
  }

  computeSalePercent(): void {
    const discount = this.product?.price - this.newPrice;
    this.salePercent = (discount * 100) / this.product?.price;
    console.log(discount);
    console.log(this.salePercent);
    //  return this.product?.price - (this.product?.price * this.salePercent) / 100;
  }

  convertDate(date: any): string {
    return new Date(date).toLocaleString();
  }

  addSale() {
    if (this.salePercent) {
      console.log(this.endDate);
      const promotion = {
        percent: this.salePercent,
        start_date: new Date().toISOString(),
        end_date: new Date(this.endDate).toISOString(),
        productId: this.product?.id
      };
      console.log(promotion);
      // this.promotionService.save(promotion).subscribe(res => {
      //   console.log(res);
      //   $("#add-sale").modal("hide");
      // }, err => {
      //   console.log(err);
      // })
    }
  }

  isArray(value): boolean {
    return Array.isArray(value);
  }

  getProductProps(object: string): [] {
    try {
      return JSON.parse(object);
    } catch (e) { }
    return [];
  }

}
