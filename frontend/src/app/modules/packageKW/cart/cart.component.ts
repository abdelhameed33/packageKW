import { TranslateService } from '@ngx-translate/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  cartObject = [
    {
      img: '../../../assets/images/pro5.png',
      name: 'Notebook',
      dec: 'Ref: 10145444645',
      checkoutAmount: '40',
    },
    {
      img: '../../../assets/images/pro6.png',
      name: 'Notebook',
      dec: 'Ref: 10145444645',
      checkoutAmount: '40',
    },
    {
      img: '../../../assets/images/pro7.png',
      name: 'Notebook',
      dec: 'Ref: 10145444645',
      checkoutAmount: '40',
    },
    {
      img: '../../../assets/images/pro8.png',
      name: 'Notebook',
      dec: 'Ref: 10145444645',
      checkoutAmount: '40',
    },
  ];
  constructor(public translate: TranslateService) { }

  ngOnInit(): void { }
}
