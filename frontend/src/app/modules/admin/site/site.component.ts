import { Component, OnInit } from '@angular/core';
import { NotificationService } from 'src/app/common/service/notification.service';

@Component({
  selector: 'app-site',
  templateUrl: './site.component.html',
  styleUrls: ['./site.component.scss']
})
export class SiteComponent implements OnInit {

  fullYear = new Date().getFullYear();
  constructor(
    private notifactionService: NotificationService
  ) { }

  ngOnInit(): void {
    this.notifactionService.receiveChat().subscribe(res => {
      console.log(res + ' ------------------------------');
    });
  }

}
