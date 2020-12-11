import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs/internal/observable/of';
import { Product } from 'src/app/modules/admin/site/model/product.model';
import { APP_URL, categoryUrl, productUrl } from '../constants/app.constants';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private http: HttpClient
  ) { }


  save(product: Product, id: any): Observable<any> {
    return this.http.post(productUrl.baseUrl + id, { ...product }, {});
  }

  getOne(id: any): Observable<any> {
    return this.http.get(productUrl.baseUrl + id);
  }

  deleteOne(id: any): Observable<any> {
    return this.http.delete(productUrl.baseUrl + id);
  }

  getCategoryProduct(categoryId: any): Observable<any> {
    return this.http.get(productUrl.baseUrl + categoryId + '/category');
  }

  imageUpload(image: FormData): Observable<any> {
    return this.http.post(APP_URL + '/api/image/' + 'upload', image);
  }

  removeImage(image: string): Observable<any> {
    // return this.http.delete(APP_URL + '/api/image/', image);
    return of({ image });
  }
}
