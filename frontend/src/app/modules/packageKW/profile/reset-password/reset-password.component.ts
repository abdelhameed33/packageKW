import { TranslateService } from '@ngx-translate/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss'],
})
export class ResetPasswordComponent implements OnInit {
  inputPassword = true;
  inputPassword2 = true;

  inputPassword3 = true;

  constructor(public translate: TranslateService) {}

  ngOnInit(): void {}
}
