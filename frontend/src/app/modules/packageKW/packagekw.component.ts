import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { routingAnimation } from './router.animations';

@Component({
  selector: 'app-packagekw',
  templateUrl: './packagekw.component.html',
  styleUrls: ['./packagekw.component.scss'],
  animations: [routingAnimation],
})
export class PackagekwComponent implements OnInit {
  title = 'kw';
  constructor(private router: Router, public translate: TranslateService) { }
  ngOnInit(): void {
    const currentLang = localStorage.getItem('lang');
    if (!currentLang) {
      localStorage.setItem('lang', 'en');
      this.translate.use('en');
    }
    this.langChanged(currentLang);
    this.translate.use(currentLang);
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
  }

  langChanged(lang): void {
    const elEn = document.querySelector('#bootstrap-en');
    if (lang === 'ar') {
      // add bootstrap ar
      elEn.remove();

      this.generateLinkElement({
        id: 'bootstrap-ar',
        href: 'assets/vendor/bootstrap/css/bootstrap-ar.css',
        dir: 'rtl',
        lang: 'ar',
      });
    } else {
      // en
      document.querySelector('#bootstrap-ar').remove();
      this.generateLinkElement({
        id: 'bootstrap-en',
        href: 'assets/vendor/bootstrap/css/bootstrap.css',
        dir: 'ltr',
        lang: 'en',
      });
    }
  }
  generateLinkElement(props): void {
    const el = document.createElement('link');
    const htmlEl = document.getElementsByTagName('html')[0];
    el.rel = 'stylesheet';
    el.href = props.href;
    el.id = props.id;
    document.head.prepend(el);
    htmlEl.setAttribute('dir', props.dir);
    htmlEl.setAttribute('lang', props.lang);
  }
}



