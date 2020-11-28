import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/common/service/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private authService: AuthenticationService
  ) { }

  ngOnInit(): void {
    this.authService.currentUser.subscribe(res => {
      console.log(res);

    });
  }

  logout(): void {
    this.authService.logout();
    location.replace('/admin/login');
  }

}
