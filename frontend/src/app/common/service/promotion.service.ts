import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { promotionUrl } from '../constants/app.constants';

@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  constructor(
    private http: HttpClient
  ) { }

  save(promotion: any): Observable<any> {
    return this.http.post(promotionUrl.baseUrl, { ...promotion }, {});
  }

  get(productId: any): Observable<any> {
    const params = new HttpParams()
      .set('productId', productId);
    console.log(promotionUrl.baseUrl);
    return this.http.get(promotionUrl.baseUrl, { params });
  }
}
