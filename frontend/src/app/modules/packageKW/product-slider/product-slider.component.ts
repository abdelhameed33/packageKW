import { TranslateService } from '@ngx-translate/core';
import { Component, OnInit } from '@angular/core';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-product-slider',
  templateUrl: './product-slider.component.html',
  styleUrls: ['./product-slider.component.scss'],
})
export class ProductSliderComponent implements OnInit {
  public config2: SwiperOptions = {
    a11y: { enabled: true },
    direction: 'horizontal',
    lazy: true,

    keyboard: true,
    mousewheel: false,
    scrollbar: false,
    pagination: false,
    centeredSlides: false,
    loop: true,
    navigation: {
      nextEl: '.Products_content .slider_control .right_arrow',
      prevEl: '.Products_content .slider_control .left_arrow',
    },
    slidesPerView: 4,
    spaceBetween: 30,
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 15,
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },
  };

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
  ];
  constructor(public translate: TranslateService) {}

  ngOnInit(): void {}
}
