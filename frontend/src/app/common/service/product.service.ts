import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/modules/admin/site/model/product.model';
import { categoryUrl, productUrl } from '../constants/app.constants';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private http: HttpClient
  ) { }


  save(product: Product, id: any): Observable<any> {
    return this.http.post(productUrl.baseUrl + id + '/category', { ...product }, {});
  }

  getCategoryProduct(categoryId: any): Observable<any> {
    return this.http.get(productUrl.baseUrl + categoryId + '/category');
  }

  imageUpload(image: FormData): Observable<any> {
    return this.http.post(productUrl.baseUrl + 'upload', image);
  }
}
