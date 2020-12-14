import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SERVER } from 'src/app/common/constants/app.constants';
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
  SERVER = SERVER;
  images: any[] | undefined = [];
  salePercent = 0;
  newPrice = 0;
  endDate = new Date().toISOString();
  minDate = new Date().toJSON().split('T')[0];

  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute,
    private promotionService: PromotionService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(res => {
      const productId = res.get('id');
      this.productService.getOne(productId).subscribe((product: Product) => {
        this.product = product;
        this.computeSale(product);
        this.images = this.product?.images;
      });
    });

  }

  computeNewPrice(): void {
    this.newPrice = this.product?.price - (this.product?.price * this.salePercent) / 100;
  }

  computeSale(myProduct: Product): void {
    console.log(myProduct);
    if (myProduct?.promotions?.length > 0 && this.validateDate(myProduct)) {
      const sale = myProduct?.promotions[0].percent;
      this.newPrice = Math.round((this.product?.price - (this.product?.price * sale) / 100) * 100) / 100;
      this.salePercent = sale;
      this.endDate = new Date(myProduct?.promotions[0].end_date).toJSON().split('T')[0];

    }
  }

  validateDate(myProduct): boolean {
    return new Date(myProduct.promotions[0].end_date) >= new Date();
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

  addSale(): void {
    if (this.salePercent) {
      console.log(this.endDate);
      const promotion = {
        percent: this.salePercent,
        start_date: new Date().toISOString(),
        end_date: new Date(this.endDate).toISOString(),
        productId: this.product?.id
      };
      //  console.log(promotion);
      this.promotionService.save(promotion).subscribe(res => {
        console.log(res);
        $('#add-sale').modal('hide');
      }, err => {
        console.log(err);
      });
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
