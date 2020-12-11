import { TranslateService } from '@ngx-translate/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  inputPassword = true;
  inputPassword2 = true;
  constructor(public translate: TranslateService) {}

  ngOnInit(): void {}
}
