import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';
import { APP_URL, categoryUrl } from '../constants/app.constants';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(
    private http: HttpClient
  ) { }

  getAnalyticsData(): Observable<any[]> {
    return forkJoin([
      this.http.get(APP_URL + 'auth/users/'),
      this.http.get(APP_URL + 'orders'),
      this.http.get(categoryUrl.baseUrl + 'analytics/data')
    ]);
    // return { users, orders, categories };
  }
}
