import { Component, OnInit } from '@angular/core';
import { NotificationService } from 'src/app/common/service/notification.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-site',
  templateUrl: './site.component.html',
  styleUrls: ['./site.component.scss'],
})
export class SiteComponent implements OnInit {
  fullYear = new Date().getFullYear();
  constructor(
    private notifactionService: NotificationService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.notifactionService.receiveChat().subscribe((res) => {
      this.toastr.success('Hello world!', 'Toastr fun!');
    });
    document.querySelector('#bootstrap-ar').remove();
    document.querySelector('#bootstrap-en').remove();
  }
}
