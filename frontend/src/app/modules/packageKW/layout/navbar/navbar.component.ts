import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  authDropDown = false;
  cartDropDown = false;
  lang = '';
  overlay = true;
  showMenu = false;
  constructor(public translate: TranslateService) { }

  ngOnInit(): void {
    this.lang = localStorage.getItem('lang');
  }

  changeLanguage(lang): void {
    localStorage.setItem('lang', lang);
    location.reload();
  }
}
