import { TranslateService } from '@ngx-translate/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabsgroup',
  templateUrl: './tabsgroup.component.html',
  styleUrls: ['./tabsgroup.component.scss'],
})
export class TabsgroupComponent implements OnInit {
  tabDec = true;
  tabReview = false;
  constructor(public translate: TranslateService) { }

  ngOnInit(): void { }

  toggleTab(): void {
    this.tabDec = !this.tabDec;
    this.tabReview = !this.tabReview;
  }
}
