import { TranslateService } from '@ngx-translate/core';
import { SwiperOptions } from 'swiper';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-business-card',
  templateUrl: './business-card.component.html',
  styleUrls: ['./business-card.component.scss'],
})
export class BusinessCardComponent implements OnInit {
  public config2: SwiperOptions = {
    a11y: { enabled: true },
    direction: 'vertical',
    lazy: true,
    keyboard: true,
    mousewheel: true,
    scrollbar: false,
    pagination: false,
    centeredSlides: false,
    loop: true,
    navigation: {
      nextEl: '.Products_content .slider_control .right_arrow',
      prevEl: '.Products_content .slider_control .left_arrow',
    },
    slidesPerView: 3,
    // spaceBetween: 30,
    breakpoints: {
      0: {
        slidesPerView: 3,
        spaceBetween: 15,
        direction: 'horizontal',
      },
      640: {
        slidesPerView: 3,
        spaceBetween: 15,
        direction: 'horizontal',
      },
      767: {
        slidesPerView: 3,
        spaceBetween: 15,
        direction: 'horizontal',
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 30,
        direction: 'vertical',
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  };

  sliderImage = [
    './assets/images/slider_image.png',
    './assets/images/pro8.png',
    './assets/images/pro7.png',
    './assets/images/pro6.png',
    './assets/images/pro5.png',
    './assets/images/pro8.png',
    './assets/images/pro7.png',
    './assets/images/pro6.png',
    './assets/images/pro5.png',
  ];

  selectedImage;
  constructor(public translate: TranslateService) { }

  ngOnInit(): void {
    this.selectedImage = this.sliderImage[0];
  }
  getImage(src): void {
    this.selectedImage = src;
  }
}
