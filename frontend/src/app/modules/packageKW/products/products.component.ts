import { TranslateService } from '@ngx-translate/core';
import { Component, OnInit } from '@angular/core';
import { Options } from '@angular-slider/ngx-slider';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  productObject = [
    {
      img: '../../../assets/images/product1.png',
      name: 'Notebook',
      dec: ' The pages lay nice and flat The paper’s a joy to write on.',
      sale: true,
    },
    {
      img: '../../../assets/images/product2.png',
      name: 'Notebook',
      dec: ' The pages lay nice and flat The paper’s a joy to write on.',
      sale: false,
    },
    {
      img: '../../../assets/images/product3.png',
      name: 'Notebook',
      dec: ' The pages lay nice and flat The paper’s a joy to write on.',
      sale: false,
    },
    {
      img: '../../../assets/images/product4.png',
      name: 'Notebook',
      dec: ' The pages lay nice and flat The paper’s a joy to write on.',
      sale: false,
    },
    {
      img: '../../../assets/images/pro9.png',
      name: 'Notebook',
      dec: ' The pages lay nice and flat The paper’s a joy to write on.',
      sale: false,
    },
    {
      img: '../../../assets/images/pro8.png',
      name: 'Notebook',
      dec: ' The pages lay nice and flat The paper’s a joy to write on.',
      sale: true,
    },
    {
      img: '../../../assets/images/pro5.png',
      name: 'Notebook',
      dec: ' The pages lay nice and flat The paper’s a joy to write on.',
      sale: true,
    },
    {
      img: '../../../assets/images/pro6.png',
      name: 'Notebook',
      dec: ' The pages lay nice and flat The paper’s a joy to write on.',
      sale: false,
    },
    {
      img: '../../../assets/images/pro7.png',
      name: 'Notebook',
      dec: ' The pages lay nice and flat The paper’s a joy to write on.',
      sale: true,
    },
  ];
  value = 40;
  highValue = 60;
  options: Options = {
    floor: 0,
    ceil: 100,
  };
  constructor(public translate: TranslateService) { }

  ngOnInit(): void { }
}
