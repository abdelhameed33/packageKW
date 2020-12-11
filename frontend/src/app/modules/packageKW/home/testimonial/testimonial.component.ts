import { TranslateService } from '@ngx-translate/core';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.scss'],
})
export class TestimonialComponent implements OnInit {
  public config: SwiperOptions = {
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
      nextEl: '.customer_opinion .slider_control .right_arrow',
      prevEl: '.customer_opinion .slider_control .left_arrow',
    },
    slidesPerView: 2,
    spaceBetween: 0,
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      991: {
        slidesPerView: 2,
        spaceBetween: 0,
      },
    },
  };
  constructor(public translate: TranslateService) {}

  ngOnInit(): void {}
}
