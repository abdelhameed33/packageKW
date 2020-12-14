import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { NotificationService } from 'src/app/common/service/notification.service';

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
  constructor(
    public translate: TranslateService,
    private notificationService: NotificationService
  ) { }

  ngOnInit(): void {
    this.lang = localStorage.getItem('lang');

    this.notificationService.sendChat('Hello from the hello');
  }

  changeLanguage(lang): void {
    localStorage.setItem('lang', lang);
    location.reload();
  }
}
