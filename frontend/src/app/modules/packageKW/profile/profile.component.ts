import { TranslateService } from '@ngx-translate/core';
import { routingAnimation } from './../router.animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  animations: [routingAnimation],
})
export class ProfileComponent implements OnInit {
  constructor(public translate: TranslateService) {}

  ngOnInit(): void {}
}
