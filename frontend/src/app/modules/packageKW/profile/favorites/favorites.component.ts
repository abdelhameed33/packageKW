import { TranslateService } from '@ngx-translate/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss'],
})
export class FavoritesComponent implements OnInit {
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
  constructor(public translate: TranslateService) {}

  ngOnInit(): void {}
}
