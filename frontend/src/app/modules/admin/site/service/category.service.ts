import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from '../model/category.model';
import { categoryUrl } from 'src/app/common/constants/app.constants';
import { param } from 'jquery';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  get(req?: any): Observable<any> {

    return this.http.get(categoryUrl.baseUrl, {
      params: req,
    });
  }

  getById(id: any): Observable<any> {
    return this.http.get(categoryUrl.baseUrl + '/' + id);
  }

  update(newCategory: Category): Observable<any> {
    return this.http.patch(categoryUrl.baseUrl + '/' + newCategory.id, newCategory);
  }

  save(newCategory: Category): Observable<any> {
    return this.http.post(categoryUrl.baseUrl, newCategory);
  }

  delete(category: Category): Observable<any> {
    return this.http.delete(categoryUrl.baseUrl + '/' + category.id);
  }

}
