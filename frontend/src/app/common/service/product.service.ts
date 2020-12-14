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
    return this.http.post(categoryUrl.baseUrl + id + '/products', { ...product }, {});
  }

  getOne(id: any): Observable<any> {
    return this.http.get(productUrl.baseUrl + id);
  }

  deleteOne(id: any): Observable<any> {
    return this.http.delete(productUrl.baseUrl + id);
  }

  getCategoryProducts(categoryId: any): Observable<any> {
    return this.http.get(productUrl.baseUrl);
  }

  imageUpload(image: FormData): Observable<any> {
    return this.http.post(APP_URL + 'images', image);
  }

  removeImage(image: string): Observable<any> {
    return this.http.delete(APP_URL + 'images/' + image);
  }
}
