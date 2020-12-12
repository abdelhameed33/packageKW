import { TranslateService } from '@ngx-translate/core';
import { Component, OnInit } from '@angular/core';

import { SwiperOptions } from 'swiper';
@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent implements OnInit {
  public config: SwiperOptions = {
    a11y: { enabled: true },
    direction: 'horizontal',
    slidesPerView: 1,
    keyboard: true,
    mousewheel: false,
    scrollbar: false,
    pagination: false,
    loop: true,
    navigation: {
      nextEl: '.main_slider .slider_control .right_arrow',
      prevEl: '.main_slider .slider_control .left_arrow',
    },
  };
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
      nextEl: '.Products .slider_control .right_arrow',
      prevEl: '.Products .slider_control .left_arrow',
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
  mainSlider = [
    {
      photo: '../../../assets/images/main_slider.png',
    },
    {
      photo: '../../../assets/images/main_slider.png',
    },
  ];
  constructor(public translate: TranslateService) {}

  ngOnInit(): void {}
}
